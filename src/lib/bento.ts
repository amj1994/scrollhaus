// Three aspect ratios in rotation, all close to the library's own native
// 16:9 preview footage — that's what keeps the masonry stagger real without
// the letterboxing blowing up. object-contain never crops, but the further
// a box's ratio sits from 16:9 the more of it is dead margin instead of
// video: a 3:4 portrait box showing 16:9 content is ~77% blank bars, top
// and bottom. Staying inside roughly 1.5–2.1 keeps that margin to a sliver
// (worst case around 12% a side) while still throwing columns out of
// alignment — variety without the empty-frame look.
const RATIOS = [
  '16 / 9', // exact match, no letterbox at all
  '3 / 2', // a little taller
  '2 / 1', // a little wider
  '16 / 9',
  '2 / 1',
  '3 / 2',
  '16 / 9',
] as const

export function bentoSpan(index: number): string {
  return RATIOS[index % RATIOS.length]
}
