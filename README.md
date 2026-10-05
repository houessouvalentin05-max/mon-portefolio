# Mon-portfolio

Portfolio bilingue de Valentin Houessou, développeur full-stack à Lomé, Togo. Le site est construit avec Vite, TypeScript, HTML sémantique et CSS responsive.

## Démarrer

```sh
npm install
npm run dev
```

## Vérifier et compiler

```sh
npm run build
npm run preview
```

## Contenu

- `src/main.ts` assemble les modules et démarre l'application.
- `src/data/portfolio-data.ts` contient les textes, projets, technologies et filtres.
- `src/page.ts` décrit la structure HTML de la page.
- `src/ui/brand-icons.ts` centralise les logos SVG et leur rendu.
- `src/features/` contient les interactions isolées : langue, navigation, stack, portrait et effets visuels.
- `src/styles/base.css` contient les fondations, la navigation et le hero.
- `src/styles/sections.css` contient les styles des sections, cartes et contacts.
- `src/styles/responsive.css` contient les breakpoints et les animations accessibles.
- `src/portfolio.css` importe les feuilles de style thématiques.
- La photo du hero est `src/assets/portrait.jpg`.

Le changement de langue mémorise la préférence dans le stockage local. Les animations prennent en compte le réglage système de réduction des mouvements.
