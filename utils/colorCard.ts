export const ARTICLE_COLORS = [
  "var(--color-framboise)",
  "var(--color-vert)",
  "var(--color-bleu)",
];

/**
 * Algo Fisher-Yates
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
declare global {
  var currentColorGroup: string[] | undefined;
}

export function getArticleColor(index: number): string {
  const positionInGroup = index % 3;
  
  if (positionInGroup === 0) {
    globalThis.currentColorGroup = shuffle(ARTICLE_COLORS);
  }
  
  const currentGroup = globalThis.currentColorGroup || shuffle(ARTICLE_COLORS);
  return currentGroup[positionInGroup];
}

// globalThis fonctionne car getArticleColor appelé par ArticleCard (composant client) VS SSR.
// Si un jour besoinde l'appelé via un composant serveur, globalThis sera partagé entre toutes les requêtes → bug silencieux de couleurs.
globalThis.currentColorGroup = shuffle(ARTICLE_COLORS);