import { HiExternalLink } from "react-icons/hi";

interface ArticlePlaceholderProps {
  title: string;
  borderColor: string;
  isActive?: boolean;
}

export function ArticlePlaceholder({
  title,
  borderColor,
  isActive = false,
}: ArticlePlaceholderProps) {
  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-30"
        style={{
          background: borderColor,
          opacity: 0.05,
          willChange: "opacity",
        }}
      />

      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{ background: borderColor, willChange: "opacity" }}
      />

      <h3
        className={`absolute inset-0 flex items-center justify-center font-bold text-center px-4 transition-opacity duration-400 text-[var(--color-text-primary)] z-40 ${
          isActive ? "opacity-0" : "group-hover:opacity-0"
        }`}
        style={{ willChange: "opacity" }}
      >
        {title}
      </h3>

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-transparent transition-opacity duration-400 flex flex-col justify-end ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{ willChange: "opacity" }}
      >
        <div className="p-5 mb-2">
          <div className="flex items-center gap-2 text-[var(--color-icon)]">
            <HiExternalLink size={15} aria-hidden="true" />
            <span className="font-semibold">Lire l'article</span>
          </div>
        </div>
      </div>
    </div>
  );
}
