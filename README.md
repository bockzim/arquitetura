# Studio Oliveira — site de arquitetura

Site institucional/portfólio de um escritório de arquitetura, estático (HTML, JavaScript puro e **Tailwind CSS**), sem etapa de build obrigatória. **Todo o conteúdo é de exemplo** (nomes, textos, números, contatos e dados dos projetos) e deve ser substituído pelos dados reais.

## O que tem

- Hero com vídeo em tela cheia (com pôster e botão de pausa)
- Home com projetos em composição editorial, estúdio, serviços e contato
- Página de cada projeto: ficha técnica, conceito, galeria, lightbox (teclado, swipe, contador) e "próximo projeto"
- Formulário de contato qualificado, com validação, LGPD, proteção contra robôs e botão para continuar no WhatsApp
- Menu fullscreen no mobile, cursor contextual só no desktop, tema escuro, `prefers-reduced-motion`

## Estrutura

    index.html               página única (rotas por hash: #/ e #/projeto/<slug>)
    css/styles.css           tokens (cores, espaçamento, tempos), animações e efeitos que o Tailwind não cobre
    js/tw-config.js          configuração do Tailwind (liga os tokens às classes)
    package.json, tailwind.config.js, src/tailwind.css   build opcional do CSS, para produção
    js/data.js               ⟵ CONTEÚDO: projetos, serviços, contatos, vídeo
    js/main.js               lógica (rotas, galeria, lightbox, formulário, cursor)
    assets/images/<slug>/    fotos por projeto (01 = capa)
    assets/video/            hero.mp4 e hero-poster.jpg
    docs/                    catálogo de imagens e guia de conteúdo
    robots.txt

## Tailwind CSS

O layout, a tipografia, as cores e os espaçamentos são feitos com classes utilitárias do Tailwind (v3), escritas nos templates de `js/main.js` e no `index.html`. Os valores vêm dos tokens em `css/styles.css`, mapeados em `js/tw-config.js`, então trocar uma cor ou um espaçamento em `:root` muda o site inteiro. O `css/styles.css` guarda só o que utilitários não resolvem bem: keyframes, menu fullscreen, lightbox, cursor e a revelação no scroll.

**Como está agora:** o Tailwind é carregado pelo CDN de desenvolvimento (`cdn.tailwindcss.com`), que gera o CSS no navegador. Funciona sem instalar nada, mas o próprio Tailwind não recomenda esse modo em produção: é mais pesado e depende de um serviço externo.

**Para produção**, compile o CSS (precisa de Node.js):

    npm install
    npm run build:css

Depois, no `index.html`, remova as duas linhas do Tailwind (o `<script>` do CDN e o de `tw-config.js`) e adicione `<link rel="stylesheet" href="css/tailwind.css">`. Sempre que criar classes novas, rode o build de novo (ou use `npm run watch:css` enquanto edita).

## Ver no computador

Abra um terminal na pasta e rode `python3 -m http.server 8000`, depois acesse http://localhost:8000. (Abrir o `index.html` com duplo clique também funciona, mas alguns navegadores bloqueiam o vídeo nesse modo.)

## Publicar

Suba a pasta inteira em qualquer hospedagem estática: Netlify (arrastar a pasta), Vercel, Cloudflare Pages, GitHub Pages ou hospedagem comum via FTP. Antes de publicar:

1. Troque os dados de exemplo em `js/data.js` (nome, WhatsApp, e-mail, projetos).
2. Ative o formulário (ver `docs/GUIA-DE-CONTEUDO.md`).
3. Confirme os direitos de uso das fotos e do vídeo (ver `docs/CATALOGO-IMAGENS.md`).
4. Atualize `<title>`, descrição e Open Graph no `index.html`.

## Limitações conhecidas

- **SEO:** como as páginas de projeto usam rotas por hash, os buscadores as enxergam como uma só página. URLs reais (`/projetos/residencia-alpha`), metadados por página, `sitemap.xml` e dados estruturados exigem a versão em Next.js, planejada como próxima etapa.
- **Formulário:** só envia de verdade depois de configurado `SITE.formEndpoint`.
- **Build do Tailwind:** a configuração de produção (`package.json`, `tailwind.config.js`) foi escrita mas não foi executada, porque o ambiente de preparo não tinha acesso à internet para instalar o Tailwind. Rode `npm run build:css` e confira o resultado.
- **Testes:** o site foi conferido por leitura e verificação de sintaxe. Não passou por auditoria de performance (Lighthouse) nem por testes em dispositivos reais; faça isso antes de lançar.
- **Vídeo:** o arquivo original (4K, 67 MB) não está no pacote; o do site é uma versão comprimida de 3 MB.
