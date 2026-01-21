import { HiExternalLink } from "react-icons/hi";
import { Article } from "../types/Article";

const colors = [
  "var(--color-framboise)",
  "var(--color-vert)",
  "var(--color-bleu)",
];

function shuffleArray<T>(array: T[], seed: number): T[] {
  let arr = [...array];
  let m = arr.length, i;
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
  idx,
}: {
  title: string;
  idx: number;
}) => (
  <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
    <p
      className="font-bold text-sm line-clamp-3 leading-tight text-center relative z-10 transition-colors duration-300 group-hover:text-[var(--color-blanc-casse)]"
      style={{ color: "var(--color-noir-bleute)" }}
    >
      {title}
    </p>
  </div>
);

export function ArticleCard({
  article,
  idx,
}: {
  article: Article;
  idx: number;
}) {
  const hasImage = article.displayImage && article.image;
  const shuffledColors = shuffleArray(colors, idx + (article.title?.length || 0));
  const borderColor = shuffledColors[0];

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
          <PlaceholderWithTitle title={article.title} idx={idx} />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: borderColor,
              zIndex: 1,
            }}
          />
          <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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
}