import type { Language } from '../data/portfolio-data'

function isLanguage(value: string | null): value is Language {
  return value === 'fr' || value === 'en'
}

export function setupLanguage(onLanguageChange: (language: Language) => void) {
  const languageButton = document.querySelector<HTMLButtonElement>('#language')!
  const menuToggle = document.querySelector<HTMLButtonElement>('#menu-toggle')!
  let language: Language = 'fr'

  function setLanguage(nextLanguage: Language) {
    language = nextLanguage
    document.documentElement.lang = nextLanguage
    languageButton.textContent = nextLanguage === 'fr' ? 'EN' : 'FR'
    languageButton.setAttribute('aria-label', nextLanguage === 'fr' ? 'Switch language to English' : 'Changer la langue en français')
    menuToggle.setAttribute('aria-label', menuToggle.getAttribute('aria-expanded') === 'true'
      ? (nextLanguage === 'fr' ? 'Fermer le menu' : 'Close menu')
      : (nextLanguage === 'fr' ? 'Ouvrir le menu' : 'Open menu'))
    document.title = nextLanguage === 'fr' ? 'Valentin Houessou — Développeur full-stack' : 'Valentin Houessou — Full-stack developer'
    try { localStorage.setItem('portfolio-language', nextLanguage) } catch { /* Storage may be unavailable in private browsing. */ }
    onLanguageChange(nextLanguage)
  }

  languageButton.addEventListener('click', () => setLanguage(language === 'fr' ? 'en' : 'fr'))

  try {
    const savedLanguage = localStorage.getItem('portfolio-language')
    const preferredLanguage = isLanguage(savedLanguage)
      ? savedLanguage
      : navigator.language && !navigator.language.toLowerCase().startsWith('fr') ? 'en' : 'fr'
    setLanguage(preferredLanguage)
  } catch {
    setLanguage('fr')
  }
}
