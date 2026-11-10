# Clube Gabs te Conta

Site estático do Clube Gabs te Conta, com os arquivos públicos prontos para hospedagem. O conteúdo publicado fica em `dist/`, sem instalação de dependências ou etapa de compilação.

## Publicar na Vercel

1. Importe este repositório na Vercel.
2. Use a raiz do repositório como **Root Directory** e **Other** como framework.
3. Mantenha **Build Command** e **Install Command** vazios, com as substituições habilitadas caso o painel exija.
4. Use `dist` como **Output Directory** e publique.

O arquivo `vercel.json` já define essas opções. Não é necessário executar npm ou gerar novamente os arquivos.

Referências: [pular a compilação](https://vercel.com/docs/builds/configure-a-build#skip-build-step) e [Install Command](https://vercel.com/docs/project-configuration/vercel-json#installcommand).

O plano Hobby permite doações, mas oferecer acesso a conteúdo em troca de pagamento caracteriza uso comercial. Verifique o plano adequado antes de ativar essa modalidade: [regras de uso comercial](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage).

## Visualizar localmente

Com Python instalado, execute na raiz deste repositório:

```sh
python -m http.server 8000 --directory dist
```

Abra `http://localhost:8000` no navegador.

## Configuração pública

`dist/config.js` contém as redes sociais, o formulário de solicitação, o e-mail de contato e os dados públicos de Pix autorizados pelo responsável. Esse arquivo é entregue ao navegador; não inclua senhas, chaves de API ou convites privados.

O Pix e o formulário de solicitação estão configurados com os dados confirmados pelo responsável. A entrada no Clube custa R$ 9,90, uma única vez, sem mensalidade. Apoio extra é opcional. O responsável confere o crédito no banco e envia o convite privado por e-mail em até 24 horas após a confirmação e identificação; o site não aprova pagamentos nem libera convites automaticamente.

Metade dos valores confirmados, excluídos os estornos, mantém a série; metade fica reservada à criação do projeto para idosos. O maior apoio extra do episódio recebe os reconhecimentos descritos na página, com autorização para nome/aparência.

## Revisão visual e vídeo

Gabriel é a identidade do cabeçalho, hero, apresentação, ícones e compartilhamento. A apresentação está em `dist/assets/apresentacao-gabriel.mp4`, com cerca de 55 segundos, H.264/AAC e início rápido para reprodução web. Os controles aparecem ao solicitar o vídeo; ele não é baixado automaticamente na abertura.

O site usa os arquivos locais de Bangers e DM Sans, com as licenças em `dist/assets`. A documentação de produto e os tokens estão em `PRODUCT.md` e `DESIGN.md`.

## Estrutura

- `dist/index.html`: página principal.
- `dist/style.css`: estilos e fontes locais.
- `dist/app.js`: comportamento da página.
- `dist/config.js`: configuração pública.
- `dist/assets/`: imagens, vídeo, marcas, fontes e suas licenças OFL.
- `vercel.json`: publicação estática na Vercel.

