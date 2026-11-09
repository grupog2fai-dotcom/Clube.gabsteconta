(() => {
  'use strict';
  const config = window.GABS_CONFIG || {};
  const byId = id => document.getElementById(id);
  const safeUrl = value => { try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; } catch { return null; } };
  const safeFormUrl = value => {
    const url = safeUrl(value);
    if (!url) return null;
    const parsed = new URL(url);
    return (parsed.hostname === 'forms.gle' && parsed.pathname.length > 1 ||
      parsed.hostname === 'docs.google.com' && parsed.pathname.startsWith('/forms/') && parsed.pathname.endsWith('/viewform')) ? url : null;
  };
  const email = typeof config.contactEmail === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contactEmail) ? config.contactEmail : null;
  const formUrl = safeFormUrl(config.formRequestUrl);
  const networks = { instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', kwai: 'Kwai' };
  const links = Object.entries(networks).map(([key,label]) => ({label,url:safeUrl(config.social?.[key])})).filter(item=>item.url);
  if (links.length) {
    byId('network-list').replaceChildren(...links.map(item => {
      const link=document.createElement('a');link.href=item.url;link.target='_blank';link.rel='noopener noreferrer';
      const label=document.createElement('span');label.textContent=item.label;
      const arrow=document.createElementNS('http://www.w3.org/2000/svg','svg');arrow.setAttribute('viewBox','0 0 24 24');arrow.setAttribute('aria-hidden','true');
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d','M7 17 17 7M7 7h10v10');arrow.append(path);
      link.append(label,arrow);return link;
    }));
  }
  const episode=safeUrl(config.episodeUrl);
  if(episode){ const link=byId('episode-link');link.href=episode;link.target='_blank';link.rel='noopener noreferrer'; }
  if(email){
    const link=document.createElement('a');link.href='mailto:'+email;link.textContent=email;link.className='contact-link';
    byId('footer-contact').replaceChildren(link);
  }
  if(email && formUrl){
    const link=byId('request-access');link.href=formUrl;link.target='_blank';link.rel='noopener noreferrer';link.hidden=false;
    byId('access-pending').hidden=true;
  }
  const project=config.socialProject || {};
  const budgetUrl=safeUrl(project.budgetUrl);
  const ready = config.supportEnabled === true && email && formUrl &&
    config.pix?.key && config.pix?.recipient && config.pix?.bank &&
    project.name && project.stage === 'em_criacao' && project.purpose && project.milestones && budgetUrl &&
    config.period && config.accountabilityDate && config.bonusDate;
  if(ready){
    byId('support-pending').hidden=true;byId('payment').hidden=false;
    byId('pix-key').textContent=config.pix.key;
    byId('pix-recipient').textContent=`Recebedor esperado: ${config.pix.recipient} · ${config.pix.bank}`;
    byId('campaign-details').textContent=`Campanha: ${config.period}. 50% dos apoios brutos confirmados, excluídos os estornos, serão reservados à estruturação de ${project.name}, em fase de criação. Os outros 50% mantêm a série e cobrem seus custos.`;
    byId('bonus-details').textContent=`Próximo bônus: ${config.bonusDate}.`;
    byId('cause-status').textContent=`Projeto em criação: ${project.name}. Finalidade da reserva: ${project.purpose}. Metas: ${project.milestones}.`;
    const link=document.createElement('a');link.href=budgetUrl;link.target='_blank';link.rel='noopener noreferrer';link.textContent=' Ver metas e orçamento.';byId('cause-status').append(link);
    byId('accountability-details').textContent=`Prestação de contas desta campanha: ${config.accountabilityDate}. Serão informados os recursos reservados, despesas comprovadas e saldo.`;
  }
  const offer=document.getElementById('apoio'); const sticky=document.querySelector('.sticky-join');
  if(offer&&sticky&&'IntersectionObserver' in window){new IntersectionObserver(entries=>{sticky.classList.toggle('is-at-offer',entries[0].isIntersecting);},{threshold:.25}).observe(offer);}
  byId('copy-pix').addEventListener('click',async()=>{
    if(!ready)return;
    try{await navigator.clipboard.writeText(config.pix.key);byId('copy-status').textContent='Chave copiada. Confira o recebedor no seu banco.';}
    catch{byId('copy-status').textContent='Não foi possível copiar automaticamente. Selecione a chave acima para copiar.';}
  });
})();
