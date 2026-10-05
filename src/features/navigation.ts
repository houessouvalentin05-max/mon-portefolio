export function setupNavigation() {
  const navigation = document.querySelector<HTMLElement>('.nav')!
  const menuToggle = document.querySelector<HTMLButtonElement>('#menu-toggle')!
  const navLinks = document.querySelector<HTMLDivElement>('#nav-links')!
  let previousScrollY = window.scrollY
  let scrollStopTimer = 0

  function setMenuOpen(open: boolean) {
    const language = document.documentElement.lang
    menuToggle.setAttribute('aria-expanded', String(open))
    menuToggle.setAttribute('aria-label', open
      ? (language === 'fr' ? 'Fermer le menu' : 'Close menu')
      : (language === 'fr' ? 'Ouvrir le menu' : 'Open menu'))
    navLinks.classList.toggle('is-open', open)
    navigation.classList.toggle('menu-open', open)
  }

  menuToggle.addEventListener('click', () => setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true'))
  navLinks.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) setMenuOpen(false)
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false)
      menuToggle.focus()
    }
  })

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY
    if (currentScrollY <= 12 || currentScrollY < previousScrollY - 2) {
      navigation.classList.remove('is-hidden')
    } else if (currentScrollY > previousScrollY + 2 && menuToggle.getAttribute('aria-expanded') !== 'true') {
      navigation.classList.add('is-hidden')
    }
    previousScrollY = currentScrollY
    window.clearTimeout(scrollStopTimer)
    scrollStopTimer = window.setTimeout(() => navigation.classList.remove('is-hidden'), 220)
  }, { passive: true })
}
