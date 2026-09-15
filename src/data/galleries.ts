// ── External template galleries ─────────────────────────────────────────────
// A DIFFERENT kind of entry from everything in data/sites.ts. Everything there
// is a scroll-driven build this library actually shipped, with source you can
// open under /sites and a spec you can copy. Nothing here is that: every entry
// is SOMEONE ELSE's site, and this file exists only to link out to it with
// attribution — never to mirror, screenshot-farm, or re-host its content.
// That holds even for an entry whose own footer says its work is original and
// free to reuse (webstudio-backgrounds does) — "free to copy from the source"
// is not the same thing as "ours to re-host," and the discipline here doesn't
// bend per-entry. For a gallery that displays OTHER people's work on top of
// that (lovable-templates screenshots third-party templates it doesn't own
// either), copying it in would stack a third layer of "not actually ours."
//
// So the asset convention is different too: galleryThumbOf points at
// /galleries/<id>.svg — SVG, not a raster crop of the target's own page.
// Two reasons: it keeps this firmly a reference-by-name rather than a
// reproduction of anything on the target's page (see the file's own
// comments for why that distinction matters), and this repo's GitHub push
// path only transports text content — a binary asset written through it
// lands corrupted (confirmed empirically: it arrives as literal base64
// text, not decoded bytes), so SVG is also the only format that survives
// the tooling available to author it.
export type Gallery = {
  /** stable slug — filename for /galleries/<id>.svg */
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

export const galleryThumbOf = (id: string) => `/galleries/${id}.svg`

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
  {
    id: 'webstudio-backgrounds',
    title: 'Jaw-Dropping Animated Backgrounds',
    description:
      '50 original WebGL-shader and Canvas 2D backgrounds running live on the page — no video, no GIFs, no libraries. Copy the prompt or take the code straight from the source.',
    url: 'https://webstudio-backgrounds.vercel.app/',
    by: 'Web Studio',
    stat: '50 backgrounds · 0 dependencies · free for commercial use',
    tools: ['Readdy.ai', 'Lovable', 'Bolt', 'Cursor', 'Claude Code'],
    added: '2026-09-15',
  },
]
