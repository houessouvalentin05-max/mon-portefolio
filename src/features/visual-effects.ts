export function setupVisualEffects() {
  const title = document.querySelector<HTMLHeadingElement>('.hero h1')!
  const hasFinePointer = matchMedia('(hover: hover) and (pointer: fine)').matches
  const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })
  document.querySelectorAll('.reveal, .principle, .project-row').forEach((element) => revealObserver.observe(element))

  if (hasFinePointer) {
    window.addEventListener('pointermove', (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
    }, { passive: true })
  }

  if (hasFinePointer && !prefersReducedMotion) {
    const letters = [...title.querySelectorAll<HTMLElement>('.name-letter')]

    title.addEventListener('pointermove', (event) => {
      letters.forEach((letter) => {
        const bounds = letter.getBoundingClientRect()
        const deltaX = event.clientX - (bounds.left + bounds.width / 2)
        const deltaY = event.clientY - (bounds.top + bounds.height / 2)
        const distance = Math.hypot(deltaX, deltaY)
        const influence = Math.max(0, 1 - distance / 125)
        const offsetX = Math.max(-5, Math.min(5, deltaX * influence * 0.11))
        const offsetY = Math.max(-3, Math.min(3, deltaY * influence * 0.09))
        letter.style.setProperty('--name-letter-x', influence > 0 ? `${offsetX.toFixed(1)}px` : '0px')
        letter.style.setProperty('--name-letter-y', influence > 0 ? `${offsetY.toFixed(1)}px` : '0px')
      })
    })

    title.addEventListener('pointerleave', () => {
      letters.forEach((letter) => {
        letter.style.setProperty('--name-letter-x', '0px')
        letter.style.setProperty('--name-letter-y', '0px')
      })
    })
  }
}
