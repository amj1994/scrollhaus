// A repeating rhythm of tile sizes for the library grid, applied only from
// the lg breakpoint up (grid-cols-4/5 with grid-flow-dense). Below that the
// grid stays a plain 2-column list — mixing 2-wide spans into a 2-column
// mobile grid would just make every "wide" card full-width, which is not a
// size variant, it is the whole row.
const PATTERN = [
  'lg:col-span-2 lg:row-span-2', // feature
  '',
  '',
  'lg:row-span-2', // tall
  '',
  'lg:col-span-2', // wide
  '',
  '',
] as const

export function bentoSpan(index: number): string {
  return PATTERN[index % PATTERN.length]
}
