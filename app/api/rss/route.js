export async function GET() {
  try {
    // Récupération du flux RSS de La Brèche
    const rssUrl = 'https://journal-labreche.fr/feed/';    
    const response = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LaBreche-LinkInBio/1.0)',
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const xmlText = await response.text();    
    // Parser le XML RSS
    const articles = parseRSS(xmlText);
    return Response.json({ 
      articles,
      count: articles.length,
      lastUpdated: new Date().toISOString()
    });

  } catch (error) {
    return Response.json(
      { error: 'Impossible de récupérer les articles', details: error.message },
      { status: 500 }
    );
  }
}

function parseRSS(xmlText) {
  const articles = [];
  
  // Regex pour extraire les items du flux RSS
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = [...xmlText.matchAll(itemRegex)];

  items.forEach(([, itemContent]) => {
    // Extraire le titre (peut être avec ou sans CDATA)
    let titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    if (!titleMatch) {
      titleMatch = itemContent.match(/<title>(.*?)<\/title>/);
    }
    const title = titleMatch ? titleMatch[1].trim() : '';

    // Extraire le lien (peut être avec ou sans CDATA)
    let linkMatch = itemContent.match(/<link><!\[CDATA\[(.*?)\]\]><\/link>/);
    if (!linkMatch) {
      linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
    }
    const link = linkMatch ? linkMatch[1].trim() : '';

    // Extraire la description (peut être avec ou sans CDATA)
    let descMatch = itemContent.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/);
    if (!descMatch) {
      descMatch = itemContent.match(/<description>(.*?)<\/description>/);
    }
    let description = descMatch ? descMatch[1].trim() : '';
    
    // Nettoyer la description (enlever les balises HTML)
    description = description.replace(/<[^>]*>/g, '').substring(0, 150);

    // Extraire l'image (plusieurs formats possibles dans WordPress)
    let image = '';
    
    const mediaMatch = itemContent.match(/<media:content[^>]*url="([^"]+)"/);
    if (mediaMatch) {
      image = mediaMatch[1];
    }
    
    if (!image) {
      const enclosureMatch = itemContent.match(/<enclosure[^>]*url="([^"]+)"[^>]*type="image/);
      if (enclosureMatch) {
        image = enclosureMatch[1];
      }
    }
    
    if (!image) {
      const contentMatch = itemContent.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
      if (contentMatch) {
        // Chercher la première image dans le contenu
        const imgMatch = contentMatch[1].match(/<img[^>]*src="([^"]+)"/);
        if (imgMatch) {
          image = imgMatch[1];
        }
        
        if (!image) {
          const pictureMatch = contentMatch[1].match(/<picture[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"/);
          if (pictureMatch) {
            image = pictureMatch[1];
          }
        }
      }
    }
    
    if (!image && descMatch) {
      const imgMatch = descMatch[1].match(/<img[^>]*src="([^"]+)"/);
      if (imgMatch) {
        image = imgMatch[1];
      }
    }

    // Extraire la catégorie (si présente)
    let category = '';
    let categoryMatch = itemContent.match(/<category><!\[CDATA\[(.*?)\]\]><\/category>/);
    if (!categoryMatch) {
      categoryMatch = itemContent.match(/<category>(.*?)<\/category>/);
    }
    if (categoryMatch) {
      category = categoryMatch[1].trim();
    }

    // Détecter si l'item est un podcast / audio
    const enclosureAudioMatch = itemContent.match(/<enclosure[^>]*url="([^"]+)"[^>]*type="audio\/[^\"]*"/i);
    const hasAudioTag = /<audio[\s\S]*?>[\s\S]*?<\/audio>/i.test(itemContent);
    const keywordText = `${title} ${category} ${link}`.toLowerCase();
    const isPodcast = Boolean(enclosureAudioMatch || hasAudioTag || /podcast|audio|episode|épisode|mp3/i.test(keywordText));

    // Whitelist pour forcer l'affichage d'images pour certains types (ex: interview)
    const IMAGE_WHITELIST = ['interview'];
    const isWhitelisted = IMAGE_WHITELIST.some(k => new RegExp(k, 'i').test(keywordText));

    const displayImage = Boolean((isPodcast || isWhitelisted) && image);
    // Ajouter l'article seulement s'il a au minimum un titre et un lien
    if (title && link) {
      // nettoyage code html dans le titre
      const decodedTitle = decodeHtmlEntities(title);

      articles.push({
        title: decodedTitle, 
        description,
        link,
        category,
        image: image || '', 
        isPodcast: Boolean(isPodcast),
        displayImage: Boolean(displayImage)
      });
    }
  });

  return articles;
}

// Ajouter cette nouvelle fonction
function decodeHtmlEntities(text) {
  const entities = {
    '&#8217;': "'",
    '&#8216;': "'",
    '&#8220;': '"',
    '&#8221;': '"',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
  };
  
  return text.replace(/&#?\w+;/g, (match) => entities[match] || match);
}

export const dynamic = 'force-dynamic'; // Désactive le cache pour toujours avoir les derniers articles
