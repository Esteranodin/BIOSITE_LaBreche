import { useState, useEffect } from "react";
import { Article } from "@/types";

interface UseFetchArticlesReturn {
  articles: Article[];
  loading: boolean;
  error: string | null;
  fetchArticles: () => Promise<void>;
}

export function useFetchArticles(): UseFetchArticlesReturn {
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
