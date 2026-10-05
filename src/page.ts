import portraitImage from './assets/portrait.jpg'
import { contactBrandIcons } from './ui/brand-icons'

function renderNameLetters(name: string) {
  return [...name].map((letter) => `<span class="name-letter" aria-hidden="true">${letter}</span>`).join('')
}

export function renderPage() {
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML = `
    <nav class="nav" aria-label="Navigation principale">
      <a class="brand" href="#top" aria-label="Valentin Houessou, accueil">V<span>.</span>H</a>
      <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="nav-links"><span></span><span></span></button>
      <div class="nav-links" id="nav-links">
        <a href="#about"><span class="fr">À propos</span><span class="en">About</span></a>
        <a href="#stack">Stack</a>
        <a href="#work"><span class="fr">Projets</span><span class="en">Work</span></a>
        <a href="#contact">Contact</a>
        <button class="language" id="language" type="button" aria-label="Switch language">EN</button>
      </div>
    </nav>

    <header class="hero wrap" id="top">
      <div class="hero-copy reveal">
        <p class="availability"><span class="fr">Disponible pour de nouveaux projets · Lomé, Togo</span><span class="en">Open to new projects · Lomé, Togo</span></p>
        <h1 aria-label="Houessou Valentin"><span class="name-line">${renderNameLetters('Houessou')}</span><span class="name-line name-accent"><em>${renderNameLetters('Valentin')}</em></span></h1>
        <p class="hero-intro fr">Développeur full-stack autodidacte. Je conçois des produits web <strong>rapides, sécurisés et soignés</strong>, du premier pixel à la mise en ligne, sous la bannière VOID STUDIO.</p>
        <p class="hero-intro en">Self-taught full-stack developer. I build web products that are <strong>fast, secure and carefully crafted</strong>, from first pixel to launch, under the VOID STUDIO banner.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#contact"><span class="fr">Démarrons un projet</span><span class="en">Start a project</span><span aria-hidden="true">↗</span></a>
          <a class="button button-quiet" href="#work"><span class="fr">Voir mes réalisations</span><span class="en">See my work</span></a>
        </div>
      </div>
      <div class="portrait-wrap reveal">
        <div class="portrait-frame"></div>
        <div class="portrait-art" id="portrait" role="button" tabindex="0" aria-pressed="false" aria-label="Révéler le portrait de Houessou Valentin"><img src="${portraitImage}" alt="Portrait de Houessou Valentin" fetchpriority="high" /></div>
      </div>
      <a class="scroll-cue" href="#about" aria-label="Faire défiler vers À propos"><span></span></a>
    </header>

    <main>
      <section class="section wrap" id="about">
        <div class="section-heading"><p class="eyebrow">01 / PRINCIPES</p><h2><span class="fr">Le travail bien fait n'est pas <em>négociable.</em></span><span class="en">Work done right is <em>non-negotiable.</em></span></h2></div>
        <div class="about-copy"><p class="fr">Je travaille avec l'IA comme avec une équipe rapide : elle produit, moi je relis, je teste et je sécurise. La vitesse d'un outil moderne, avec la rigueur d'un développeur qui signe son code.</p><p class="en">I work with AI like a fast team: it drafts, I review, test and secure. Modern speed with the rigor of a developer who signs their code.</p></div>
        <div class="principles">
          <article class="principle"><span class="principle-index">01</span><h3><span class="fr">Sécurité d'abord</span><span class="en">Security first</span></h3><p class="fr">Accès aux données par utilisateur, calculs sensibles côté serveur, dépendances auditées.</p><p class="en">Per-user data access, sensitive logic on the server, audited dependencies.</p></article>
          <article class="principle"><span class="principle-index">02</span><h3><span class="fr">Testé, pas supposé</span><span class="en">Tested, not assumed</span></h3><p class="fr">Tests automatisés et intégration continue pour livrer sans croiser les doigts.</p><p class="en">Automated tests and continuous integration, so shipping never means crossing fingers.</p></article>
          <article class="principle"><span class="principle-index">03</span><h3><span class="fr">Pensé pour ici et ailleurs</span><span class="en">Built here, for anywhere</span></h3><p class="fr">Mobile Money, XOF, français et anglais, léger sur les connexions mobiles.</p><p class="en">Mobile Money, XOF, French and English, light on mobile connections.</p></article>
        </div>
      </section>

      <section class="section stack-section" id="stack"><div class="wrap">
        <div class="section-heading"><p class="eyebrow">02 / OUTILS</p><h2><span class="fr">Ma stack, <em>vivante.</em></span><span class="en">My stack, <em>alive.</em></span></h2><p class="section-lead fr">Chaque outil a sa place. Choisis une catégorie ou explore la stack.</p><p class="section-lead en">Every tool has its place. Filter by category or explore the stack.</p></div>
        <div class="filters" id="filters" role="group" aria-label="Filtrer les technologies"></div>
        <div class="stack-grid" id="stack-grid"></div>
        <p class="stack-note" id="stack-note" aria-live="polite"></p>
      </div></section>

      <section class="section wrap" id="work"><div class="section-heading"><p class="eyebrow">03 / SÉLECTION</p><h2><span class="fr">Réalisations <em>choisies.</em></span><span class="en">Selected <em>work.</em></span></h2></div><div class="project-list" id="projects"></div></section>

      <section class="contact-section" id="contact"><div class="wrap contact-inner"><p class="eyebrow">04 / CONTACT</p><h2><span class="fr">Parlons de ce que vous voulez <em>construire.</em></span><span class="en">Let's talk about what you want to <em>build.</em></span></h2><p class="contact-lead fr">Francophone ou anglophone, startup, commerce ou projet personnel : écrivez-moi, je réponds avec un plan clair.</p><p class="contact-lead en">French or English, startup, shop or personal project: write to me and I'll reply with a clear plan.</p><div class="contact-links"><a class="button button-primary contact-link contact-whatsapp" href="https://wa.me/22896561420" target="_blank" rel="noopener noreferrer">${contactBrandIcons.whatsapp}<span>WhatsApp</span><span class="contact-arrow" aria-hidden="true">↗</span></a><a class="button button-quiet contact-link contact-gmail" href="mailto:houessouvalentin@gmail.com">${contactBrandIcons.email}<span>Email</span><span class="contact-arrow" aria-hidden="true">↗</span></a><a class="button button-quiet contact-link contact-linkedin" href="https://www.linkedin.com/in/valentin-houessou-770b46410/" target="_blank" rel="noopener noreferrer">${contactBrandIcons.linkedin}<span>LinkedIn</span><span class="contact-arrow" aria-hidden="true">↗</span></a><a class="button button-quiet contact-link contact-github" href="https://github.com/houessouvalentin05-max" target="_blank" rel="noopener noreferrer">${contactBrandIcons.github}<span>GitHub</span><span class="contact-arrow" aria-hidden="true">↗</span></a></div></div></section>
    </main>
    <footer class="footer"><div class="wrap"><span>© 2026 Valentin Houessou · VOID STUDIO</span><span>LOMÉ, TOGO <i>06°08′ N / 01°13′ E</i></span></div></footer>
  `
}
