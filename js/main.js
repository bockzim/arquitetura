/* ---------- imagens placeholder: composições SVG determinísticas ---------- */
function rnd(s){return()=>(s=(s*16807)%2147483647)/2147483647}
const IMGCLS="block h-full w-full object-cover transition-transform duration-slow ease-quiet group-hover:scale-[1.025] group-focus-visible:scale-[1.025]";
function art(p,i,alt){
  const im=p.images&&p.images[i];if(im)return `<img class="${IMGCLS}" src="${im.src}" width="${im.w}" height="${im.h}" alt="${im.alt}" loading="lazy" decoding="async">`;
  const R=rnd(p.seed*97+i*13+7),[a,b,c]=p.pal,W=1200,H=800;
  let g=`<rect width="${W}" height="${H}" fill="${a}"/>`;
  g+=`<rect y="${H*.72}" width="${W}" height="${H*.28}" fill="${b}" opacity=".55"/>`;
  const n=3+Math.floor(R()*3);
  for(let k=0;k<n;k++){const w=120+R()*380,h=110+R()*330,x=R()*(W-w),y=H*.72-h;
    g+=`<rect x="${x|0}" y="${y|0}" width="${w|0}" height="${h|0}" fill="${k%2?b:c}" opacity="${.75+R()*.25}"/>`;
    if(R()>.5)g+=`<rect x="${(x+w*.12)|0}" y="${(y+h*.18)|0}" width="${(w*.5)|0}" height="${(h*.08)|0}" fill="${a}"/>`}
  g+=`<rect x="0" y="${H*.72}" width="${W}" height="2" fill="${c}"/>`;
  return `<svg class="${IMGCLS}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${alt||p.title}">${g}</svg>`}
const hero=`<img class="block h-full w-full object-cover" src="${HERO.poster}" alt="${HERO.alt}" fetchpriority="high">`;
function heroVideo(){const v=$("#hv");if(!v)return;const b=$("#pz");
 const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
 v.addEventListener("playing",()=>v.classList.add("ready"),{once:true});
 const set=p=>{p?v.play().catch(()=>{}):v.pause();b.textContent=p?"Pausar vídeo":"Reproduzir vídeo";b.setAttribute("aria-pressed",!p)};
 if(reduce){v.pause();v.removeAttribute("autoplay");set(false)}
 b.onclick=()=>set(v.paused);
 new IntersectionObserver(([e])=>{if(!e.isIntersecting)v.pause();else if(b.getAttribute("aria-pressed")!=="true"&&!reduce)v.play().catch(()=>{})}).observe(v)}
/* ---------- views ---------- */
const $=s=>document.querySelector(s),main=$("#main");
/* Classes reutilizáveis (Tailwind). Repetir a mesma string em vários lugares seria inconsistente. */
const WRAP="mx-auto max-w-[1600px] px-pad";
const SEC="pt-s6 md:pt-s7";
const DISPLAY="font-serif font-light leading-[1.04] tracking-[-.02em]";
const H2=`${DISPLAY} text-[clamp(2rem,4.6vw,4rem)]`;
const SMALL="text-[.8rem] tracking-[.02em] text-mute";
const LEAD="font-serif font-light leading-[1.3] tracking-[-.01em] text-[clamp(1.5rem,2.6vw,2.3rem)]";
const BODY="max-w-[34rem] text-mute";
const CTA="inline-flex min-h-11 items-center gap-3 border-b border-current pb-1 text-[.9rem] transition-[gap] duration-norm ease-quiet hover:gap-5";
const HEAD="rv mb-s5 grid items-end gap-4 md:grid-cols-12 md:gap-6";
const FIELD="min-h-11 rounded-none border-0 border-b border-line bg-transparent py-2.5 text-base text-ink transition-colors duration-fast focus:border-ink focus:outline-none aria-[invalid=true]:border-[#9b4a3c]";
const ERR="min-h-[1em] text-[.78rem] text-[#9b4a3c]";
const LBL="text-[.78rem] text-mute";
/* posição de cada projeto na grade editorial da home (desktop); no mobile todos empilham */
const PCOL=["md:col-span-8","md:col-span-3 md:col-start-10 md:self-end","md:col-span-4 md:col-start-2","md:col-span-6 md:col-start-7 md:mt-s6","md:col-span-12"];
const pcard=(p,i)=>{const m=p.r==="21/9"?"4/3":p.r;return `<a class="pj group rv block cursor-pointer ${PCOL[i]||""}" href="#/projeto/${p.slug}" data-cur="Ver projeto">
 <div class="relative aspect-[var(--rm)] overflow-hidden bg-stone md:aspect-[var(--r)]" style="--r:${p.r};--rm:${m}">${art(p,0,p.title+" (imagem de demonstração)")}</div>
 <div class="mt-4 flex items-baseline justify-between gap-4"><div><h3 class="font-serif text-2xl font-light leading-[1.15]">${p.title}</h3><span class="${SMALL} inline-block transition-transform duration-norm ease-quiet group-hover:translate-x-1.5">${p.loc}</span></div><div class="${SMALL} text-right">${p.cat}<br>${p.year} · ${p.area}</div></div></a>`};
function home(){main.innerHTML=`
<div class="hero relative h-svh min-h-[560px] overflow-hidden bg-[#3a3c39] text-[#f3f0e9]">
 <div class="absolute inset-0 animate-[settle_1.8s_var(--ease)_both]">${hero}</div>
 ${HERO.video?`<video class="vid absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[1200ms]" id="hv" src="${HERO.video}" muted loop playsinline autoplay preload="auto" aria-hidden="true"></video><button class="absolute right-pad top-[calc(5.5rem+env(safe-area-inset-top,0px))] z-[3] min-h-11 cursor-pointer text-[.78rem] opacity-80 transition-opacity duration-fast hover:opacity-100" id="pz" aria-pressed="false">Pausar vídeo</button>`:""}
 <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(20,21,19,.55),transparent_55%)]"></div>
 <div class="absolute inset-x-pad bottom-[clamp(2rem,7vh,5rem)] z-[2] flex flex-wrap items-end justify-between gap-8">
  <h1 class="max-w-[12ch] animate-[up_1s_var(--ease)_.15s_both] font-serif text-[clamp(2.6rem,7.6vw,7rem)] font-light leading-[1.04] tracking-[-.02em]">Arquitetura residencial contemporânea.</h1>
  <div class="max-w-[22rem] animate-[up_1s_var(--ease)_.35s_both]"><p class="mb-6 opacity-90">Casas e interiores desenhados com precisão, luz e silêncio.</p><a class="${CTA}" href="#projetos">Conhecer projetos <span aria-hidden="true">→</span></a></div>
 </div>
</div>
<section id="projetos" class="${WRAP} ${SEC}"><div class="${HEAD}"><h2 class="${H2} md:col-span-7">Projetos selecionados</h2><p class="${SMALL} md:col-span-4 md:col-start-9">Todos os projetos, imagens e dados deste site são fictícios, para demonstração.</p></div>
 <div class="grid gap-y-s6 md:grid-cols-12 md:gap-x-6">${PROJECTS.map(pcard).join("")}</div></section>
<section id="studio" class="${WRAP} ${SEC}"><div class="${HEAD}"><h2 class="${H2} md:col-span-7">O estúdio</h2></div>
 <div class="grid gap-6 md:grid-cols-12"><p class="${LEAD} rv md:col-span-5">Acreditamos que a boa arquitetura se percebe antes de ser explicada.</p>
 <div class="rv md:col-span-6 md:col-start-7"><p class="${BODY}">Texto de posicionamento (placeholder). Aqui entra a história do escritório, seu método de trabalho e o que orienta cada decisão de projeto, da implantação ao detalhe construtivo.</p>
 <p class="${BODY} mt-4"><b class="font-medium text-ink">Filosofia.</b> Texto de placeholder sobre a filosofia do escritório.</p></div></div>
 <div class="rv mt-s6 grid grid-cols-3 border-t border-line">${[["12","anos"],["34","projetos"],["08","estados"]].map(([n,l])=>`<div class="border-r border-line py-6 pl-6 first:pl-0 last:border-r-0"><b class="block font-serif text-[clamp(2.4rem,6vw,5rem)] font-light leading-none">${n}</b>${l}</div>`).join("")}</div>
 <p class="mt-4 text-xs text-mute">Números de exemplo. Substituir pelos dados reais do escritório.</p></section>
<section id="servicos" class="${WRAP} ${SEC}"><div class="${HEAD}"><h2 class="${H2} md:col-span-7">Serviços</h2></div>
 <div class="rv border-t border-line">${SERVICES.map(s=>`<details class="group/d border-b border-line"><summary class="group/s flex min-h-11 cursor-pointer list-none items-baseline justify-between gap-6 py-[1.6rem] md:grid md:grid-cols-12 [&::-webkit-details-marker]:hidden"><h3 class="font-serif text-[clamp(1.8rem,3.6vw,3rem)] font-light leading-[1.1] transition-transform duration-norm ease-quiet group-hover/s:translate-x-2.5 md:col-span-7">${s[0]}</h3><span class="${SMALL} hidden md:col-span-3 md:col-start-9 md:block">Ex.: ${s[2]}</span><i class="not-italic transition-transform duration-norm group-open/d:rotate-45 md:col-start-12 md:justify-self-end" aria-hidden="true">+</i></summary><p class="max-w-[36rem] pb-8 text-mute">${s[1]}</p></details>`).join("")}</div></section>
<section id="contato" class="${WRAP} ${SEC}"><div class="grid gap-s4 md:grid-cols-12 md:gap-x-6"><h2 class="${DISPLAY} rv text-[clamp(2.2rem,5vw,4.4rem)] md:col-span-5">Vamos conversar sobre o seu projeto.</h2><div id="fw" class="rv md:col-span-6 md:col-start-7">${formHTML()}</div></div></section>
${footer()}`;bind();heroVideo()}
function footer(){return`<footer class="mt-s7 border-t border-line py-s4"><div class="${WRAP} grid gap-6 text-[.88rem] md:grid-cols-12"><div class="md:col-span-5"><div class="font-serif text-[1.05rem] tracking-[.14em]">STUDIO OLIVEIRA</div><p class="${SMALL} mt-2.5">Cidade, UF — endereço de exemplo</p></div>
<div class="md:col-span-3 [&>a]:block [&>a]:py-0.5"><a href="mailto:${SITE.email}">${SITE.email}</a><a href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener">WhatsApp</a><a href="#contato">Instagram @studiooliveira</a></div>
<div class="md:col-span-3 [&>a]:block [&>a]:py-0.5"><a href="#projetos">Projetos</a><a href="#studio">Studio</a><a href="#servicos">Serviços</a><a href="#contato">Contato</a></div></div>
<div class="${WRAP} ${SMALL} mt-10">© 2026 Studio Oliveira. Site de demonstração.</div></footer>`}
/* Distribui as fotos da galeria (a partir da 2ª) pela orientação: paisagem = linha inteira; retrato = par lado a lado */
function layout(p){const o=[];let pd=null;
 const flush=()=>{if(pd){o.push({n:pd.n,cls:"md:col-span-6 md:col-start-4",r:pd.r});pd=null}};
 (p.images||[]).forEach((im,n)=>{if(!n)return;const r=+(im.w/im.h).toFixed(3);
  if(r>=1.15){flush();o.push({n,cls:"md:col-span-12",r:Math.min(Math.max(r,1.4),2.1)})}
  else if(pd){o.push({n:pd.n,cls:"md:col-span-6",r:pd.r},{n,cls:"md:col-span-5 md:col-start-8",r});pd=null}
  else pd={n,r}});
 flush();return o}
function project(slug){
  const i=PROJECTS.findIndex(p=>p.slug===slug);if(i<0)return location.hash="#/";
  const p=PROJECTS[i],nx=PROJECTS[(i+1)%PROJECTS.length],shots=layout(p);
  main.innerHTML=`<article class="${WRAP} pt-[calc(7rem+env(safe-area-inset-top,0px))]"><a class="ul ${SMALL} mb-8 inline-block" href="#projetos">← Todos os projetos</a>
<h1 class="${DISPLAY} mb-s4 text-[clamp(2.6rem,8vw,7.5rem)]">${p.title}</h1>
<dl class="grid grid-cols-2 gap-6 border-t border-line pb-s4 pt-4 md:grid-cols-[repeat(4,auto)] md:justify-start md:gap-s5">${[["Local",p.loc],["Categoria",p.cat],["Área",p.area],["Ano",p.year]].map(([k,v])=>`<div><dt class="text-xs text-mute">${k}</dt><dd class="font-serif text-xl font-light">${v}</dd></div>`).join("")}</dl>
<div class="my-s5 grid gap-6 md:grid-cols-12"><h2 class="${LEAD} md:col-span-5">Conceito</h2><p class="${BODY} md:col-span-6 md:col-start-7">${p.concept}</p></div>
<div class="mt-s5 grid gap-6 md:grid-cols-12">${shots.map((s,k)=>`<div class="rv ${s.cls}"><button class="group block w-full cursor-pointer border-0 bg-transparent p-0" data-n="${k}" data-cur="Ampliar" aria-label="Ampliar imagem ${k+1} de ${shots.length}"><div class="relative aspect-[var(--r)] overflow-hidden bg-stone" style="--r:${s.r}">${art(p,s.n)}</div></button></div>`).join("")}</div>
<a class="group mt-s7 block cursor-pointer border-t border-line py-s5" href="#/projeto/${nx.slug}" data-cur="Próximo"><span class="${SMALL}">Próximo projeto</span><div class="${DISPLAY} text-[clamp(2.4rem,7vw,6rem)] transition-transform duration-slow ease-quiet group-hover:translate-x-4">${nx.title} <span aria-hidden="true">→</span></div></a></article>${footer()}`;
  window.scrollTo(0,0);document.title=p.title+" — Studio Oliveira";
  const imgs=shots.map(s=>art(p,s.n));
  main.querySelectorAll("button[data-n]").forEach(b=>b.onclick=()=>openLB(imgs,+b.dataset.n,b,shots.map(s=>s.r)));bind()}
/* ---------- form ---------- */
function formHTML(){
 const box=(c,x)=>`<div class="flex flex-col gap-1 ${c}">${x}</div>`;
 const inp=(id,l,at="",c="")=>box(c,`<label class="${LBL}" for="${id}">${l}</label><input class="${FIELD}" id="${id}" name="${id}" ${at}><span class="${ERR}" id="e-${id}"></span>`);
 const sel=(id,l,o)=>box("",`<label class="${LBL}" for="${id}">${l}</label><select class="${FIELD}" id="${id}" name="${id}"><option value="">Selecionar</option>${o.map(x=>`<option>${x}</option>`).join("")}</select>`);
 return`<form id="cf" novalidate aria-label="Contato" class="grid gap-x-6 gap-y-6 md:grid-cols-2">
${inp("nome","Nome",'autocomplete="name" required')}${inp("wa","WhatsApp",'type="tel" autocomplete="tel" inputmode="tel" required')}${inp("email","E-mail",'type="email" autocomplete="email" required',"md:col-span-2")}
${sel("tipo","Tipo de projeto",["Residencial","Comercial","Interiores","Reforma","Outro"])}${sel("etapa","Etapa",["Pesquisa","Terreno adquirido","Projeto em andamento","Reforma","Outro"])}
${inp("loc","Localização","","md:col-span-2")}
${box("md:col-span-2",`<label class="${LBL}" for="msg">Conte um pouco sobre o projeto</label><textarea class="${FIELD} min-h-[110px] resize-y" id="msg" name="msg"></textarea>`)}
<div class="md:col-span-2"><label class="flex items-start gap-2.5 ${LBL}"><input type="checkbox" id="aceite" name="aceite" class="mt-1 h-4 w-4 accent-[var(--ink)]"><span>Concordo em compartilhar estes dados para contato sobre meu projeto (LGPD).</span></label><span class="${ERR} block" id="e-aceite"></span></div>
<input name="site" tabindex="-1" autocomplete="off" aria-hidden="true" class="absolute -left-[9999px]">
<div class="min-h-6 text-[.85rem] text-[#9b4a3c] md:col-span-2" role="status" aria-live="polite" id="st"></div>
<button class="${CTA} cursor-pointer justify-self-start bg-transparent disabled:cursor-wait disabled:opacity-50" id="sb" type="submit">Falar sobre meu projeto <span aria-hidden="true">→</span></button></form>`}
function submitForm(e){e.preventDefault();const f=e.target,v=n=>f[n].value.trim();let bad=0;
 const chk=(n,ok,m)=>{f[n].setAttribute("aria-invalid",!ok);$("#e-"+n).textContent=ok?"":m;if(!ok)bad++};
 chk("nome",v("nome").length>1,"Informe seu nome.");chk("wa",v("wa").replace(/\D/g,"").length>=10,"Informe um número com DDD.");chk("email",/^\S+@\S+\.\S+$/.test(v("email")),"Informe um e-mail válido.");chk("aceite",f.aceite.checked,"É necessário aceitar para enviar.");
 if(bad)return f.querySelector('[aria-invalid=true]').focus();
 const b=$("#sb");b.disabled=true;b.firstChild.textContent="Enviando… ";$("#st").textContent="";
 if(f.site.value)return; /* honeypot: robôs preenchem, pessoas não */
 const data=Object.fromEntries(new FormData(f));delete data.site;
 const done=()=>{const t=`Olá! Sou ${data.nome}. Quero conversar sobre um projeto ${(data.tipo||"").toLowerCase()}${data.loc?" em "+data.loc:""}.`;
  $("#fw").innerHTML=`<div class="border-t border-ink pt-6" role="status"><p class="${LEAD}">Mensagem recebida.</p><p class="${BODY} mt-4">Retornaremos pelo WhatsApp ou e-mail em até dois dias úteis.</p><a class="${CTA} mt-6" href="https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t)}" target="_blank" rel="noopener">Continuar no WhatsApp <span aria-hidden="true">→</span></a></div>`};
 const fail=()=>{b.disabled=false;b.firstChild.textContent="Falar sobre meu projeto ";$("#st").textContent="Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp."};
 if(!SITE.formEndpoint)return setTimeout(done,900); /* modo demonstração: nada é enviado */
 fetch(SITE.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(data)}).then(r=>r.ok?done():fail()).catch(fail)}
/* ---------- lightbox ---------- */
let L={i:0,a:[],r:[],from:null};
function showL(){$("#ls").innerHTML=L.a[L.i];$("#ls").firstChild.style.setProperty("--r",L.r[L.i]);$("#lc").textContent=String(L.i+1).padStart(2,"0")+" / "+String(L.a.length).padStart(2,"0")}
function openLB(a,i,from,r){L={i,a,r,from};showL();$("#lb").classList.add("open");document.body.style.overflow="hidden";$("#lx").focus()}
function closeLB(){$("#lb").classList.remove("open");document.body.style.overflow="";L.from&&L.from.focus()}
const step=d=>{L.i=(L.i+d+L.a.length)%L.a.length;showL()};
$("#lx").onclick=closeLB;$("#lp").onclick=()=>step(-1);$("#ln").onclick=()=>step(1);
let tx=0;$("#lb").addEventListener("touchstart",e=>tx=e.touches[0].clientX,{passive:true});
$("#lb").addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)step(d<0?1:-1)});
addEventListener("keydown",e=>{
 if($("#lb").classList.contains("open")){if(e.key==="Escape")closeLB();if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1)}
 else if(e.key==="Escape")menu(false)});
/* ---------- menu ---------- */
const menu=o=>{$("#mn").classList.toggle("open",o);$("#bg").setAttribute("aria-expanded",o);document.body.style.overflow=o?"hidden":""};
$("#bg").onclick=()=>menu(true);$("#mc").onclick=()=>menu(false);$("#mn").querySelectorAll("a").forEach(a=>a.onclick=()=>menu(false));
/* ---------- cursor, reveal, header ---------- */
const cur=$("#cur");let cx=0,cy=0,tx2=0,ty2=0;
if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
 addEventListener("mousemove",e=>{tx2=e.clientX;ty2=e.clientY;const t=e.target.closest("[data-cur]");if(t){cur.textContent=t.dataset.cur+" →";cur.classList.add("on");cur.style.scale=1}else{cur.classList.remove("on");cur.style.scale=.6}});
 (function loop(){cx+=(tx2-cx)*.18;cy+=(ty2-cy)*.18;cur.style.left=cx+"px";cur.style.top=cy+"px";requestAnimationFrame(loop)})()}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
function bind(){document.querySelectorAll(".rv").forEach(el=>io.observe(el));const f=$("#cf");if(f)f.onsubmit=submitForm;hdr()}
function hdr(){const h=$("#hd"),hero=$(".hero");const f=()=>h.classList.toggle("solid",!hero||scrollY>innerHeight*.8);f();addEventListener("scroll",f,{passive:true})}
/* ---------- router ---------- */
function route(){const h=location.hash;const m=h.match(/^#\/projeto\/(.+)$/);
 if(m)return project(m[1]);
 const anchor=/^#[a-z]+$/.test(h)?h:null;document.title="Studio Oliveira — Arquitetura residencial contemporânea";
 if(!$(".hero"))home();
 if(anchor)document.querySelector(anchor)?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"});else if(h==="#/"||!h)window.scrollTo(0,0)}
addEventListener("hashchange",route);route();
