---
name: Clube Gabs te conta
description: Uma história em quadrinhos que convida a escolher.
colors:
  cream: "#fff5de"
  ink: "#10282e"
  body: "#345156"
  teal: "#35c6aa"
  deep: "#15565b"
  gold: "#f4c66e"
  coral: "#e47d57"
  blue: "#2474ad"
  line: "#b9c6b5"
typography:
  display:
    fontFamily: "Bangers, sans-serif"
    fontSize: "clamp(52px, 5.35vw, 72px)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "0.008em"
  headline:
    fontFamily: "Bangers, sans-serif"
    fontSize: "clamp(40px, 4vw, 52px)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "0.008em"
  body:
    fontFamily: "DM, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  action:
    fontFamily: "DM, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.3
rounded:
  surface: "16px"
  action: "12px"
  compact: "10px"
spacing:
  close: "16px"
  regular: "24px"
  mobile-section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "13px 22px"
  offer-card:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "30px"
---

# Design System: Clube Gabs te conta

## Overview

**Creative North Star: "Uma história em quadrinhos que convida a escolher."**

Gabriel reconhecível, quadra acolhedora e escolhas A/B aproximam a série do visitante. Creme predominante dá espaço à leitura; teal, dourado e contornos escuros mantêm a energia cartoon. A identidade deriva do código atual em dist e da direção aprovada em ../lancamento/revisao-site, sem importar a aparência de versões anteriores.

**Key Characteristics:**
- Gabriel consistente em personagem, avatar e compartilhamento.
- Creme para leitura, teal para energia e ouro para ação.
- Bangers nos títulos; DM Sans nas explicações e botões.
- A coral e B azul, sempre acompanhados de letras.

Verificação: QA estática e revisão visual em Chrome nos tamanhos 1440, 390 e 360px. Imagens/fontes carregadas; sem transbordamento lateral ou erros de console/rede. Registro de publicação mantido na documentação interna de lançamento.

## Colors

### Primary
Deep destaca trechos de títulos e o bloco do Clube; gold identifica ações. Teal pertence à cena e aos assets de Gabriel.

### Secondary
Coral identifica A; blue identifica B. O azul atual é o token extraído do CSS, mesmo que o plano anterior tenha sugerido outro valor.

### Neutral
Cream é o fundo principal e da oferta. Ink define texto forte e contornos; body é a leitura corrente. Line organiza grupos. Tons claros de seção são superfícies contextuais, não novas cores de marca.

**The Choice Rule.** Manter A coral e B azul; a letra garante identificação além da cor.

## Typography
Bangers local (400) em títulos e pequenas expressões gráficas. DM Sans local, alias CSS DM, em leitura (400), ações, valores, rótulos e FAQ (700). Não adicionar Fraunces ou fontes externas. Em celular o título principal é 45px/1.02 e cai a 42px até 370px; H2 comum usa 39px. Parágrafos têm teto de 65ch, com introduções mais curtas.

**The Reading Rule.** Usar DM Sans nos botões e valores; preservar Bangers como voz de título.

## Layout
Container de até 1144px com margens de 32px; até 700px, margens de 20px; até 370px, 16px. O intervalo de 1000px compacta colunas; até 700px, hero e seções principais empilham. Seções usam 76px verticais na base e 48px em celular. O hero móvel ordena texto, vinheta horizontal e ação, com intervalos de 17px. Essa composição é uma aplicação da identidade, não regra para toda superfície.

A faixa inferior reserva 68px na base ou 66px em celular, além da área segura. Surge após a ação inicial sair da tela, recua na oferta e ao focar controles de leitura/acesso; é ocultada com altura de viewport até 520px.

## Elevation & Depth
Contornos escuros de 2–3px definem quadros e ações. Sombras suaves e discretas sustentam oferta, botão de reprodução e faixa fixa; o restante depende de tom, linha e espaço. A vinheta integra Gabriel ao cenário de quadra, sem radial monumental ou personagem gigante destacado do ambiente.

## Shapes
Superfícies usam o raio compartilhado, ações o raio de ação e etiquetas menores os raios compactos. Avatar e disco de reprodução são circulares; A/B são pequenas placas arredondadas com rotação leve. SVG próprio usa traço de 2px com pontas e junções arredondadas.

## Components

### Actions and offer
Botão principal dourado, borda de 2px e altura mínima de 52px; no hero móvel, 51px, e na faixa fixa, 48px. Hover clareia e sobe 2px em 140ms; pressão desce 1px. Foco visível usa contorno azul de 3px e afastamento de 5px; sobre o bloco deep, dourado. O valor usa DM Sans 700 e algarismos tabulares, acompanhado de pagamento único e sem mensalidade.

### Pix and access
Chave selecionável e quebra de linha segura. A cópia apresenta status anunciado, bloqueia o botão durante a operação e oferece seleção manual se o clipboard falhar. Cor de sucesso acompanha texto explícito. O Google Forms é externo; não há formulário de campos local para documentar.

### Presentation
Cartaz compacto abre vídeo vertical 9:16 íntegro, com controles e playsinline. Fonte do vídeo só é atribuída por solicitação. Sem autoplay inicial; falha de reprodução revela um link direto. Gabriel permanece o mesmo do header, hero, ícones e compartilhamento.

### FAQ, navigation and motion
Expansões nativas com divisórias e chevron; links de propósito/reconhecimento abrem o detalhe correspondente. Redes oficiais são links de texto. A linha da quadra entra em 450ms e A/B em 400ms, uma vez; preferência por movimento reduzido desliga animação, transição e rolagem suave.

## Do's and Don'ts

### Do:
- **Do** preservar Gabriel aprovado em todos os pontos da marca.
- **Do** usar creme predominante, contornos claros e texto de ação em DM Sans.
- **Do** manter letras A/B, foco explícito e conteúdo legível sem movimento.
- **Do** distinguir cópia de Pix, pedido de acesso e convite entregue.

### Don't:
- **Don't** trocar Gabriel por Davi, foto ou personagem genérico.
- **Don't** usar escudos de clubes, marcas, número 11 ou uniformes identificáveis.
- **Don't** inventar provas sociais, métricas, urgência ou resultados do projeto de idosos.
- **Don't** inserir rótulos de produção ou ferramentas no fluxo público.

A nota de preço no hero usa 13px no celular. Metadados compactos não são o tamanho padrão da leitura. A apresentação é carregada por solicitação, com controles nativos e legendas incorporadas.
