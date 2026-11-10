(() => {
  'use strict';
  const config = window.GABS_CONFIG || {};
  const byId = id => document.getElementById(id);
  const safeUrl = value => {
    if (typeof value !== 'string') return null;
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; }
    catch { return null; }
  };
  const safeFormUrl = value => {
    const href = safeUrl(value);
    if (!href) return null;
    const url = new URL(href);
    return (url.hostname === 'forms.gle' && url.pathname.length > 1) ||
      (url.hostname === 'docs.google.com' && url.pathname.startsWith('/forms/') && url.pathname.endsWith('/viewform')) ? href : null;
  };
  const email = typeof config.contactEmail === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contactEmail) ? config.contactEmail : null;
  const formUrl = safeFormUrl(config.formRequestUrl);
  const pix = config.pix || {};
  const ready = config.supportEnabled === true && Number(config.entryPrice) === 9.9 &&
    Boolean(email && formUrl && typeof pix.key === 'string' && pix.key.trim() &&
      typeof pix.recipient === 'string' && pix.recipient.trim() && typeof pix.bank === 'string' && pix.bank.trim());

  document.querySelectorAll('[data-network]').forEach(link => {
    const href = safeUrl(config.social?.[link.dataset.network]);
    if (href) link.href = href;
  });
  if (email) {
    byId('footer-contact').href = 'mailto:' + email;
    byId('footer-contact').textContent = email;
  }
  if (email && formUrl) byId('request-access').href = formUrl;
  byId('payment').hidden = !ready;
  byId('payment-unavailable').hidden = ready;
  const copyButton = byId('copy-pix');
  copyButton.disabled = !ready;
  if (ready) {
    byId('pix-key').textContent = pix.key;
    const bank = document.createElement('span');
    bank.textContent = pix.bank;
    byId('pix-recipient').replaceChildren(document.createTextNode(pix.recipient), bank);
  }
  copyButton.addEventListener('click', async () => {
    if (!ready) return;
    const status = byId('copy-status');
    copyButton.disabled = true;
    copyButton.setAttribute('aria-busy', 'true');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
      await navigator.clipboard.writeText(pix.key);
      status.textContent = 'Chave copiada! Confira o nome do recebedor no seu banco.';
      copyButton.classList.add('is-copied');
    } catch {
      const range = document.createRange();
      range.selectNodeContents(byId('pix-key'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'A cópia automática não funcionou. A chave está selecionada: copie pelo menu do seu aparelho.';
    } finally {
      copyButton.disabled = false;
      copyButton.removeAttribute('aria-busy');
    }
  });

  const launch = byId('video-launch');
  const video = byId('presentation-video');
  const videoStatus = byId('video-status');
  launch.addEventListener('click', async () => {
    launch.hidden = true;
    video.hidden = false;
    videoStatus.hidden = true;
    if (!video.getAttribute('src')) video.src = video.dataset.src;
    video.focus({ preventScroll: true });
    try { await video.play(); }
    catch { videoStatus.hidden = false; }
  });
  video.addEventListener('error', () => { videoStatus.hidden = false; });

  document.querySelectorAll('a[href="#uso-do-apoio"], a[href="#reconhecimento"]').forEach(link => {
    link.addEventListener('click', () => {
      const detail = byId(link.hash.slice(1));
      if (detail) detail.open = true;
    });
  });
  if (window.location.hash) {
    const linkedDetail = byId(window.location.hash.slice(1));
    if (linkedDetail?.tagName === 'DETAILS') linkedDetail.open = true;
  }

  const sticky = byId('sticky-join');
  const heroActions = byId('hero-actions');
  const offer = byId('apoio');
  let heroPassed = false;
  let offerVisible = false;
  const updateSticky = () => {
    const focused = document.activeElement;
    const readingControl = focused && focused !== document.body && !sticky.contains(focused) &&
      (focused.matches('input, textarea, select, summary, video') || focused.closest('#acesso'));
    sticky.hidden = !(heroPassed && !offerVisible && !readingControl);
  };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === heroActions) heroPassed = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
        if (entry.target === offer) offerVisible = entry.isIntersecting;
      });
      updateSticky();
    }, { threshold: 0 });
    observer.observe(heroActions);
    observer.observe(offer);
    document.addEventListener('focusin', updateSticky);
    document.addEventListener('focusout', () => { requestAnimationFrame(updateSticky); });
  }
})();
