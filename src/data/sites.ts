export type Site = {
  /** stable slug. Also the filename for /thumbs, /previews and /specs. */
  id: string
  /** shown under the card */
  title: string
  /** one category chip — keep to the CATEGORIES list below */
  category: string
  /** deployed URL, or a localhost URL while it is still local.
   *  Omit it entirely for a spec-only entry — the card then shows just Copy. */
  live?: string
  /** true while `live` is only reachable on your machine */
  local?: boolean
  /** ISO date, newest first in the grid */
  added: string
}

// Asset paths are derived from `id`, never stored:
//   /thumbs/<id>.webp   poster frame
//   /previews/<id>.mp4  silent looping scroll-through
//   /specs/<id>.txt     the build spec, fetched only when Copy is pressed
//
// Keeping the spec OUT of this file is the whole scaling story. Inlined, three
// entries already cost 75 KB of JavaScript; a thousand would cost ~25 MB and the
// library would stop loading. This registry stays about 120 bytes per entry.
export const thumbOf = (id: string) => `/thumbs/${id}.webp`
export const previewOf = (id: string) => `/previews/${id}.mp4`
export const specOf = (id: string) => `/specs/${id}.txt`

export const CATEGORIES = [
  'All', 'Hero', 'Landing Page', 'Agency', 'Portfolio', 'Ecommerce',
  'Saas', 'Ai', '3d Website', 'Wellness', 'Travel', 'Technology', 'Fintech',
] as const

export const SITES: Site[] = [
  { id: 'juniper-path', title: 'Juniper Path', category: 'Wellness', added: '2026-09-07' },
  { id: 'argent', title: 'Argent', category: 'Hero', live: 'http://localhost:5173', local: true, added: '2026-09-07' },
  { id: 'ltv12', title: 'LTV-12', category: 'Technology', live: 'http://localhost:5175', local: true, added: '2026-09-07' },
  { id: 'anula', title: 'Anula', category: 'Ecommerce', live: 'http://localhost:3100', local: true, added: '2026-09-08' },
  { id: 'botnest', title: 'BotNest', category: 'Ai', live: 'http://localhost:5177', local: true, added: '2026-09-08' },
  { id: 'voyages', title: 'Voyages & Chapters', category: 'Travel', live: 'http://localhost:5191', local: true, added: '2026-09-08' },
  { id: 'cryptowave', title: 'CryptoWave', category: 'Fintech', live: 'http://localhost:5195', local: true, added: '2026-09-09' },
]
