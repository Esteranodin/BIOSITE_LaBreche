import { HiRefresh } from "react-icons/hi";
import { Article } from "@/types";
import { ArticleCard } from "./ArticleCard";

interface ArticlesGridProps {
  articles: Article[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

export function ArticlesGrid({
  articles,
  loading,
  error,
  onRetry,
}: ArticlesGridProps) {
  if (loading) {
    return (
      <div className="text-center py-12">
        <HiRefresh className="w-8 h-8 mx-auto animate-spin text-[var(--color-text-secondary)]" />
        <p className="mt-4 text-[var(--color-text-secondary)]">
          Chargement des articles...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="mb-4" style={{ color: "var(--color-framboise)" }}>
          {error}
        </p>
        <button
          onClick={onRetry}
          className="px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          style={{
            backgroundColor: "var(--color-noir-bleute)",
            color: "var(--color-blanc-casse)",
          }}
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
      {articles.map((article: Article, idx: number) => (
        <ArticleCard key={idx} article={article} idx={idx} />
      ))}
    </div>
  );
}
