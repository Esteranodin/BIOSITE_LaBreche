/**
 * Décode les entités HTML en caractères normaux
 * @param text - Texte contenant des entités HTML
 * @returns Texte décodé
 */
export function decodeHtmlEntities(text: string): string {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}
