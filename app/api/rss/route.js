import { formatText } from '../../../utils/textFormatting';
import { parseRSS } from '../../../utils/rssParser';

const RSS_FEED_URL = 'https://journal-labreche.fr/feed/';
const REVALIDATE_TIME = 60; 
const MAX_ARTICLES = 12;

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const xmlText = await fetchRSSFeed();
    const articles = parseRSS(xmlText);
    const formattedArticles = formatArticles(articles);
    const limitedArticles = formattedArticles.slice(0, MAX_ARTICLES);

    return Response.json({ articles: limitedArticles });

  } catch (error) {
    console.error('Erreur RSS:', error);
    return Response.json(
      { error: 'Impossible de charger les articles' },
      { status: 500 }
    );
  }
}

/**
 * Récupère le flux RSS depuis WordPress
 * @returns {Promise<string>} Contenu XML du flux
 */
async function fetchRSSFeed() {
  const response = await fetch(RSS_FEED_URL, {
    next: { revalidate: REVALIDATE_TIME }
  });

  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }

  return response.text();
}

/**
 * Applique formatage typographique
 * @param {Array} articles - Liste des articles
 * @returns {Array} Articles avec titres formatés
 */
function formatArticles(articles) {
  return articles.map(article => ({
    ...article,
    title: formatText(article.title)
  }));
}
