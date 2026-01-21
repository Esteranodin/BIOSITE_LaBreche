"use client";

import { Header } from "./components/Header";
import { SocialLinks } from "./components/SocialLinks";
import { MainLinks } from "./components/MainLinks";
import { ArticlesGrid } from "./components/ArticlesGrid";
import { Footer } from "./components/Footer";
import { useFetchArticles } from "./hooks/useFetchArticles";
import { HiExternalLink } from 'react-icons/hi';


export default function LaBreche() {
  const { articles, loading, error, fetchArticles } = useFetchArticles();

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <Header />
        <SocialLinks />
        <MainLinks />

        {/* Séparateur */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--color-border)]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] font-medium">
              Derniers articles
            </span>
          </div>
        </div>

        <ArticlesGrid
          articles={articles}
          loading={loading}
          error={error}
          onRetry={fetchArticles}
        />

        <div className="text-center mb-8">
          <a
            href="https://journal-labreche.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full border-2 border-[var(--color-border)] hover:border-[var(--color-gris-moyen)] transition-all font-semibold"
          >
            Voir tous les articles <HiExternalLink className="w-4 h-4" />
          </a>
        </div>

        <Footer />
      </div>
    </div>
  );
}
