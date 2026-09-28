/* ---------- Line illustrations (one source, used everywhere) ---------- */
const ILL = {
  home:`<svg viewBox="0 0 200 160"><circle cx="100" cy="58" r="26"/><path d="M50 140c4-30 24-46 50-46s46 16 50 46"/><path d="M152 26l4 10 10 4-10 4-4 10-4-10-10-4 10-4z"/><path d="M26 120h22"/><path d="M20 106h16"/></svg>`,
  about:`<svg viewBox="0 0 200 160"><circle cx="70" cy="70" r="22"/><path d="M28 140c3-24 20-38 42-38s39 14 42 38"/><path d="M122 26h54a10 10 0 0 1 10 10v26a10 10 0 0 1-10 10h-34l-14 12v-12h-6a10 10 0 0 1-10-10V36a10 10 0 0 1 10-10z"/><path d="M130 43h36"/><path d="M130 55h22"/></svg>`,
  projects:`<svg viewBox="0 0 200 160"><rect x="24" y="36" width="110" height="72" rx="6"/><path d="M12 118h134l-8 10H20z"/><path d="M40 56h40"/><path d="M40 70h70"/><path d="M40 84h54"/><rect x="150" y="50" width="38" height="78" rx="8"/><path d="M163 118h12"/><path d="M158 64h22"/><path d="M158 74h16"/></svg>`,
  skills:`<svg viewBox="0 0 200 160"><rect x="22" y="26" width="156" height="108" rx="10"/><path d="M22 48h156"/><circle cx="36" cy="37" r="3"/><circle cx="48" cy="37" r="3"/><circle cx="60" cy="37" r="3"/><path d="M76 72l-18 18 18 18"/><path d="M124 72l18 18-18 18"/><path d="M110 66l-20 48"/></svg>`,
  education:`<svg viewBox="0 0 200 160"><path d="M100 26L20 62l80 36 80-36z"/><path d="M52 80v30c0 12 22 22 48 22s48-10 48-22V80"/><path d="M180 62v40"/><circle cx="180" cy="108" r="5"/></svg>`,
  contact:`<svg viewBox="0 0 200 160"><rect x="18" y="56" width="112" height="78" rx="8"/><path d="M18 64l56 40 56-40"/><path d="M140 52l46-24-12 52-15-15z"/><path d="M159 65l27-37"/><path d="M134 38c-9 3-15 9-18 16"/></svg>`,
  sokoni:`<svg viewBox="0 0 160 110"><rect x="54" y="6" width="54" height="98" rx="10"/><path d="M75 95h12"/><path d="M67 42h28l4 34H63z"/><path d="M73 42v-6a8 8 0 0 1 16 0v6"/><path d="M120 28h16l10 10-18 18-10-10z"/><circle cx="131" cy="36" r="2.5"/><path d="M32 62c-9-8-2-19 6-14 8-5 15 6 6 14l-6 6z"/></svg>`,
  johannaWeb:`<svg viewBox="0 0 160 110"><rect x="14" y="10" width="132" height="90" rx="8"/><path d="M14 27h132"/><circle cx="25" cy="18.5" r="2.5"/><circle cx="34" cy="18.5" r="2.5"/><path d="M42 86c0-26 20-42 50-44-2 30-18 46-44 46z"/><path d="M42 88c12-14 24-24 40-34"/><path d="M106 48h26"/><path d="M106 60h18"/><path d="M106 72h22"/></svg>`,
  johannaStock:`<svg viewBox="0 0 160 110"><rect x="12" y="60" width="34" height="34" rx="3"/><rect x="46" y="60" width="34" height="34" rx="3"/><rect x="29" y="26" width="34" height="34" rx="3"/><path d="M22 70h14"/><path d="M56 70h14"/><path d="M39 36h14"/><path d="M98 94V16"/><path d="M98 94h52"/><path d="M106 80l12-16 10 8 16-26"/><path d="M136 44l8-2 2 8"/></svg>`,
  construction:`<svg viewBox="0 0 160 110"><path d="M36 100V14"/><path d="M36 14h100"/><path d="M36 32l18-18"/><path d="M122 14v26"/><rect x="114" y="40" width="16" height="12" rx="2"/><path d="M14 100h140"/><path d="M92 100V66h44v34"/><path d="M102 76h8"/><path d="M118 76h8"/><path d="M102 88h8"/><path d="M118 88h8"/></svg>`,
  fullstack:`<svg viewBox="0 0 160 110"><path d="M80 12l58 24-58 24-58-24z"/><path d="M22 56l58 24 58-24"/><path d="M22 74l58 24 58-24"/></svg>`,
  network:`<svg viewBox="0 0 160 110"><circle cx="80" cy="55" r="11"/><circle cx="26" cy="20" r="7"/><circle cx="134" cy="20" r="7"/><circle cx="26" cy="90" r="7"/><circle cx="134" cy="90" r="7"/><path d="M32 24l38 24"/><path d="M128 24l-38 24"/><path d="M32 86l38-24"/><path d="M128 86l-38-24"/></svg>`,
  database:`<svg viewBox="0 0 160 110"><ellipse cx="80" cy="22" rx="42" ry="12"/><path d="M38 22v62c0 7 19 12 42 12s42-5 42-12V22"/><path d="M38 43c0 7 19 12 42 12s42-5 42-12"/><path d="M38 64c0 7 19 12 42 12s42-5 42-12"/></svg>`
};
function prepIll(el, key){
  el.innerHTML = ILL[key] || '';
  el.querySelectorAll('svg *').forEach((s,i)=>{ s.setAttribute('pathLength','1'); s.style.animationDelay = (i*0.09)+'s'; });
}
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Strings owned by this file (transition scenes, theme button) live in i18n.js.
   Read that dictionary directly, and stay safe if i18n.js never loads. */
const t = (key, fallback) => {
  const table = (typeof I18N !== 'undefined') ? (I18N[currentLang] || I18N.en) : null;
  if(table && typeof table[key] === 'string') return table[key];
  return typeof fallback === 'string' ? fallback : key;
};

/* Draw illustrations in the page when they scroll into view */
const drawObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.replace('pending','drawn'); drawObs.unobserve(e.target); } });
},{threshold:.4});
document.querySelectorAll('[data-ill]').forEach(el=>{
  prepIll(el, el.dataset.ill);
  if(!reduce){ el.classList.add('pending'); drawObs.observe(el); }
});

/* ---------- Year & hero intro ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
window.addEventListener('load', ()=>requestAnimationFrame(()=>document.body.classList.remove('intro')));

/* ---------- Name always fits the screen width ---------- */
const nameEl = document.getElementById('name');
function fitName(){
  if (nameEl.offsetParent === null) return;
  const stacked = window.matchMedia('(max-width:760px)').matches;
  nameEl.style.fontSize = '100px';
  const [w1,w2] = nameEl.querySelectorAll('span');
  const width = stacked ? Math.max(w1.offsetWidth, w2.offsetWidth) : w1.offsetWidth + w2.offsetWidth + parseFloat(getComputedStyle(w1).marginRight);
  const avail = nameEl.clientWidth * (stacked ? .9 : .94);
  nameEl.style.fontSize = Math.min(220, 100 * avail / width) + 'px';
}
(document.fonts ? document.fonts.ready : Promise.resolve()).then(fitName);
fitName();
let rT; window.addEventListener('resize', ()=>{ clearTimeout(rT); rT = setTimeout(fitName, 80); });

/* ---------- 3D portrait ---------- */
const photo = document.getElementById('photo');
const stage = document.getElementById('stage');
const markMissing = ()=>stage.classList.add('missing');
photo.addEventListener('error', markMissing);
if(photo.complete && photo.naturalWidth === 0) markMissing();

const portrait = document.getElementById('portrait');
const hero = document.querySelector('.hero');
if(!reduce && window.matchMedia('(pointer:fine)').matches){
  hero.addEventListener('mousemove', e=>{
    const x = e.clientX / window.innerWidth - .5, y = e.clientY / window.innerHeight - .5;
    portrait.style.transform = `rotateY(${x*18}deg) rotateX(${-y*10}deg)`;
  });
  hero.addEventListener('mouseleave', ()=>portrait.style.transform='');
}
window.addEventListener('deviceorientation', e=>{
  if(reduce || e.gamma == null) return;
  portrait.style.transform = `rotateY(${Math.max(-15, Math.min(15, e.gamma/2))}deg)`;
});

/* ---------- Nav ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', ()=>nav.classList.toggle('scrolled', window.scrollY > 30), {passive:true});
const burger = document.getElementById('burger');
const links = document.getElementById('navLinks');
function setMenu(open){
  links.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  burger.innerHTML = open ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
}
burger.addEventListener('click', ()=>setMenu(!links.classList.contains('open')));

/* ---------- One section visible at a time ---------- */
const views = [...document.querySelectorAll('header.hero[id], section.block[id]')];
const viewIds = views.map(v => v.id);

function showView(id, push){
  if (!viewIds.includes(id)) id = 'home';
  views.forEach(v => { v.hidden = v.id !== id; });
  window.scrollTo({ top: 0, behavior: 'instant' });
  links.querySelectorAll('a').forEach(a =>
    a.classList.toggle('current', a.getAttribute('href') === '#' + id));
  if (push) history.pushState(null, '', '#' + id);
  const view = document.getElementById(id);
  view.setAttribute('tabindex', '-1');
  view.focus({ preventScroll: true });
  if (id === 'home') fitName();
}
function currentView(){ return (views.find(v => !v.hidden) || views[0]).id; }

showView(location.hash.slice(1) || 'home', false);
window.addEventListener('popstate', () => showView(location.hash.slice(1) || 'home', false));

/* ---------- 3-second section transition ---------- */
const DURATION = 3000;
const SCENES = {
  home:{title:'scene.home.title', sub:'scene.home.sub'},
  about:{title:'scene.about.title', sub:'scene.about.sub'},
  projects:{title:'scene.projects.title', sub:'scene.projects.sub'},
  skills:{title:'scene.skills.title', sub:'scene.skills.sub'},
  education:{title:'scene.education.title', sub:'scene.education.sub'},
  contact:{title:'scene.contact.title', sub:'scene.contact.sub'}
};
const pt = document.getElementById('pt');
const slot = document.getElementById('ptSlot');
const announce = document.getElementById('announce');
let busy = false;

function jumpTo(target){ showView(target.id, true); }

function goTo(id){
  const target = document.getElementById(id);
  if(!target || busy) return;
  if (target.id === currentView()) { setMenu(false); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  setMenu(false);
  if(reduce){ jumpTo(target); return; }
  busy = true;
  const keys = SCENES[id] || {title:id, sub:''};
  const scene = { title: t(keys.title, keys.title), sub: t(keys.sub, keys.sub) };
  slot.innerHTML = `<div class="pt-inner"><div class="ill"></div><div class="pt-title">${scene.title}</div><p class="pt-sub">${scene.sub}</p></div>`;
  prepIll(slot.querySelector('.ill'), id === 'home' ? 'home' : id);
  slot.querySelectorAll('.ill svg *').forEach((s,i)=>s.style.animationDelay = (0.75 + i*0.09)+'s');
  const bar = pt.querySelector('.pt-bar i'); bar.style.animation='none'; void bar.offsetWidth; bar.style.animation='';
  announce.textContent = scene.title;
  pt.classList.remove('out'); void pt.offsetWidth;
  pt.classList.add('show');
  setTimeout(()=>jumpTo(target), 1400);                 // page is fully covered: move underneath
  setTimeout(()=>pt.classList.add('out'), DURATION - 720); // wipe away
  setTimeout(()=>{ pt.classList.remove('show','out'); busy = false; }, DURATION);
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    if(!id) return;
    e.preventDefault();
    goTo(id);
  });
});

/* ---------- Light / dark mode ---------- */
const themeBtn = document.getElementById('themeBtn');
const darkMq = window.matchMedia('(prefers-color-scheme: dark)');
let theme = document.documentElement.getAttribute('data-theme')
        || (darkMq.matches ? 'dark' : 'light');

function paintTheme(){
  document.documentElement.setAttribute('data-theme', theme);
  const toDark = theme !== 'dark';
  themeBtn.innerHTML = toDark
    ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
  const label = toDark ? t('theme.dark', 'Switch to dark mode') : t('theme.light', 'Switch to light mode');
  themeBtn.setAttribute('aria-label', label);
  themeBtn.setAttribute('title', label);
  themeBtn.setAttribute('aria-pressed', String(!toDark));
}

themeBtn.addEventListener('click', ()=>{
  theme = theme === 'dark' ? 'light' : 'dark';
  try{ localStorage.setItem('theme', theme); }catch(e){}
  paintTheme();
});

/* Follow the OS setting until the visitor chooses a theme themselves. */
darkMq.addEventListener('change', e=>{
  let saved = null;
  try{ saved = localStorage.getItem('theme'); }catch(err){}
  if(!saved){ theme = e.matches ? 'dark' : 'light'; paintTheme(); }
});

paintTheme();

/* The theme button wording changes with the language, so re-paint it on a switch */
document.addEventListener('langchange', ()=>paintTheme());

/* ---------- Language switch ----------
   Deliberately the LAST thing in this file: the illustrations, the one-section
   view and the transitions are already set up, so a problem in here can only
   affect the switcher itself. */
if(window.i18n) window.i18n.initLang();
