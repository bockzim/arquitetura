# Guia de conteúdo

Tudo o que muda no dia a dia está em `js/data.js`. Não é preciso editar `main.js`, `styles.css` nem `index.html`.

## Trocar textos, contatos e serviços

Em `js/data.js`, edite o bloco `SITE` (nome, WhatsApp, e-mail) e a lista `SERVICES`. O WhatsApp vai só com dígitos: `55` + DDD + número (ex.: `5521999999999`).

## Adicionar um projeto

1. Crie a pasta `assets/images/<slug>/` (o slug vira o endereço: `#/projeto/<slug>`).
2. Coloque as fotos em WebP ou JPG, com no máximo 1800 px de largura. A primeira é a capa.
3. Em `js/data.js`, copie um item de `PROJECTS` e ajuste `slug`, `title`, `loc`, `cat`, `year`, `area`, `concept` e `images`.
   Cada imagem precisa de `src`, `w`, `h` (tamanho real em pixels) e `alt` (descrição para leitores de tela).
4. `r` define a proporção da capa na grade da home (`4/5`, `3/4`, `1/1`, `4/3`, `21/9`). A grade da home foi desenhada para 5 projetos; com mais ou menos, a composição muda e vale revisar.

A galeria se organiza sozinha: foto horizontal ocupa a linha inteira, fotos verticais entram em pares.

## Trocar o vídeo do hero

Substitua `assets/video/hero.mp4` (MP4 H.264, sem áudio, 1080p ou menos, de 10 a 20 s, até uns 5 MB) e `assets/video/hero-poster.jpg` (um quadro do vídeo). Comando para comprimir com ffmpeg:

    ffmpeg -i original.mp4 -an -vf "scale=1600:-2,fps=24" -c:v libx264 -crf 31 -movflags +faststart -pix_fmt yuv420p hero.mp4

Se o vídeo não carregar, o visitante vê o pôster. Com "reduzir movimento" ativado no sistema, o vídeo não toca.

## Formulário de contato

Fluxo: o visitante preenche → os dados vão para um serviço de formulário, que envia um e-mail ao escritório → a tela de sucesso oferece "Continuar no WhatsApp" com uma mensagem já preenchida.

Para ativar o envio real:

1. Crie uma conta em um serviço de formulário (Formspree, Web3Forms ou similar) e cadastre o e-mail que vai receber os pedidos.
2. Copie a URL de envio que o serviço fornece.
3. Cole em `SITE.formEndpoint` no `js/data.js`.

Enquanto `formEndpoint` estiver vazio, o site funciona em **modo demonstração**: mostra o sucesso, mas nenhum dado é enviado. Proteções já incluídas: campo invisível contra robôs, validação dos campos obrigatórios e consentimento LGPD. Falta apenas publicar uma página de política de privacidade e linká-la no aviso de consentimento.

## Design system (resumo)

- **Tokens** no início de `css/styles.css` (`:root`): cores (marfim, preto suave, cinza mineral, pedra e um verde-cinza discreto), escala de espaçamento `--s1` a `--s7`, durações `--fast` 0,22 s, `--norm` 0,45 s e `--slow` 0,85 s, e uma única curva `--ease`. Há tema escuro automático.
- **Tailwind** (`js/tw-config.js`): os tokens viram classes, por exemplo `bg-bg`, `text-mute`, `border-line`, `pt-s6`, `px-pad`, `duration-norm`, `ease-quiet`.
- **Tipografia:** Newsreader nos títulos (`font-serif`, peso leve) e Instrument Sans na interface (`font-sans`).
- **Breakpoint:** um só, `md` = 900 px, definido pelo conteúdo. Abaixo dele o layout é de uma coluna; a partir dele entram a grade de 12 colunas e a composição editorial.
- **Movimento:** nada é animado sem propósito; `prefers-reduced-motion` desliga animações e o vídeo.
- **Classes repetidas** (títulos, botões, campos) ficam como constantes no topo do bloco de templates em `js/main.js` (`H2`, `CTA`, `FIELD`, etc.).
