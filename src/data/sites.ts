export type Site = {
  /** stable slug. Also the filename for /thumbs, /previews and /specs, and the
   *  folder name under /sites in the repo. */
  id: string
  /** shown under the card */
  title: string
  /** one category chip — keep to the CATEGORIES list below */
  category: string
  /** ISO date, newest first in the grid */
  added: string
  /** bump (any new string) whenever /previews/<id>.mp4 is recaptured in place.
   *  Hostinger's edge CDN caches that path indefinitely with no revalidation —
   *  without a cache-busting query param a re-uploaded video keeps serving the
   *  old cut to real visitors even though the origin file is correct. Omit for
   *  a site whose preview has never been recaptured after its first deploy. */
  previewV?: string
}

const REPO = 'https://github.com/amj1994/scrollhaus'

// Asset paths are derived from `id`, never stored:
//   /thumbs/<id>.webp        poster frame
//   /previews/<id>.mp4       silent looping scroll-through
//   /specs/<id>.txt          the build spec, fetched only when Copy is pressed
//   REPO/tree/main/sites/<id> the site's real source, committed alongside it
//
// Keeping the spec OUT of this file is the whole scaling story. Inlined, three
// entries already cost 75 KB of JavaScript; a thousand would cost ~25 MB and the
// library would stop loading. This registry stays about 100 bytes per entry.
export const thumbOf = (id: string) => `/thumbs/${id}.webp`
export const previewOf = (id: string, v?: string) => `/previews/${id}.mp4${v ? `?v=${v}` : ''}`
export const specOf = (id: string) => `/specs/${id}.txt`
export const githubOf = (id: string) => `${REPO}/tree/main/sites/${id}`

export const CATEGORIES = [
  'All', 'Hero', 'Landing Page', 'Agency', 'Portfolio', 'Ecommerce',
  'Saas', 'Ai', '3d Website', 'Wellness', 'Travel', 'Technology', 'Fintech',
] as const

export const SITES: Site[] = [
  { id: 'juniper-path', title: 'Juniper Path', category: 'Wellness', added: '2026-09-07', previewV: '2' },
  { id: 'argent', title: 'Argent', category: 'Hero', added: '2026-09-07', previewV: '2' },
  { id: 'ltv12', title: 'LTV-12', category: 'Technology', added: '2026-09-07', previewV: '2' },
  { id: 'anula', title: 'Anula', category: 'Ecommerce', added: '2026-09-08', previewV: '2' },
  { id: 'botnest', title: 'BotNest', category: 'Ai', added: '2026-09-08', previewV: '2' },
  { id: 'voyages', title: 'Voyages & Chapters', category: 'Travel', added: '2026-09-08', previewV: '2' },
  { id: 'cryptowave', title: 'CryptoWave', category: 'Fintech', added: '2026-09-09', previewV: '2' },
  { id: 'lafys', title: 'Lafys', category: 'Portfolio', added: '2026-09-09', previewV: '2' },
  { id: 'third-time', title: 'The Third Time', category: 'Landing Page', added: '2026-09-09', previewV: '2' },
  { id: 'tenth-hvac', title: 'Tenth Heating & Air', category: 'Landing Page', added: '2026-09-09', previewV: '2' },
  { id: 'solv-finance', title: 'Solv', category: 'Fintech', added: '2026-09-09', previewV: '3' },
  { id: 'glass-solution', title: 'ai/SmartSolution', category: 'Ai', added: '2026-09-09', previewV: '2' },
  { id: 'glair-glasses', title: 'Glair', category: 'Technology', added: '2026-09-09', previewV: '2' },
  { id: 'pictura', title: 'Pictura', category: 'Portfolio', added: '2026-09-09', previewV: '2' },
  { id: 'nexus-ring', title: 'Nexus Ring', category: 'Ecommerce', added: '2026-09-09', previewV: '2' },
  { id: 'nixole', title: 'Nixole', category: 'Saas', added: '2026-09-09', previewV: '2' },
  { id: 'e-endless', title: 'E-Endless', category: 'Saas', added: '2026-09-10', previewV: '2' },
  { id: 'vanguard', title: 'Vanguard', category: 'Fintech', added: '2026-09-10', previewV: '2' },
  { id: 'shyen', title: 'Shyen', category: 'Ai', added: '2026-09-10', previewV: '2' },
  { id: 'cirform', title: 'Cirform', category: 'Fintech', added: '2026-09-10' },
  { id: 'animated-loader', title: 'Animated Loader', category: 'Hero', added: '2026-09-10', previewV: '2' },
  { id: 'brilliant-portfolio', title: 'Liquid', category: '3d Website', added: '2026-09-10' },
  { id: 'kubric', title: 'Kubric', category: 'Saas', added: '2026-09-10', previewV: '2' },
  { id: 'valmax', title: 'Valmax', category: 'Portfolio', added: '2026-09-10' },
]
