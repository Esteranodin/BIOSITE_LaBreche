export const ARTICLE_COLORS = [
  "var(--color-framboise)",
  "var(--color-vert)",
  "var(--color-bleu)",
];

/**
 * Algo Fisher-Yates avec vrai aléatoire
 */
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  let m = arr.length;
  
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  
  return arr;
}

/**
 * Attribue une couleur aléatoire, distribution équitable sur chaque groupe de 3 articles
 */
export function getArticleColor(index: number): string {
  const positionInGroup = index % 3;
  
  if (positionInGroup === 0) {
    (globalThis as any).currentColorGroup = shuffle(ARTICLE_COLORS);
  }
  
  const currentGroup = (globalThis as any).currentColorGroup || shuffle(ARTICLE_COLORS);
  return currentGroup[positionInGroup];
}