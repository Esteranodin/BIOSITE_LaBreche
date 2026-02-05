import { Article } from "@/types";
import { getArticleColor } from "../../utils/colorRandom";
import { ArticleOverlay } from "./ArticleOverlay";
import { ArticlePlaceholder } from "./ArticlePlaceholder";

interface ArticleCardProps {
  article: Article;
  idx: number;
}

export function ArticleCard({ article, idx }: ArticleCardProps) {
  const hasImage = article.displayImage && article.image;
  const borderColor = getArticleColor(idx, article.title?.length || 0);
  const borderColorWithOpacity = `color-mix(in srgb, ${borderColor} 60%, transparent)`;

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.03] h-full w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-3"
      style={{
        border: `3px solid ${borderColorWithOpacity}`,
        background: "none",
        transition: "border-color 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "transparent";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = borderColorWithOpacity;
      }}
    >
      {hasImage ? (
        <>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ willChange: "transform, opacity" }}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <ArticleOverlay title={article.title} showTitle={true} />
        </>
      ) : (
        <ArticlePlaceholder title={article.title} borderColor={borderColor} />
      )}
    </a>
  );
}
