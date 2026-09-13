// Three aspect ratios in rotation, not one uniform shape — this is what
// actually produces the staggered, non-symmetrical masonry look (a wide
// card and a tall card sitting side by side naturally throw their columns
// out of alignment; a grid of identical squares never can, no matter how
// the columns are counted). Length 7 against 4 columns means the same
// column doesn't land on the same ratio again for 28 cards.
const RATIOS = [
  '4 / 3', // normal
  '3 / 4', // tall
  '16 / 9', // wide
  '4 / 3',
  '16 / 9',
  '3 / 4',
  '4 / 3',
] as const

export function bentoSpan(index: number): string {
  return RATIOS[index % RATIOS.length]
}
