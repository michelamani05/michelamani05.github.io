/* ============================================================
   English / French copy for the whole page.
   Every translatable string lives here, keyed by the data-i18n
   attributes in index.html. English is also kept in the HTML as a
   fallback, so the page still reads correctly if this file fails.
   ============================================================ */
const I18N = {
  en: {
    /* head */
    "meta.title": "AMANI CINDEGE Michel · Software Engineer",
    /* language switch + nav */
    "lang.group": "Language",
    "nav.main": "Main",
    "nav.status.long": "Available for new opportunities",
    "nav.status.short": "Available",
    "nav.about": "About",
    "nav.projects": "Work",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.cta": "Let's talk",
    "nav.openMenu": "Open menu",
    "theme.dark": "Switch to dark mode",
    "theme.light": "Switch to light mode",
    "theme.title": "Switch theme",
    /* hero */
    "hero.role": "Software Engineer",
    "hero.pitch": "AUCA 2025 graduate building web and mobile apps for businesses in Rwanda and the DRC, with Cisco-certified networking skills underneath.",
    "hero.cta": "Let's collaborate",
    "hero.linkedin": "LinkedIn",
    "hero.github": "GitHub",
    "hero.email": "Email",
    "hero.call": "Call",
    "hero.placeholder": "Add profile-3d.png",
    /* about */
    "about.title": "About me",
    "about.sub": "Kigali, Rwanda and Bukavu, DRC",
    "about.p1": "I'm a Software Engineering graduate from the Adventist University of Central Africa (AUCA) in Kigali, class of 2025. I like building software that solves real, complicated problems.",
    "about.p2": "Alongside software engineering, I hold certifications in Network Operations and Advanced Networking with Cisco technologies, so I build applications with a solid understanding of the infrastructure and systems they run on.",
    "about.p3": "My skills cover modern web technologies, backend development and database management, and I deploy my work on cloud platforms like Neon, Render and Cloudflare.",
    "about.f1": "Graduation year",
    "about.f2": "Technical certifications",
    "about.f3": "Programming languages",
    "about.f4": "Projects shipped",
    /* projects */
    "projects.title": "Selected work",
    "projects.sub": "7 projects, from marketplaces to stock management",
    "p1.kind": "Mobile app, Bukavu",
    "p1.desc": "A buy-and-sell marketplace app for Bukavu, inspired by Vinted. People sell the clothes, electronics and household items they no longer use, and buy from others nearby at fair prices. Sellers post an item with photos, a price, a category and its condition in a few taps; buyers browse, search, save favourites and message the seller directly to agree on the deal. The mobile-first interface is built to load fast on local networks.",
    "p1.f1": "Post items with photos, price and condition",
    "p1.f2": "Search and filter by category and price",
    "p1.f3": "Direct messaging between buyer and seller",
    "p1.f4": "Seller profiles and saved favourites",
    "p2.kind": "Company website, DRC",
    "p2.title": "ETS Johanna Business RDC website",
    "p2.desc": "The public website of ETS Johanna Business RDC, an agribusiness company in the DRC that produces and sells food products, phytosanitary (crop protection) products and pharmaceutical products. The site presents the company and its activities, organises its catalogue by product line so farmers, retailers and partners quickly find what they need, and makes it easy to get in touch to order or ask for advice.",
    "p2.f1": "Company presentation and activities",
    "p2.f2": "Catalogue by product line",
    "p2.f3": "Contact and order requests",
    "p2.f4": "Responsive on phone, tablet and desktop",
    "p3.kind": "Web app, stock management",
    "p3.title": "ETS Johanna Business RDC stock manager",
    "p3.desc": "An internal web app that manages stock for ETS Johanna Business RDC across its food, phytosanitary and pharmaceutical products. Staff record everything that comes in (purchases, production) and goes out (sales), and quantities update in real time. Because many of these products are perishable or regulated, the app tracks batches and expiry dates and warns before stock runs low or expires. Managers get a dashboard and reports to plan purchases and reduce losses.",
    "p3.f1": "Stock in and stock out records",
    "p3.f2": "Low-stock and expiry date alerts",
    "p3.f3": "Suppliers, sales and batch tracking",
    "p3.f4": "Dashboard and reports for managers",
    "p4.kind": "Web app, construction",
    "p4.title": "CSMS, Construction Services Management System",
    "p4.desc": "Built for GTC (Global des Travaux de Construction) to streamline construction project management, resource allocation and client communication.",
    "p5.kind": "Web app",
    "p5.title": "Full-stack web application",
    "p5.desc": "A complete web application with a React.js frontend, a Java backend and a PostgreSQL database.",
    "p6.kind": "System tool",
    "p6.title": "Network management system",
    "p6.desc": "Monitors and manages network infrastructure with automated alerting and reporting.",
    "p7.kind": "Developer tool",
    "p7.title": "Database management tool",
    "p7.desc": "Manage PostgreSQL databases through a friendly interface with advanced query capabilities.",
    /* project tags that are words rather than product names */
    "tag.projectManagement": "Project management",
    "tag.database": "Database",
    "tag.webApplication": "Web application",
    "tag.network": "Network",
    "tag.automation": "Automation",
    "tag.webApi": "Web API",
    /* skills */
    "skills.title": "Skills",
    "skills.sub": "Languages, frameworks and platforms I work with",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Database",
    "skills.cloud": "Cloud & deployment",
    "skills.network": "Network & tools",
    "skills.webApi": "Web API development",
    "skills.rest": "RESTful services",
    "skills.dbDesign": "Database design",
    "skills.linux": "Advanced Linux",
    "skills.netops": "Network operations",
    "skills.netadv": "Advanced networking (Cisco)",
    "skills.postman": "Postman API testing",
    "skills.neonNote": "serverless PostgreSQL",
    "skills.renderNote": "app hosting",
    "skills.cloudflareNote": "DNS, CDN & security",
    /* education */
    "education.title": "Education",
    "education.sub": "Degree and certifications",
    "edu.h3": "BSc in Software Engineering",
    "edu.h4": "Adventist University of Central Africa (AUCA), Kigali",
    "edu.p": "Focused on software development, system architecture and network integration.",
    "edu.done": "Completed",
    "edu.cert1": "Certificate in Network Operations",
    "edu.cert1p": "Network infrastructure, protocols and operational best practices.",
    "edu.cert2": "Certificate in Advanced Networking",
    "edu.cert2p": "Advanced network design, implementation and troubleshooting.",
    /* contact */
    "contact.title": "Contact",
    "contact.sub": "Open to jobs and freelance projects",
    "contact.big": "Let's build something together",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.phone1": "Phone (Airtel DRC)",
    "contact.phone2": "Phone (MTN Rwanda)",
    /* footer */
    "footer.rights": "All rights reserved.",
    "footer.linkedin": "LinkedIn",
    "footer.github": "GitHub",
    "footer.email": "Email",
    /* section-transition overlay, read by script.js */
    "scene.home.title": "Hello",
    "scene.home.sub": "AMANI CINDEGE Michel, software engineer",
    "scene.about.title": "About me",
    "scene.about.sub": "Software engineer from Kigali and Bukavu",
    "scene.projects.title": "Selected work",
    "scene.projects.sub": "7 projects, from marketplaces to stock management",
    "scene.skills.title": "Skills",
    "scene.skills.sub": "From React and Python to Neon, Render and Cloudflare",
    "scene.education.title": "Education",
    "scene.education.sub": "AUCA degree and Cisco certifications",
    "scene.contact.title": "Contact",
    "scene.contact.sub": "Let's build something together",
  },
  fr: {
    /* head */
    "meta.title": "AMANI CINDEGE Michel · Ingénieur logiciel",
    /* language switch + nav */
    "lang.group": "Langue",
    "nav.main": "Navigation principale",
    "nav.status.long": "Disponible pour de nouvelles opportunités",
    "nav.status.short": "Disponible",
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "nav.cta": "Discutons",
    "nav.openMenu": "Ouvrir le menu",
    "theme.dark": "Passer au thème sombre",
    "theme.light": "Passer au thème clair",
    "theme.title": "Changer de thème",
    /* hero */
    "hero.role": "Ingénieur logiciel",
    "hero.pitch": "Diplômé de l'AUCA en 2025, je conçois des applications web et mobiles pour des entreprises au Rwanda et en RDC, avec des compétences réseau certifiées Cisco.",
    "hero.cta": "Collaborons",
    "hero.linkedin": "LinkedIn",
    "hero.github": "GitHub",
    "hero.email": "E-mail",
    "hero.call": "Appeler",
    "hero.placeholder": "Ajoutez profile-3d.png",
    /* about */
    "about.title": "À propos de moi",
    "about.sub": "Kigali, Rwanda et Bukavu, RDC",
    "about.p1": "Je suis diplômé en génie logiciel de l'Université Adventiste d'Afrique Centrale (AUCA) à Kigali, promotion 2025. J'aime créer des logiciels qui résolvent de vrais problèmes complexes.",
    "about.p2": "En plus du génie logiciel, j'ai des certifications en exploitation réseau et en réseaux avancés avec les technologies Cisco : je construis donc mes applications en comprenant bien l'infrastructure et les systèmes sur lesquels elles tournent.",
    "about.p3": "Mes compétences couvrent les technologies web modernes, le développement back-end et la gestion de bases de données, et je déploie mon travail sur des plateformes cloud comme Neon, Render et Cloudflare.",
    "about.f1": "Année de diplôme",
    "about.f2": "Certifications techniques",
    "about.f3": "Langages de programmation",
    "about.f4": "Projets livrés",
    /* projects */
    "projects.title": "Projets sélectionnés",
    "projects.sub": "7 projets, de la marketplace à la gestion de stock",
    "p1.kind": "Application mobile, Bukavu",
    "p1.desc": "Une application de marketplace achat-vente pour Bukavu, inspirée de Vinted. On y vend les vêtements, les appareils électroniques et les objets ménagers dont on ne se sert plus, et on achète à des personnes proches à un prix juste. Le vendeur publie un article avec photos, prix, catégorie et état en quelques gestes ; l'acheteur parcourt les annonces, recherche, enregistre ses favoris et écrit directement au vendeur pour convenir de l'affaire. L'interface, pensée d'abord pour le mobile, est conçue pour charger vite sur les réseaux locaux.",
    "p1.f1": "Publier un article avec photos, prix et état",
    "p1.f2": "Recherche et filtres par catégorie et par prix",
    "p1.f3": "Messagerie directe entre acheteur et vendeur",
    "p1.f4": "Profils vendeurs et favoris enregistrés",
    "p2.kind": "Site d'entreprise, RDC",
    "p2.title": "Site web ETS Johanna Business RDC",
    "p2.desc": "Le site public d'ETS Johanna Business RDC, une entreprise agroalimentaire en RDC qui produit et vend des produits alimentaires, des produits phytosanitaires (protection des cultures) et des produits pharmaceutiques. Le site présente l'entreprise et ses activités, organise le catalogue par gamme de produits pour que les agriculteurs, les revendeurs et les partenaires trouvent vite ce qu'ils cherchent, et facilite la prise de contact pour commander ou demander un conseil.",
    "p2.f1": "Présentation de l'entreprise et de ses activités",
    "p2.f2": "Catalogue organisé par gamme de produits",
    "p2.f3": "Contact et demandes de commande",
    "p2.f4": "Adapté au téléphone, à la tablette et à l'ordinateur",
    "p3.kind": "Application web, gestion de stock",
    "p3.title": "Gestion de stock ETS Johanna Business RDC",
    "p3.desc": "Une application web interne qui gère le stock d'ETS Johanna Business RDC pour ses produits alimentaires, phytosanitaires et pharmaceutiques. Le personnel enregistre tout ce qui entre (achats, production) et tout ce qui sort (ventes), et les quantités se mettent à jour en temps réel. Comme beaucoup de ces produits sont périssables ou réglementés, l'application suit les lots et les dates de péremption et alerte avant une rupture ou une expiration. Les responsables disposent d'un tableau de bord et de rapports pour planifier les achats et réduire les pertes.",
    "p3.f1": "Entrées et sorties de stock enregistrées",
    "p3.f2": "Alertes de stock faible et de date de péremption",
    "p3.f3": "Suivi des fournisseurs, des ventes et des lots",
    "p3.f4": "Tableau de bord et rapports pour les responsables",
    "p4.kind": "Application web, construction",
    "p4.title": "CSMS, système de gestion des services de construction",
    "p4.desc": "Développé pour GTC (Global des Travaux de Construction) afin de fluidifier la gestion des projets de construction, l'allocation des ressources et la communication avec les clients.",
    "p5.kind": "Application web",
    "p5.title": "Application web full-stack",
    "p5.desc": "Une application web complète avec un front-end React.js, un back-end Java et une base de données PostgreSQL.",
    "p6.kind": "Outil système",
    "p6.title": "Système de gestion réseau",
    "p6.desc": "Supervise et gère l'infrastructure réseau avec des alertes et des rapports automatisés.",
    "p7.kind": "Outil de développement",
    "p7.title": "Outil de gestion de bases de données",
    "p7.desc": "Gérer les bases de données PostgreSQL via une interface conviviale avec des capacités de requêtes avancées.",
    /* project tags that are words rather than product names */
    "tag.projectManagement": "Gestion de projet",
    "tag.database": "Base de données",
    "tag.webApplication": "Application web",
    "tag.network": "Réseau",
    "tag.automation": "Automatisation",
    "tag.webApi": "API web",
    /* skills */
    "skills.title": "Compétences",
    "skills.sub": "Langages, frameworks et plateformes que j'utilise",
    "skills.frontend": "Front-end",
    "skills.backend": "Back-end",
    "skills.database": "Bases de données",
    "skills.cloud": "Cloud et déploiement",
    "skills.network": "Réseau et outils",
    "skills.webApi": "Développement d'API web",
    "skills.rest": "Services REST",
    "skills.dbDesign": "Conception de bases de données",
    "skills.linux": "Linux avancé",
    "skills.netops": "Exploitation réseau",
    "skills.netadv": "Réseaux avancés (Cisco)",
    "skills.postman": "Tests d'API avec Postman",
    "skills.neonNote": "PostgreSQL serverless",
    "skills.renderNote": "hébergement d'applications",
    "skills.cloudflareNote": "DNS, CDN et sécurité",
    /* education */
    "education.title": "Formation",
    "education.sub": "Diplôme et certifications",
    "edu.h3": "Licence en génie logiciel",
    "edu.h4": "Université Adventiste d'Afrique Centrale (AUCA), Kigali",
    "edu.p": "Axé sur le développement logiciel, l'architecture des systèmes et l'intégration réseau.",
    "edu.done": "Obtenu",
    "edu.cert1": "Certificat en exploitation réseau",
    "edu.cert1p": "Infrastructure réseau, protocoles et bonnes pratiques d'exploitation.",
    "edu.cert2": "Certificat en réseaux avancés",
    "edu.cert2p": "Conception, mise en œuvre et dépannage de réseaux avancés.",
    /* contact */
    "contact.title": "Contact",
    "contact.sub": "Ouvert aux offres d'emploi et aux projets freelance",
    "contact.big": "Construisons quelque chose ensemble",
    "contact.email": "E-mail",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.phone1": "Téléphone (Airtel RDC)",
    "contact.phone2": "Téléphone (MTN Rwanda)",
    /* footer */
    "footer.rights": "Tous droits réservés.",
    "footer.linkedin": "LinkedIn",
    "footer.github": "GitHub",
    "footer.email": "E-mail",
    /* section-transition overlay, read by script.js */
    "scene.home.title": "Bonjour",
    "scene.home.sub": "AMANI CINDEGE Michel, ingénieur logiciel",
    "scene.about.title": "À propos de moi",
    "scene.about.sub": "Ingénieur logiciel de Kigali et Bukavu",
    "scene.projects.title": "Projets sélectionnés",
    "scene.projects.sub": "7 projets, de la marketplace à la gestion de stock",
    "scene.skills.title": "Compétences",
    "scene.skills.sub": "De React et Python à Neon, Render et Cloudflare",
    "scene.education.title": "Formation",
    "scene.education.sub": "Diplôme de l'AUCA et certifications Cisco",
    "scene.contact.title": "Contact",
    "scene.contact.sub": "Construisons quelque chose ensemble",
  }
};
/* ---------- Apply / switch language ---------- */
const LANGS = ['en', 'fr'];
let currentLang = 'en';

/* t() is the one lookup used here and in script.js */
function t(key, fallback){
  const table = I18N[currentLang] || I18N.en;
  if(table && typeof table[key] === 'string') return table[key];
  if(typeof fallback === 'string') return fallback;
  return key;
}

function applyLang(next){
  if(LANGS.indexOf(next) < 0) next = 'en';
  currentLang = next;
  const dict = I18N[currentLang] || {};

  /* plain text, keyed by data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v = dict[el.getAttribute('data-i18n')];
    if(typeof v === 'string') el.textContent = v;
  });

  /* attributes, keyed by data-i18n-attr="aria-label:key|title:key" */
  document.querySelectorAll('[data-i18n-attr]').forEach(el=>{
    el.getAttribute('data-i18n-attr').split('|').forEach(pair=>{
      const i = pair.indexOf(':');
      if(i < 1) return;
      const attr = pair.slice(0, i).trim();
      const v = dict[pair.slice(i + 1).trim()];
      if(attr && typeof v === 'string') el.setAttribute(attr, v);
    });
  });

  if(typeof dict['meta.title'] === 'string') document.title = dict['meta.title'];
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('data-lang', currentLang);

  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.setAttribute('aria-pressed', String(b.dataset.lang === currentLang));
  });

  /* script.js owns a few strings (theme button, transition overlay) and re-paints them */
  document.dispatchEvent(new CustomEvent('langchange', {detail:{lang: currentLang}}));
}

function setLang(next){
  if(LANGS.indexOf(next) < 0 || next === currentLang) return;
  try{ localStorage.setItem('lang', next); }catch(e){}
  /* keep the URL shareable: ?lang=fr */
  try{
    const url = new URL(location.href);
    url.searchParams.set('lang', next);
    history.replaceState(null, '', url.href);
  }catch(e){}
  applyLang(next);
}

document.querySelectorAll('.lang-btn').forEach(b=>{
  b.addEventListener('click', ()=> setLang(b.dataset.lang));
});

/* Starting language: the head script already resolved it from ?lang=, localStorage, the browser */
let start = 'en';
try{
  start = document.documentElement.getAttribute('data-lang') || localStorage.getItem('lang') || 'en';
}catch(e){}
applyLang(LANGS.indexOf(start) < 0 ? 'en' : start);

/* Small API so script.js can reuse the same dictionary */
window.i18n = { t: t, applyLang: applyLang, setLang: setLang, list: LANGS,
  get lang(){ return currentLang; } };
