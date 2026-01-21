import { HiExternalLink } from "react-icons/hi";

interface ArticlePlaceholderProps {
  title: string;
  borderColor: string;
}

export function ArticlePlaceholder({ title, borderColor }: ArticlePlaceholderProps) {
  return (
    <>
      {/* Titre centré */}
      <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
        <p
          className="font-bold text-sm line-clamp-3 leading-tight text-center relative z-10 transition-colors duration-300 group-hover:text-[var(--color-blanc-casse)]"
          style={{ color: "var(--color-noir-bleute)" }}
        >
          {title}
        </p>
      </div>
      
      {/* Fond coloré au hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: borderColor, zIndex: 1 }}
      />
      
      {/* Overlay "Lire l'article" */}
      <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div
          className="flex items-center gap-1 mb-3"
          style={{ color: "var(--color-blanc-casse)" }}
        >
          <HiExternalLink size={16} />
          <span className="text-xs font-semibold">Lire l'article</span>
        </div>
      </div>
    </>
  );
}