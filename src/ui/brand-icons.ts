import {
  siAnthropic,
  siCline,
  siDocker,
  siFirebase,
  siGithub,
  siGithubactions,
  siGmail,
  siLeaflet,
  siNextdotjs,
  siPython,
  siReact,
  siSupabase,
  siTailwindcss,
  siTanstack,
  siTypescript,
  siVercel,
  siVite,
  siWhatsapp,
} from 'simple-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const stackBrandIcons = {
  React: siReact,
  TypeScript: siTypescript,
  'Next.js': siNextdotjs,
  Vite: siVite,
  TanStack: siTanstack,
  Tailwind: siTailwindcss,
  Supabase: siSupabase,
  Firebase: siFirebase,
  Python: siPython,
  Leaflet: siLeaflet,
  Docker: siDocker,
  Vercel: siVercel,
  'GitHub CI': siGithubactions,
  Claude: siAnthropic,
  Cline: siCline,
}

export function stackIcon(name: string) {
  const icon = stackBrandIcons[name as keyof typeof stackBrandIcons]
  if (!icon) return '<span class="brand-fallback">L</span>'
  return `<svg class="brand-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="--icon-color:#${icon.hex}"><path d="${icon.path}" /></svg>`
}

function simpleBrandSvg(icon: { path: string; hex: string }, color = icon.hex) {
  return `<svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="--contact-brand:#${color}"><path d="${icon.path}" /></svg>`
}

const [linkedinWidth, linkedinHeight, , , linkedinPath] = faLinkedin.icon
const linkedinSvgPath = Array.isArray(linkedinPath) ? linkedinPath.join(' ') : linkedinPath

export const contactBrandIcons = {
  whatsapp: simpleBrandSvg(siWhatsapp),
  email: simpleBrandSvg(siGmail),
  linkedin: `<svg class="contact-icon" viewBox="0 0 ${linkedinWidth} ${linkedinHeight}" aria-hidden="true" focusable="false" style="--contact-brand:#0A66C2"><path d="${linkedinSvgPath}" /></svg>`,
  github: simpleBrandSvg(siGithub, 'F0F6FC'),
}
