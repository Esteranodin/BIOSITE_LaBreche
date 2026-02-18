import { HiExternalLink } from "react-icons/hi";

interface ArticleOverlayProps {
  title?: string;
  showTitle?: boolean;
  isActive?: boolean;
}

export function ArticleOverlay({
  title,
  showTitle = true,
  isActive = false,
}: ArticleOverlayProps) {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-transparent transition-opacity duration-500 flex flex-col justify-end ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
      style={{ willChange: "opacity" }}
    >
      <div className="p-3">
        {showTitle && title && (
          <h3
            className="font-bold line-clamp-2 mb-1"
            style={{ color: "var(--color-blanc-casse)" }}
          >
            {title}
          </h3>
        )}
        <div className="flex items-center gap-1 text-[var(--color-icon)]">
          <HiExternalLink size={12} />
          <span className="font-semibold text-xs lg:text-sm">
            Lire l'article
          </span>
        </div>
      </div>
    </div>
  );
}
