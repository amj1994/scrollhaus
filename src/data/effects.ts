// Effects section — self-contained interactive builds, hosted at
// /effects/<id>/index.html (same origin, same convention as siteUrlOf for
// Library entries). Unlike Templates, there's no external URL here at all:
// each entry is a real file this account owns, so the card and its detail
// view render straight from Scrollhaus's own static assets — nothing to
// link out to, nothing to credit.
export type EffectEntry = {
  id: string
  title: string
  category: string
  added: string
}

export const effectUrlOf = (id: string) => `/effects/${id}/index.html`

export const EFFECTS: EffectEntry[] = [
  {
    id: 'web-studio-effect-library',
    title: 'Web Studio — Effect Library',
    category: '42 copy-paste effects for GoHighLevel',
    added: '2026-09-15',
  },
]
