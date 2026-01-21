export async function GET() {
  try {
    const response = await fetch('https://journal-labreche.fr/feed/', {
      next: { revalidate: 60 } // Revalider le cache toutes les 60 secondes
    });
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du flux RSS');
    }
    
    const xmlText = await response.text();
    const articles = parseRSS(xmlText);
    
    return Response.json({ articles });
    
  } catch (error) {
    console.error('Erreur RSS:', error);
    return Response.json(
      { error: 'Impossible de charger les articles' }, 
      { status: 500 }
    );
  }
}

function parseRSS(xmlText) {
  // Regex pour extraire les items du flux RSS
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = [...xmlText.matchAll(itemRegex)];
  
  return items.map(([fullItem]) => {
    const title = extractTag(fullItem, 'title');
    const link = extractTag(fullItem, 'link');
    const category = extractTag(fullItem, 'category');
    const contentEncoded = extractTag(fullItem, 'content:encoded');
    
    // Extraction de l'image depuis content:encoded
    const imageMatch = contentEncoded.match(/<img[^>]+src="([^">]+)"/);
    const image = imageMatch ? imageMatch[1] : '';
    
    const displayImage = isRealImage(image);
    
    return { 
      title: decodeHtmlEntities(title), 
      link, 
      image, 
      category, 
      displayImage 
    };
  });
}

function extractTag(xmlString, tagName) {
  const regex = new RegExp(`<${tagName}(?:[^>]*)><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tagName}>|<${tagName}(?:[^>]*)>([\\s\\S]*?)<\\/${tagName}>`, 'i');
  const match = xmlString.match(regex);
  return match ? (match[1] || match[2] || '').trim() : '';
}

function isRealImage(imageUrl) {
  if (!imageUrl) return false;
  
  if (imageUrl.includes('s.w.org/images/core/emoji')) return false;
  if (imageUrl.includes('72x72') || imageUrl.includes('96x96')) return false;
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
  return imageExtensions.some(ext => imageUrl.toLowerCase().includes(ext));
}

function decodeHtmlEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—');
}

export const dynamic = 'force-dynamic'; // Désactive le cache pour toujours avoir les derniers articles
