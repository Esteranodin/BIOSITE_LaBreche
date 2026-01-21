import { useState, useEffect } from "react";

interface Article {
  title: string;
  link: string;
  image?: string;
  category?: string;
  displayImage?: boolean;
}

export function useFetchArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/rss");
      if (!response.ok) throw new Error("Erreur lors du chargement");
      const data = await response.json();
      setArticles(data.articles.slice(0, 12));
    } catch (err) {
      setError("Impossible de charger les articles");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return { articles, loading, error, fetchArticles };
}
