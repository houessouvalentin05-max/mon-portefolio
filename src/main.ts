import './portfolio.css'
import { setupLanguage } from './features/language'
import { setupNavigation } from './features/navigation'
import { setupPortrait } from './features/portrait'
import { setupStack } from './features/stack'
import { setupVisualEffects } from './features/visual-effects'
import { renderPage } from './page'

renderPage()
const updateStackLanguage = setupStack()
setupLanguage(updateStackLanguage)
setupNavigation()
setupPortrait()
setupVisualEffects()
