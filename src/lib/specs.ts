import { specOf } from '@/data/sites'

// Specs are fetched once and kept for the session. Copying the same card
// twice, or opening its detail view after copying from the grid, costs one
// request, not two — shared between SiteCard and SiteDetail.
const specCache = new Map<string, Promise<string>>()

export function loadSpec(id: string) {
  let p = specCache.get(id)
  if (!p) {
    p = fetch(specOf(id)).then(r => {
      if (!r.ok) throw new Error(`spec ${id}: ${r.status}`)
      return r.text()
    })
    specCache.set(id, p)
  }
  return p
}

export function clearSpecCache(id: string) {
  specCache.delete(id)
}

// Every spec wraps its source in a single ```html fenced block. Sites whose
// live build isn't mirrored into /sites/<id>/ (see data/sites.ts `live`) fall
// back to this for the "HTML Code" copy, so the action never comes up empty.
export function extractHtml(spec: string): string {
  const m = spec.match(/```html\n([\s\S]*?)\n```/)
  return m ? m[1] : spec
}
