import { ExternalLink } from 'lucide-react';

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

const gradientVars = [
  'var(--gradient-1)',
  'var(--gradient-2)',
  'var(--gradient-3)',
  'var(--gradient-4)',
  'var(--gradient-5)',
  'var(--gradient-6)',
  'var(--gradient-7)',
  'var(--gradient-8)',
];

const PlaceholderWithTitle = ({ title, index }: { title: string; index: number }) => {
  const gradientVar = gradientVars[index % gradientVars.length];
  
  return (
    <div 
      className="w-full h-full flex flex-col items-center justify-center p-4"
      style={{ background: gradientVar }}
    >
      <div className="text-white text-center">
        <div className="text-4xl mb-3">📄</div>
        <p className="font-bold text-sm line-clamp-3 leading-tight">
          {title}
        </p>
      </div>
    </div>
  );
};

export function ArticlesGrid({ articles, loading, error, onRetry }: ArticlesGridProps) {
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block w-8 h-8 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Chargement des articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button 
          onClick={onRetry}
          className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800"
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
      {articles.map((article, idx) => (
        <a
          key={idx}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
        >
          {/* afficher l'image seulement si le parseur l'autorise (displayImage) */}
          {article.displayImage ? (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                // fallback si l'image ne charge pas
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <PlaceholderWithTitle title={article.title} index={idx} />
          )}

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-white font-semibold text-xs sm:text-sm line-clamp-2 mb-1">
                {article.title}
              </h3>
              <div className="flex items-center gap-1 text-white/80">
                <ExternalLink size={12} />
                <span className="text-xs">Lire l'article</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
