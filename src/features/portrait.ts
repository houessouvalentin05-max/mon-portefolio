export function setupPortrait() {
  const portrait = document.querySelector<HTMLDivElement>('#portrait')!

  if (matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    portrait.addEventListener('pointermove', (event) => {
      const bounds = portrait.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5
      portrait.style.setProperty('--light-x', `${(x + 0.5) * 100}%`)
      portrait.style.setProperty('--light-y', `${(y + 0.5) * 100}%`)
      portrait.style.transform = `rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`
    })
    portrait.addEventListener('pointerleave', () => { portrait.style.transform = '' })
  }

  function togglePortrait() {
    const revealed = portrait.classList.toggle('is-revealed')
    portrait.setAttribute('aria-pressed', String(revealed))
  }

  portrait.addEventListener('click', togglePortrait)
  portrait.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      togglePortrait()
    }
  })
}
