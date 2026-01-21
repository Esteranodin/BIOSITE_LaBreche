export const ARTICLE_COLORS = [
  "var(--color-framboise)",
  "var(--color-vert)",
  "var(--color-bleu)",
];

export function shuffleArray<T>(array: T[], seed: number): T[] {
  let arr = [...array];
  let m = arr.length, i;
  let random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  while (m) {
    i = Math.floor(random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

export function getArticleColor(index: number, titleLength: number): string {
  const shuffled = shuffleArray(ARTICLE_COLORS, index + titleLength);
  return shuffled[0];
}