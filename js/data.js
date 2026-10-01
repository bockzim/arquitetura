/* =====================================================================
   DADOS DO SITE — edite aqui. Não é preciso mexer em main.js.
   Todos os textos, números e contatos abaixo são EXEMPLOS (placeholders).
   ===================================================================== */
const SITE={
  name:"Studio Oliveira",
  whatsapp:"5500000000000",   // só dígitos, com 55 + DDD. Ex.: 5521999999999
  email:"contato@exemplo.com",
  formEndpoint:""             // URL do serviço de formulário (ver docs/GUIA-DE-CONTEUDO.md). Vazio = modo demonstração
};
const HERO={
  video:"assets/video/hero.mp4",
  poster:"assets/video/hero-poster.jpg",
  alt:"Casa contemporânea com fachada em pedra e madeira, vista aérea"
};
const SERVICES=[
 ["Arquitetura","Projeto completo de residências e edifícios, do estudo preliminar à obra.","Residência Alpha"],
 ["Interiores","Espaços pensados junto com a arquitetura: materiais, luz, mobiliário e detalhe.","Loft Vertical"],
 ["Reforma","Leitura cuidadosa do que existe para decidir o que permanece e o que muda.","Loft Vertical"],
 ["Consultoria","Estudos de viabilidade e diretrizes para quem ainda está escolhendo o terreno.","Casa Pedra"]
];
/* images[0] = capa; as demais formam a galeria. w/h = tamanho real do arquivo (evita salto de layout).
   seed/pal só alimentam a imagem abstrata usada quando um projeto ainda não tem fotos. */
const PROJECTS=[
 {
  "slug": "residencia-alpha",
  "title": "Residência Alpha",
  "loc": "São Paulo, SP",
  "cat": "Residencial",
  "year": 2026,
  "area": "450 m²",
  "seed": 1,
  "r": "4/5",
  "pal": [
   "#c9c4b8",
   "#8d8e88",
   "#3a3c39"
  ],
  "concept": "Um volume horizontal em concreto aparente pousa sobre o terreno e se abre para o jardim. A luz entra pelo alto e desenha as superfícies ao longo do dia.",
  "images": [
   {
    "src": "assets/images/residencia-alpha/01-capa.webp",
    "w": 1800,
    "h": 2400,
    "alt": "Casa branca com pérgola e porta de madeira alaranjada, caminho de pedra até a entrada"
   },
   {
    "src": "assets/images/residencia-alpha/02-galeria.webp",
    "w": 1800,
    "h": 1200,
    "alt": "Casa contemporânea de dois pavimentos com pedra escura, ripado de madeira e grandes esquadrias"
   },
   {
    "src": "assets/images/residencia-alpha/03-galeria.webp",
    "w": 1800,
    "h": 1201,
    "alt": "Fachada de placas claras, portão de madeira e jardim florido diante de casa contemporânea"
   }
  ]
 },
 {
  "slug": "casa-pedra",
  "title": "Casa Pedra",
  "loc": "Campos do Jordão, SP",
  "cat": "Residencial",
  "year": 2025,
  "area": "320 m²",
  "seed": 2,
  "r": "3/4",
  "pal": [
   "#b9b2a3",
   "#7c7a72",
   "#2b2c2a"
  ],
  "concept": "Muros de pedra local organizam a casa em três pátios. O programa se distribui em faixas estreitas, orientadas para a montanha.",
  "images": [
   {
    "src": "assets/images/casa-pedra/01-capa.webp",
    "w": 511,
    "h": 765,
    "alt": "Sala com parede de pedra aparente, vigas de madeira e sofá com almofadas escuras"
   },
   {
    "src": "assets/images/casa-pedra/02-galeria.webp",
    "w": 640,
    "h": 426,
    "alt": "Sala com paredes de pedra, lareira e teto de madeira em duas águas, aberta para o jardim"
   },
   {
    "src": "assets/images/casa-pedra/03-galeria.webp",
    "w": 1024,
    "h": 1024,
    "alt": "Hall de pé-direito duplo com parede de pedra, luminárias de palha e vegetação"
   },
   {
    "src": "assets/images/casa-pedra/04-galeria.webp",
    "w": 447,
    "h": 447,
    "alt": "Varanda coberta com piso de pedra irregular, lareira suspensa e jardim com piscina ao fundo"
   }
  ]
 },
 {
  "slug": "loft-vertical",
  "title": "Loft Vertical",
  "loc": "Rio de Janeiro, RJ",
  "cat": "Interiores",
  "year": 2025,
  "area": "140 m²",
  "seed": 3,
  "r": "1/1",
  "pal": [
   "#d2cec3",
   "#9a9c95",
   "#4a4c48"
  ],
  "concept": "Uma reforma que trabalha a altura como material. Uma única lâmina de madeira cruza o espaço e reúne cozinha, estante e escada.",
  "images": [
   {
    "src": "assets/images/loft-vertical/01-capa.webp",
    "w": 564,
    "h": 705,
    "alt": "Loft industrial com mezanino de vidro e aço, tijolo aparente e escada metálica"
   },
   {
    "src": "assets/images/loft-vertical/02-galeria.webp",
    "w": 365,
    "h": 547,
    "alt": "Cozinha cinza sob escada de aço em ambiente integrado com piso de concreto polido"
   },
   {
    "src": "assets/images/loft-vertical/03-galeria.webp",
    "w": 365,
    "h": 547,
    "alt": "Escada com nichos e cestos, painel de madeira em espinha de peixe e sala de estar"
   },
   {
    "src": "assets/images/loft-vertical/04-galeria.webp",
    "w": 236,
    "h": 413,
    "alt": "Loft de pé-direito duplo com mezanino, janelas amplas, cozinha e sala de estar"
   }
  ]
 },
 {
  "slug": "pavilhao-sul",
  "title": "Pavilhão Sul",
  "loc": "Florianópolis, SC",
  "cat": "Comercial",
  "year": 2024,
  "area": "680 m²",
  "seed": 4,
  "r": "4/3",
  "pal": [
   "#c4c0b5",
   "#85877f",
   "#333532"
  ],
  "concept": "Estrutura leve em aço e vedações em tijolo cerâmico. O pavilhão se protege do sol com beirais profundos e ventilação cruzada.",
  "images": [
   {
    "src": "assets/images/pavilhao-sul/01-capa.webp",
    "w": 547,
    "h": 365,
    "alt": "Pavilhão com estrutura e vigas de madeira, cobertura plana e vidro entre árvores"
   },
   {
    "src": "assets/images/pavilhao-sul/02-galeria.webp",
    "w": 1400,
    "h": 1050,
    "alt": "Fachada de galpão comercial com portas de enrolar escuras, vidro e estrutura de concreto"
   },
   {
    "src": "assets/images/pavilhao-sul/03-galeria.webp",
    "w": 1559,
    "h": 1039,
    "alt": "Fachada de vidro com brises de madeira sob moldura preta e céu azul"
   },
   {
    "src": "assets/images/pavilhao-sul/04-galeria.webp",
    "w": 638,
    "h": 480,
    "alt": "Grande galpão interno com pilares brancos, piso claro e iluminação pontual"
   }
  ]
 },
 {
  "slug": "casa-do-vale",
  "title": "Casa do Vale",
  "loc": "Itaipava, RJ",
  "cat": "Residencial",
  "year": 2024,
  "area": "520 m²",
  "seed": 5,
  "r": "21/9",
  "pal": [
   "#bfbbaf",
   "#7f817a",
   "#2f312e"
  ],
  "concept": "Implantada em declive, a casa acompanha a topografia em três plataformas e mantém a vegetação existente como parte da composição.",
  "images": [
   {
    "src": "assets/images/casa-do-vale/01-capa.webp",
    "w": 528,
    "h": 352,
    "alt": "Sala de jantar com vidro de piso a teto voltada para deck e montanhas, forro de madeira"
   },
   {
    "src": "assets/images/casa-do-vale/02-galeria.webp",
    "w": 547,
    "h": 365,
    "alt": "Salão de estar com telhado de madeira aparente, sofás claros e arranjos florais"
   },
   {
    "src": "assets/images/casa-do-vale/03-galeria.webp",
    "w": 399,
    "h": 501,
    "alt": "Sala de pé-direito alto com porta de correr em madeira e vista para o jardim"
   },
   {
    "src": "assets/images/casa-do-vale/04-galeria.webp",
    "w": 399,
    "h": 501,
    "alt": "Corredor com vigas de madeira e piso de tábuas largas, integrado à sala com lareira de tijolo"
   },
   {
    "src": "assets/images/casa-do-vale/05-galeria.webp",
    "w": 399,
    "h": 501,
    "alt": "Porta dupla de madeira aberta para varanda com vista de vale e mesa de jantar"
   }
  ]
 }
];
