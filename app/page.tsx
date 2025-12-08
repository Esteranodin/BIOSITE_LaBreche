'use client'

import { Header } from './components/Header';
import { SocialLinks } from './components/SocialLinks';
import { MainLinks } from './components/MainLinks';
import { ArticlesGrid } from './components/ArticlesGrid';
import { Footer } from './components/Footer';
import { useFetchArticles } from './hooks/useFetchArticles';

export default function LaBreche() {
  const { articles, loading, error, fetchArticles } = useFetchArticles();

  return (
    <div className="min-h-screen bg-breche-cream">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <Header />
        <SocialLinks />
        <MainLinks />
        
        {/* Séparateur */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">Derniers articles</span>
          </div>
        </div>
        <ArticlesGrid articles={articles} loading={loading} error={error} onRetry={fetchArticles} />
        
        <div className="text-center mb-8">
          <a
            href="https://journal-labreche.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-6 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
          >
            Voir tous les articles →
          </a>
        </div>

        <Footer />
      </div>
    </div>
  );
}