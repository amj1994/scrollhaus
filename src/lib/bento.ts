// A subtle alternating rhythm — normal tile, slightly smaller tile, repeating
// — not a dramatic big/small split. Every card sits in the SAME uniform grid
// cell (no col/row spanning at all now), so there is no dense-packing, no
// cell four times the area of its neighbor, and nothing for the video inside
// to get cropped against: the "smaller" variant is just a bit of inset
// padding shrinking the square within its own cell, leaving a sliver of the
// ambient backdrop showing around it.
const PATTERN = [
  '', // normal
  'p-[5%]', // a little smaller
] as const

export function bentoSpan(index: number): string {
  return PATTERN[index % PATTERN.length]
}
