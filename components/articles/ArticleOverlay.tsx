import { HiExternalLink } from "react-icons/hi";

interface ArticleOverlayProps {
  title?: string;
  showTitle?: boolean;
}

export function ArticleOverlay({ title, showTitle = true }: ArticleOverlayProps) {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
      <div className="p-3">
        {showTitle && title && (
          <h3
            className="font-semibold text-xs sm:text-sm line-clamp-2 mb-1"
            style={{ color: "var(--color-blanc-casse)" }}
          >
            {title}
          </h3>
        )}
        <div
          className="flex items-center gap-1"
          style={{ color: "rgba(255, 248, 248, 0.8)" }}
        >
          <HiExternalLink size={12} />
          <span className="text-xs">Lire l'article</span>
        </div>
      </div>
    </div>
  );
}