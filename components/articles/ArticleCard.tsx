import { Article } from "@/types";
import { getArticleColor } from "../../utils/colorCard";
import { ArticleOverlay } from "./ArticleOverlay";
import { ArticlePlaceholder } from "./ArticlePlaceholder";
import { useState } from "react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

interface ArticleCardProps {
  article: Article;
  idx: number;
}

export function ArticleCard({ article, idx }: ArticleCardProps) {
  const hasImage = article.displayImage && article.image;
  const borderColor = getArticleColor(idx);
  const borderColorWithOpacity = `color-mix(in srgb, ${borderColor} 60%, transparent)`;
  const isTouchDevice = useIsTouchDevice();
  const [isActive, setIsActive] = useState(false);

  // Paliatif au hover sur mobile/tablette : on active au clic, et on désactive au mouse leave et scroll
  const handleClick = (e: React.MouseEvent) => {
    if (isTouchDevice && !isActive) {
      e.preventDefault(); 
      setIsActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) {
      setIsActive(false); // Reset au scroll
    }
  };

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
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
        handleMouseLeave();
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
          <ArticleOverlay title={article.title} showTitle={true} isActive={isActive} />
        </>
      ) : (
        <ArticlePlaceholder title={article.title} borderColor={borderColor} isActive={isActive} />
      )}
    </a>
  );
}
