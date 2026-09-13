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
  /** true = a free giveaway build, shown with a "Free" badge in the main
   *  grid instead of gated behind a plan. Never set on paid inventory. */
  free?: boolean
}

const REPO = 'https://github.com/amj1994/scrollhaus'
// Formerly-gated entries' full source lives in this repo instead — split out
// during a since-abandoned private-repo paywall experiment, now public too.
const VAULT_REPO = 'https://github.com/amj1994/scrollhaus-vault'

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
export const githubOf = (id: string, free?: boolean) =>
  `${free ? REPO : VAULT_REPO}/tree/main/sites/${id}`

export const CATEGORIES = [
  'All', 'Hero', 'Landing Page', 'Agency', 'Portfolio', 'Ecommerce',
  'Saas', 'Ai', '3d Website', 'Wellness', 'Travel', 'Technology', 'Fintech',
] as const

// previewV: '6' across the board on 2026-09-13 — every preview was re-encoded
// down from a 1920x1080 source (the cards never render wider than ~380px) to
// 960px-wide H.264 at a content-appropriate CRF, cutting the library from 69MB
// to 26MB. Uncapped source resolution meant every card near the viewport was
// decoding a full 1080p stream at once — with a dozen-plus cards inside the
// 300px intersection runway during a normal scroll, that decode + bandwidth
// load was what made scrolling stall. Quality is unchanged at the size the
// video ever actually displays at; only the wasted resolution is gone.
export const SITES: Site[] = [
  { id: 'juniper-path', title: 'Juniper Path', category: 'Wellness', added: '2026-09-07', previewV: '6' },
  { id: 'argent', title: 'Argent', category: 'Hero', added: '2026-09-07', previewV: '6' },
  { id: 'ltv12', title: 'LTV-12', category: 'Technology', added: '2026-09-07', previewV: '6' },
  { id: 'anula', title: 'Anula', category: 'Ecommerce', added: '2026-09-08', previewV: '6' },
  { id: 'botnest', title: 'BotNest', category: 'Ai', added: '2026-09-08', previewV: '6' },
  { id: 'voyages', title: 'Voyages & Chapters', category: 'Travel', added: '2026-09-08', previewV: '6' },
  { id: 'cryptowave', title: 'CryptoWave', category: 'Fintech', added: '2026-09-09', previewV: '6' },
  { id: 'lafys', title: 'Lafys', category: 'Portfolio', added: '2026-09-09', previewV: '6' },
  { id: 'third-time', title: 'The Third Time', category: 'Landing Page', added: '2026-09-09', previewV: '6' },
  { id: 'tenth-hvac', title: 'Tenth Heating & Air', category: 'Landing Page', added: '2026-09-09', previewV: '6' },
  { id: 'solv-finance', title: 'Solv', category: 'Fintech', added: '2026-09-09', previewV: '6' },
  { id: 'glass-solution', title: 'ai/SmartSolution', category: 'Ai', added: '2026-09-09', previewV: '6' },
  { id: 'glair-glasses', title: 'Glair', category: 'Technology', added: '2026-09-09', previewV: '6' },
  { id: 'pictura', title: 'Pictura', category: 'Portfolio', added: '2026-09-09', previewV: '6' },
  { id: 'nexus-ring', title: 'Nexus Ring', category: 'Ecommerce', added: '2026-09-09', previewV: '6' },
  { id: 'nixole', title: 'Nixole', category: 'Saas', added: '2026-09-09', previewV: '6' },
  { id: 'e-endless', title: 'E-Endless', category: 'Saas', added: '2026-09-10', previewV: '6' },
  { id: 'vanguard', title: 'Vanguard', category: 'Fintech', added: '2026-09-10', previewV: '6' },
  { id: 'shyen', title: 'Shyen', category: 'Ai', added: '2026-09-10', previewV: '6' },
  { id: 'cirform', title: 'Cirform', category: 'Fintech', added: '2026-09-10', previewV: '6' },
  { id: 'animated-loader', title: 'Animated Loader', category: 'Hero', added: '2026-09-10', previewV: '6' },
  { id: 'brilliant-portfolio', title: 'Liquid', category: '3d Website', added: '2026-09-10', previewV: '6' },
  { id: 'kubric', title: 'Kubric', category: 'Saas', added: '2026-09-10', previewV: '6' },
  { id: 'valmax', title: 'Valmax', category: 'Portfolio', added: '2026-09-10', previewV: '6' },
  { id: 'pelmatech', title: 'Pelmatech', category: 'Landing Page', added: '2026-09-10', previewV: '6' },
  { id: 'groundai', title: 'GroundAI', category: 'Ai', added: '2026-09-10', previewV: '6' },
  { id: 'sixsense', title: 'Sixsense', category: 'Ai', added: '2026-09-10', previewV: '6' },
  { id: 'bancuip', title: 'Bancuip', category: 'Fintech', added: '2026-09-10', previewV: '6' },
  { id: 'pallet-ross', title: 'Pallet Ross', category: 'Ecommerce', added: '2026-09-10', previewV: '6' },
  { id: 'pallet-bags', title: 'Bags Crafted', category: 'Ecommerce', added: '2026-09-10', previewV: '6' },
  { id: 'moneta', title: 'Moneta Key', category: 'Interactive', added: '2026-09-10', previewV: '6' },
  { id: 'pyra', title: 'Pyra', category: 'Ecommerce', added: '2026-09-10', previewV: '6' },
  { id: 'ember-footer', title: 'Ember', category: 'Interactive', added: '2026-09-10', previewV: '6' },
  { id: 'quire', title: 'Quire', category: 'Interactive', added: '2026-09-10', previewV: '6' },
  { id: 'inner-circle', title: 'Inner Circle', category: 'Interactive', added: '2026-09-10', previewV: '6' },
  { id: 'morphos', title: 'Morphos', category: '3d Website', added: '2026-09-12', previewV: '6' },
  { id: 'neuralkinetics', title: 'NeuralKinetics', category: 'Ai', added: '2026-09-12', previewV: '6' },
]

// Free giveaway builds — mixed into the main grid (via ALL_SITES below)
// with a "Free" badge rather than a separate tab. Original builds made
// specifically to be free; paid library sites above are never marked free.
export const FREE_SITES: Site[] = [
  { id: 'kelo-hero', title: 'Kelo', category: 'Ai', added: '2026-09-10', previewV: '6', free: true },
  { id: 'verve-header', title: 'Verve', category: 'Ecommerce', added: '2026-09-10', previewV: '6', free: true },
  { id: 'waypoint-about', title: 'Waypoint', category: 'Travel', added: '2026-09-10', previewV: '6', free: true },
  { id: 'aurum-jewelry', title: 'Aurum', category: 'Portfolio', added: '2026-09-11', previewV: '6', free: true },
  { id: 'velara', title: 'Velara', category: 'Ai', added: '2026-09-12', previewV: '6', free: true },
  { id: 'frostbound', title: 'Frostbound', category: 'Travel', added: '2026-09-12', previewV: '6', free: true },
  { id: 'auria', title: 'Auria', category: 'Ai', added: '2026-09-12', previewV: '6', free: true },
  { id: 'contentflow', title: 'ContentFlow', category: 'Saas', added: '2026-09-12', previewV: '6', free: true },
  { id: 'brandly', title: 'Brandly', category: 'Agency', added: '2026-09-12', previewV: '6', free: true },
  { id: 'aperture', title: 'Aperture', category: 'Agency', added: '2026-09-12', previewV: '6', free: true },
  { id: 'orven', title: 'Orven', category: 'Ecommerce', added: '2026-09-13', previewV: '6', free: true },
  { id: 'drift', title: 'DRIFT', category: 'Hero', added: '2026-09-13', previewV: '6', free: true },
]

export const ALL_SITES: Site[] = [...SITES, ...FREE_SITES]
