// A simple alternating rhythm — big square, small square, big square, small
// square — applied from the sm breakpoint up (grid-flow-dense fills any gaps
// dense packing leaves on the tightest 2-column layout, so mobile stays a
// plain, uniform grid of small squares instead of reflowing oddly).
//
// Every tile is a real square: the grid container measures its own live
// column width (see syncTileSize in App.tsx) and writes it into --tile,
// which auto-rows reads — so a "big" 2-col/2-row span is exactly as tall as
// it is wide, at every breakpoint, instead of the wide, cropped-looking
// rectangle the fixed-height rows produced before.
const PATTERN = [
  'sm:col-span-2 sm:row-span-2', // big
  '', // small
] as const

export function bentoSpan(index: number): string {
  return PATTERN[index % PATTERN.length]
}
