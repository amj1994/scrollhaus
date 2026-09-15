// ── External template galleries ─────────────────────────────────────────────
// A DIFFERENT kind of entry from everything in data/sites.ts. Everything there
// is a scroll-driven build this library actually shipped, with source you can
// open under /sites and a spec you can copy. Nothing here is that: these are
// OTHER PEOPLE's directories of OTHER PEOPLE's templates, and this file exists
// only to link out to them with attribution — never to mirror, screenshot-farm,
// or re-host their template catalogues. If a gallery's own footer disclaims
// ownership of what it displays (as lovable-templates does), copying its
// content into this library would just add a third layer of "not actually
// ours" on top of two that already exist.
//
// So the asset convention is different too: galleryThumbOf points at
// /galleries/<id>.webp, and that file must be a crop of the target's OWN
// masthead/hero — never a crop that includes any of the third-party template
// thumbnails the directory itself displays further down the page.
export type Gallery = {
  /** stable slug — filename for /galleries/<id>.webp */
  id: string
  /** the gallery's own name, not ours */
  title: string
  /** one line, factual — what it is, not a pitch */
  description: string
  url: string
  /** who actually built the directory, if stated on the page */
  by?: string
  /** e.g. "131 templates across 9 categories" — only real, stated numbers */
  stat?: string
  /** which AI coding tools the templates target, if stated */
  tools?: string[]
  /** ISO date this entry was added to the section, newest first */
  added: string
}

export const galleryThumbOf = (id: string) => `/galleries/${id}.webp`

export const GALLERIES: Gallery[] = [
  {
    id: 'lovable-templates',
    title: '131 Website Templates',
    description:
      'A searchable directory of 131 React + Tailwind templates, screenshotted from Readdy.ai, Lovable, Bolt and others — build any of them in whichever AI coding tool you use.',
    url: 'https://lovable-templates.vercel.app/',
    by: 'Vibe Code Automators',
    stat: '131 templates · 9 categories',
    tools: ['Readdy.ai', 'Lovable', 'Bolt', 'Cursor', 'Claude Code'],
    added: '2026-09-15',
  },
]
