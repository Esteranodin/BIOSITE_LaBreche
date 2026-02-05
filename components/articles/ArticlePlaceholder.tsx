import { HiExternalLink } from "react-icons/hi";

interface ArticlePlaceholderProps {
  title: string;
  borderColor: string;
}

export function ArticlePlaceholder({
  title,
  borderColor,
}: ArticlePlaceholderProps) {
  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none bg-[var(--color-blanc-casse)] transition-opacity duration-500 opacity-100 group-hover:opacity-0 z-30"
        style={{ willChange: "opacity" }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: borderColor, willChange: "opacity" }}
      />
      <h3
        className="absolute inset-0 flex items-center justify-center font-bold text-center px-4 sm:text-sm md:text-base transition-opacity duration-700 group-hover:opacity-0 text-[var(--color-text-primary)] z-40"
        style={{ willChange: "opacity" }}
      >
        {title}
      </h3>
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end"
        style={{ willChange: "opacity" }}
      >
        <div className="p-5 mb-5">
          <div className="flex items-center gap-1 text-[var(--color-icon)]">
            <HiExternalLink size={12} />
            <span className="font-medium sm:text-xs md:text-base">
              Lire l'article
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
