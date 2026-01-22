import { Article } from "@/types";
import { getArticleColor } from "../../utils/colorUtils";
import { ArticleOverlay } from "./ArticleOverlay";
import { ArticlePlaceholder } from "./ArticlePlaceholder";

interface ArticleCardProps {
  article: Article;
  idx: number;
}

export function ArticleCard({ article, idx }: ArticleCardProps) {
  const hasImage = article.displayImage && article.image;
  const borderColor = getArticleColor(idx, article.title?.length || 0);

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
      style={{
        border: `2px solid ${borderColor}`,
        background: "none",
      }}
    >
      {hasImage ? (
        <>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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