import { portfolioProjects, stackFilters, stackTools, type Language } from '../data/portfolio-data'
import { stackIcon } from '../ui/brand-icons'

let selectedFilter = 'Tout'
let selectedTool = -1
let language: Language = 'fr'

let filterContainer: HTMLDivElement
let stackGrid: HTMLDivElement
let stackNote: HTMLParagraphElement

function renderFilters() {
  filterContainer.innerHTML = stackFilters.map((filter, index) => `<button type="button" class="filter${index === 0 ? ' is-active' : ''}" data-filter="${filter.id}" aria-pressed="${index === 0}"><span class="fr">${filter.fr}</span><span class="en">${filter.en}</span></button>`).join('')
}

function renderStack() {
  stackGrid.innerHTML = stackTools.map((tool, index) => {
    const icon = stackIcon(tool.name)
    return `<button type="button" class="tool${selectedFilter !== 'Tout' && selectedFilter !== tool.category ? ' is-muted' : ''}${selectedTool === index ? ' is-selected' : ''}" data-tool="${index}" style="--tool-hue:${(index * 41 + 16) % 360};--icon-color:var(--gold)" aria-pressed="${selectedTool === index}"><span class="tool-icon" aria-hidden="true">${icon}</span><span class="tool-name">${tool.name}</span><span class="tool-category">${tool.category}</span></button>`
  }).join('')
}

function renderProjects() {
  document.querySelector<HTMLDivElement>('#projects')!.innerHTML = portfolioProjects.map((project, index) => {
    const content = `<span class="project-number">0${index + 1}</span><span class="project-main"><strong>${project.name}</strong><span class="project-description"><span class="fr">${project.fr}</span><span class="en">${project.en}</span></span></span><span class="project-stack">${project.stack}</span><span class="project-arrow" aria-hidden="true">${project.url ? '↗' : '—'}</span>`
    return project.url
      ? `<a class="project-row" href="${project.url}" target="_blank" rel="noopener noreferrer">${content}</a>`
      : `<article class="project-row">${content}</article>`
  }).join('')
}

function updateSelectedTool(index: number) {
  selectedTool = index
  const tool = stackTools[index]
  stackNote.innerHTML = `<strong>${tool.name}</strong><span>${tool[language]}</span>`
  stackGrid.querySelectorAll<HTMLButtonElement>('[data-tool]').forEach((button) => {
    const isSelected = Number(button.dataset.tool) === index
    button.classList.toggle('is-selected', isSelected)
    button.setAttribute('aria-pressed', String(isSelected))
  })
}

export function setupStack() {
  filterContainer = document.querySelector<HTMLDivElement>('#filters')!
  stackGrid = document.querySelector<HTMLDivElement>('#stack-grid')!
  stackNote = document.querySelector<HTMLParagraphElement>('#stack-note')!
  renderFilters()
  renderStack()
  renderProjects()

  filterContainer.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-filter]')
    if (!button) return
    selectedFilter = button.dataset.filter ?? 'Tout'
    filterContainer.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach((filter) => {
      const isActive = filter === button
      filter.classList.toggle('is-active', isActive)
      filter.setAttribute('aria-pressed', String(isActive))
    })
    renderStack()
  })

  stackGrid.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-tool]')
    if (button) updateSelectedTool(Number(button.dataset.tool))
  })
  stackGrid.addEventListener('pointerover', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-tool]')
    if (button) updateSelectedTool(Number(button.dataset.tool))
  })

  return (nextLanguage: Language) => {
    language = nextLanguage
    if (selectedTool >= 0) updateSelectedTool(selectedTool)
  }
}
