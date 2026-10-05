export type Language = 'fr' | 'en'
export type Category = 'Front' | 'Back' | 'Ops' | 'IA'

export type StackTool = {
  name: string
  category: Category
  fr: string
  en: string
}

export type PortfolioProject = {
  name: string
  fr: string
  en: string
  stack: string
  url?: string
}

export const stackTools: StackTool[] = [
  { name: 'React', category: 'Front', fr: 'Interfaces de mes projets.', en: 'Interfaces across my projects.' },
  { name: 'TypeScript', category: 'Front', fr: 'Moins de bugs, du code qui se relit.', en: 'Fewer bugs, code that reads well.' },
  { name: 'Next.js', category: 'Front', fr: 'App Router sur InvoiceFlow.', en: 'App Router on InvoiceFlow.' },
  { name: 'Vite', category: 'Front', fr: 'Applications rapides à construire.', en: 'Fast-to-build applications.' },
  { name: 'TanStack', category: 'Front', fr: 'Router et Query sur LocalEats.', en: 'Router and Query on LocalEats.' },
  { name: 'Tailwind', category: 'Front', fr: 'Systèmes de design sur mesure.', en: 'Custom design systems.' },
  { name: 'Supabase', category: 'Back', fr: 'Postgres, auth et règles RLS.', en: 'Postgres, auth and RLS policies.' },
  { name: 'Firebase', category: 'Back', fr: 'Firestore et Google Auth sur SOLEYA.', en: 'Firestore and Google Auth on SOLEYA.' },
  { name: 'Python', category: 'Back', fr: 'Là où tout a commencé.', en: 'Where it all began.' },
  { name: 'Leaflet', category: 'Back', fr: 'Cartes OpenStreetMap pour LocalEats.', en: 'OpenStreetMap maps for LocalEats.' },
  { name: 'Docker', category: 'Ops', fr: 'Même environnement du poste à la prod.', en: 'Same environment from dev to production.' },
  { name: 'Vercel', category: 'Ops', fr: 'Déploiement continu de mes projets.', en: 'Continuous deployment for my projects.' },
  { name: 'GitHub CI', category: 'Ops', fr: 'Lint, types, tests et build à chaque push.', en: 'Lint, types, tests and builds on each push.' },
  { name: 'Claude', category: 'IA', fr: 'Réflexion, stratégie et revue.', en: 'Thinking, strategy and review.' },
  { name: 'Cline', category: 'IA', fr: 'Génère le code ; je relis chaque changement.', en: 'Writes code; I review every change.' },
  { name: 'Lovable', category: 'IA', fr: 'Maquettes rapides, ensuite durcies à la main.', en: 'Quick mockups, then hardened by hand.' },
]

export const stackFilters = [
  { id: 'Tout', fr: 'Tout', en: 'All' },
  { id: 'Front', fr: 'Front-end', en: 'Front-end' },
  { id: 'Back', fr: 'Back-end', en: 'Back-end' },
  { id: 'Ops', fr: 'Outils', en: 'Tools' },
  { id: 'IA', fr: 'IA', en: 'AI' },
]

export const portfolioProjects: PortfolioProject[] = [
  { name: 'VOID STUDIO', fr: 'Boutique de mode en ligne, éditoriale et bilingue, panier et lookbook.', en: 'Editorial bilingual fashion store with cart and lookbook.', stack: 'React · Vite · Tailwind' },
  { name: 'InvoiceFlow', fr: "SaaS de facturation pour l'Afrique de l'Ouest : XOF, Mobile Money, calculs côté serveur.", en: 'Invoicing SaaS for West Africa: XOF, Mobile Money, server-side calculations.', stack: 'Next.js · Supabase · CI' },
  { name: 'LocalEats', fr: 'PWA de découverte de restaurants à Lomé, avec carte interactive.', en: 'Restaurant discovery PWA for Lomé, with an interactive map.', stack: 'React 19 · TanStack · Leaflet' },
  { name: 'S.K.G Trading', fr: 'Plateforme de formation : vidéos protégées, livres, paiement Mobile Money.', en: 'Learning platform: protected video, books and Mobile Money payments.', stack: 'React · Bunny.net · Mobile Money' },
  { name: 'SOLEYA', fr: 'Réservation pour spa de luxe, première livraison client.', en: 'Luxury spa booking, first client delivery.', stack: 'React · Firebase', url: 'https://soleya.lovable.app' },
  { name: 'Djina Crêpes', fr: 'Site de commande WhatsApp pour une crêperie de Lomé.', en: 'WhatsApp ordering site for a crêperie in Lomé.', stack: 'React · Vercel', url: 'https://djina-crepes.vercel.app/' },
]
