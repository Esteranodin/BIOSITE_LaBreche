import { useState, useEffect } from 'react';

interface Article {
  title: string;
  link: string;
  image?: string;
}

export function useFetchArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/rss');
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des articles');
      }
      
      const data = await response.json();
      // Affiche tous les articles disponibles (jusqu'à 12)
      setArticles(data.articles.slice(0, 12));
      setLoading(false);
    } catch (err) {
      console.error('Erreur:', err);
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
      setError(errorMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return { articles, loading, error, fetchArticles };
}
