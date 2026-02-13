/**
 * Parse un flux RSS et extrait les articles
 * @param {string} xmlText - Le contenu XML du flux RSS
 * @returns {Array} Liste des articles formatés
 */
export function parseRSS(xmlText) {
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = [...xmlText.matchAll(itemRegex)];

  return items.map(([fullItem]) => {
    const title = extractTag(fullItem, 'title');
    const link = extractTag(fullItem, 'link');
    const category = extractTag(fullItem, 'category');
    const contentEncoded = extractTag(fullItem, 'content:encoded');

    const image = extractImage(contentEncoded);
    const displayImage = isRealImage(image);

    return {
      title,
      link,
      image,
      category,
      displayImage
    };
  });
}

/**
 * Extrait la valeur d'un tag XML (avec ou sans CDATA)
 * @param {string} xmlString - Fragment XML
 * @param {string} tagName - Nom du tag à extraire
 * @returns {string} Valeur extraite ou chaîne vide
 */
function extractTag(xmlString, tagName) {
  const regex = new RegExp(
    `<${tagName}(?:[^>]*)><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tagName}>|<${tagName}(?:[^>]*)>([\\s\\S]*?)<\\/${tagName}>`,
    'i'
  );
  const match = xmlString.match(regex);
  return match ? (match[1] || match[2] || '').trim() : '';
}

/**
 * Extrait l'URL de la première image du contenu encodé
 * @param {string} contentEncoded - Contenu HTML encodé
 * @returns {string} URL de l'image ou chaîne vide
 */
function extractImage(contentEncoded) {
  const imageMatch = contentEncoded.match(/<img[^>]+src="([^">]+)"/);
  return imageMatch ? imageMatch[1] : '';
}

/**
 * Vérifie si l'URL est une vraie image (pas emoji, pas avatar)
 * @param {string} imageUrl - URL à vérifier
 * @returns {boolean} true si c'est une vraie image
 */
function isRealImage(imageUrl) {
  if (!imageUrl) return false;

  // Exclusions
  if (imageUrl.includes('s.w.org/images/core/emoji')) return false;
  if (imageUrl.includes('72x72') || imageUrl.includes('96x96')) return false;

  // Extensions valides
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
  return imageExtensions.some(ext => imageUrl.toLowerCase().includes(ext));
}