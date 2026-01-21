import { HiRefresh, HiExternalLink } from "react-icons/hi";

interface Article {
  title: string;
  link: string;
  image?: string;
  category?: string;
  isPodcast?: boolean;
  displayImage?: boolean;
}

interface ArticlesGridProps {
  articles: Article[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

const colors = [
  "var(--color-framboise)",
  "var(--color-vert)",
  "var(--color-bleu)",
];

function shuffleArray<T>(array: T[], seed: number): T[] {
  let arr = [...array];
  let m = arr.length,
    i;
  let random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  while (m) {
    i = Math.floor(random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

const PlaceholderWithTitle = ({
  title,
  index,
}: {
  title: string;
  index: number;
}) => {
  const shuffledColors = shuffleArray(colors, index + title.length);
  const bgColor = shuffledColors[0];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          backgroundColor: bgColor,
          filter: "brightness(0.8) saturate(1.2)",
        }}
      />
      <div
        className="text-center relative z-10"
        style={{ color: "var(--color-blanc-casse)" }}
      >
        <p className="font-bold text-sm line-clamp-3 leading-tight">{title}</p>
      </div>
    </div>
  );
};

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
      {articles.map((article, idx) => {
        const hasImage = article.displayImage && article.image;
        return (
          <a
            key={idx}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
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
                {/* Overlay avec titre si image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                  <div className="p-3">
                    <h3
                      className="font-semibold text-xs sm:text-sm line-clamp-2 mb-1"
                      style={{ color: "var(--color-blanc-casse)" }}
                    >
                      {article.title}
                    </h3>
                    <div
                      className="flex items-center gap-1"
                      style={{ color: "rgba(255, 248, 248, 0.8)" }}
                    >
                      <HiExternalLink size={12} />
                      <span className="text-xs">Lire l'article</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <PlaceholderWithTitle title={article.title} index={idx} />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="flex items-center gap-1 mb-3"
                    style={{ color: "var(--color-blanc-casse)" }}
                  >
                    <HiExternalLink size={16} />
                    <span className="text-xs font-semibold">
                      Lire l'article
                    </span>
                  </div>
                </div>
              </>
            )}
          </a>
        );
      })}
    </div>
  );
}
