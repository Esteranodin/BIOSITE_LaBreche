"use client";

import Header from "../components/layout/Header";
import { SocialLinks } from "../components/links/SocialLinks";
import { MainLinks } from "../components/links/MainLinks";
import { ArticlesGrid } from "../components/articles/ArticlesGrid";
import Footer from "../components/layout/Footer";
import { useFetchArticles } from "../hooks/useFetchArticles";
import { HiExternalLink } from "react-icons/hi";

export default function LaBreche() {
  const { articles, loading, error, fetchArticles } = useFetchArticles();

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <Header />
        <nav aria-label="Réseaux sociaux">
          <SocialLinks />
        </nav>
        <nav aria-label="Accès au site principal">
          <MainLinks />
        </nav>

        <main>
          {/* Statuts pour liseuses et lecteurs d'écrans */}
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          >
            {loading && <span>Chargement des articles en cours…</span>}
            {error && (
              <span>
                Erreur lors du chargement des articles. Veuillez réessayer.
              </span>
            )}
            {!loading && !error && articles.length > 0 && (
              <span>{articles.length} articles chargés avec succès.</span>
            )}
          </div>

          <section aria-labelledby="last-articles-title">
            {/* Séparateur */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--color-border)]"></div>
              </div>
              <div className="relative flex justify-center">
                <h2
                  id="last-articles-title"
                  className="px-4 bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] tracking-wide font-bold"
                >
                  Derniers articles
                </h2>
              </div>
            </div>

            <ArticlesGrid
              articles={articles}
              loading={loading}
              error={error}
              onRetry={fetchArticles}
            />
          </section>

          <section
            aria-labelledby="all-articles-link"
            className="text-center mb-8"
          >
            <h2 id="all-articles-link" className="sr-only">
              Consulter tous les articles
            </h2>
            <a
              href="https://journal-labreche.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full border-2 border-[var(--color-gris-moyen)] hover:border-[var(--color-border)] transition-all font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-3"
              aria-label="Consulter tous les articles sur journal-labreche.fr (ouvre un nouvel onglet)"
            >
              Voir tous les articles{" "}
              <HiExternalLink className="w-5 h-5" aria-hidden="true" />
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
