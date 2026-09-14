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
  /** true = the real build is mirrored at /sites/<id>/ and the detail view
   *  can iframe it live. Most of the library's `sites/<id>` GitHub folders
   *  turned out to hold an incomplete checkout (bare package-lock.json, no
   *  source) or a Vite project that was never built — neither is iframeable
   *  as-is. Only set this once a working static build actually exists under
   *  public/sites/<id>/index.html; everything else falls back to the
   *  existing preview video in the detail view instead of a broken iframe. */
  live?: boolean
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
export const siteUrlOf = (id: string) => `/sites/${id}/index.html`
export const githubOf = (id: string, free?: boolean) =>
  `${free ? REPO : VAULT_REPO}/tree/main/sites/${id}`

export const CATEGORIES = [
  'All', 'Hero', 'Landing Page', 'Agency', 'Portfolio', 'Ecommerce',
  'Saas', 'Ai', '3d Website', 'Wellness', 'Travel', 'Technology', 'Fintech',
] as const

// previewV: '8' across the board on 2026-09-15 — every preview re-encoded again,
// this time down to 640px-wide H.264 (crf 26) and every thumb down to 960px
// webp, cutting the library from ~35MB to ~15MB of preview video (~1.7MB to
// ~1.2MB of thumbs). The card never renders wider than ~380px, so 640px is
// still ~1.7x retina headroom — no visible quality loss at display size, only
// the wasted oversampling is gone. Also removed the last loading="lazy" spots
// (Briar's shop grid, Plinth's marquee, the skills catalog cards) — the point
// of images that small is that nothing should visibly pop in.
export const SITES: Site[] = [
  { id: 'juniper-path', title: 'Juniper Path', category: 'Wellness', added: '2026-09-07', previewV: '8' },
  { id: 'argent', title: 'Argent', category: 'Hero', added: '2026-09-07', previewV: '8' },
  { id: 'ltv12', title: 'LTV-12', category: 'Technology', added: '2026-09-07', previewV: '8' },
  { id: 'anula', title: 'Anula', category: 'Ecommerce', added: '2026-09-08', previewV: '8' },
  { id: 'botnest', title: 'BotNest', category: 'Ai', added: '2026-09-08', previewV: '8' },
  { id: 'voyages', title: 'Voyages & Chapters', category: 'Travel', added: '2026-09-08', previewV: '8' },
  { id: 'cryptowave', title: 'CryptoWave', category: 'Fintech', added: '2026-09-09', previewV: '8' },
  { id: 'lafys', title: 'Lafys', category: 'Portfolio', added: '2026-09-09', previewV: '8' },
  { id: 'third-time', title: 'The Third Time', category: 'Landing Page', added: '2026-09-09', previewV: '8' },
  { id: 'tenth-hvac', title: 'Tenth Heating & Air', category: 'Landing Page', added: '2026-09-09', previewV: '8' },
  { id: 'solv-finance', title: 'Solv', category: 'Fintech', added: '2026-09-09', previewV: '8' },
  { id: 'glass-solution', title: 'ai/SmartSolution', category: 'Ai', added: '2026-09-09', previewV: '8' },
  { id: 'glair-glasses', title: 'Glair', category: 'Technology', added: '2026-09-09', previewV: '8' },
  { id: 'pictura', title: 'Pictura', category: 'Portfolio', added: '2026-09-09', previewV: '8' },
  { id: 'nexus-ring', title: 'Nexus Ring', category: 'Ecommerce', added: '2026-09-09', previewV: '8' },
  { id: 'nixole', title: 'Nixole', category: 'Saas', added: '2026-09-09', previewV: '8' },
  { id: 'e-endless', title: 'E-Endless', category: 'Saas', added: '2026-09-10', previewV: '8' },
  { id: 'vanguard', title: 'Vanguard', category: 'Fintech', added: '2026-09-10', previewV: '8' },
  { id: 'shyen', title: 'Shyen', category: 'Ai', added: '2026-09-10', previewV: '8' },
  { id: 'cirform', title: 'Cirform', category: 'Fintech', added: '2026-09-10', previewV: '8' },
  { id: 'animated-loader', title: 'Animated Loader', category: 'Hero', added: '2026-09-10', previewV: '8' },
  { id: 'brilliant-portfolio', title: 'Liquid', category: '3d Website', added: '2026-09-10', previewV: '8' },
  { id: 'kubric', title: 'Kubric', category: 'Saas', added: '2026-09-10', previewV: '8' },
  { id: 'valmax', title: 'Valmax', category: 'Portfolio', added: '2026-09-10', previewV: '8' },
  { id: 'pelmatech', title: 'Pelmatech', category: 'Landing Page', added: '2026-09-10', previewV: '8' },
  { id: 'groundai', title: 'GroundAI', category: 'Ai', added: '2026-09-10', previewV: '8' },
  { id: 'sixsense', title: 'Sixsense', category: 'Ai', added: '2026-09-10', previewV: '8' },
  { id: 'bancuip', title: 'Bancuip', category: 'Fintech', added: '2026-09-10', previewV: '8' },
  { id: 'pallet-ross', title: 'Pallet Ross', category: 'Ecommerce', added: '2026-09-10', previewV: '8' },
  { id: 'pallet-bags', title: 'Bags Crafted', category: 'Ecommerce', added: '2026-09-10', previewV: '8' },
  { id: 'moneta', title: 'Moneta Key', category: 'Interactive', added: '2026-09-10', previewV: '8' },
  { id: 'pyra', title: 'Pyra', category: 'Ecommerce', added: '2026-09-10', previewV: '8' },
  { id: 'ember-footer', title: 'Ember', category: 'Interactive', added: '2026-09-10', previewV: '8' },
  { id: 'quire', title: 'Quire', category: 'Interactive', added: '2026-09-10', previewV: '8' },
  { id: 'inner-circle', title: 'Inner Circle', category: 'Interactive', added: '2026-09-10', previewV: '8' },
  { id: 'morphos', title: 'Morphos', category: '3d Website', added: '2026-09-12', previewV: '8' },
  { id: 'neuralkinetics', title: 'NeuralKinetics', category: 'Ai', added: '2026-09-12', previewV: '8' },
]

// Free giveaway builds — mixed into the main grid (via ALL_SITES below)
// with a "Free" badge rather than a separate tab. Original builds made
// specifically to be free; paid library sites above are never marked free.
export const FREE_SITES: Site[] = [
  { id: 'kelo-hero', title: 'Kelo', category: 'Ai', added: '2026-09-10', previewV: '8', free: true, live: true },
  { id: 'verve-header', title: 'Verve', category: 'Ecommerce', added: '2026-09-10', previewV: '8', free: true, live: true },
  { id: 'waypoint-about', title: 'Waypoint', category: 'Travel', added: '2026-09-10', previewV: '8', free: true, live: true },
  { id: 'aurum-jewelry', title: 'Aurum', category: 'Portfolio', added: '2026-09-11', previewV: '8', free: true, live: true },
  { id: 'velara', title: 'Velara', category: 'Ai', added: '2026-09-12', previewV: '8', free: true, live: true },
  { id: 'frostbound', title: 'Frostbound', category: 'Travel', added: '2026-09-12', previewV: '8', free: true, live: true },
  { id: 'auria', title: 'Auria', category: 'Ai', added: '2026-09-12', previewV: '8', free: true, live: true },
  { id: 'contentflow', title: 'ContentFlow', category: 'Saas', added: '2026-09-12', previewV: '8', free: true, live: true },
  { id: 'brandly', title: 'Brandly', category: 'Agency', added: '2026-09-12', previewV: '8', free: true, live: true },
  { id: 'aperture', title: 'Aperture', category: 'Agency', added: '2026-09-12', previewV: '8', free: true, live: true },
  { id: 'orven', title: 'Orven', category: 'Ecommerce', added: '2026-09-13', previewV: '8', free: true, live: true },
  { id: 'drift', title: 'DRIFT', category: 'Hero', added: '2026-09-13', previewV: '8', free: true, live: true },
  { id: 'kiln', title: 'KILN', category: 'Agency', added: '2026-09-14', previewV: '8', free: true, live: true },
  { id: 'briar', title: 'Briar', category: 'Ecommerce', added: '2026-09-14', previewV: '8', free: true, live: true },
  { id: 'elsewhere', title: 'Elsewhere', category: 'Travel', added: '2026-09-14', previewV: '8', free: true, live: true },
  { id: 'silentstudios', title: 'Silent Studios', category: 'Portfolio', added: '2026-09-14', previewV: '8', free: true, live: true },
  { id: 'plinth', title: 'Plinth', category: 'Agency', added: '2026-09-14', previewV: '8', free: true, live: true },
  { id: 'hanbit-korea', title: 'Hanbit Korea', category: 'Travel', added: '2026-09-15', previewV: '8', free: true, live: true },
  { id: 'sorrel', title: 'Sorrel', category: 'Hero', added: '2026-09-15', free: true, live: true },
  { id: 'aurelia', title: 'Aurelia Dental', category: 'Wellness', added: '2026-09-15', free: true, live: true },
  { id: 'mirage', title: 'Mirage', category: 'Portfolio', added: '2026-09-15', free: true, live: true },
  { id: 'halogen', title: 'Halogen', category: 'Agency', added: '2026-09-15', free: true, live: true },
  { id: 'mercer', title: '@mercerbuilt', category: 'Portfolio', added: '2026-09-15', free: true, live: true },
]

export const ALL_SITES: Site[] = [...SITES, ...FREE_SITES]
