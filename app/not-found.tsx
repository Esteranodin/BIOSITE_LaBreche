import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { MainLinks } from "@/components/links/MainLinks";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:py-12">
        <Header />

        <main>
          <section aria-labelledby="not-found-title" className="text-center">
            <h1 id="not-found-title" className="text-9xl font-bold">
              404
            </h1>
            <div className="h-1 w-24 mt-4 mx-auto bg-gradient-to-r from-[var(--color-framboise)] to-[var(--color-bleu)] rounded-full" />

            <div className="space-y-3 my-4">
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">
                Page non trouvée
              </h2>
              <p className="text-lg font-medium text-[var(--color-text-secondary)]">
                La page que vous recherchez n'existe pas ou a été
                déplacée.
              </p>
            </div>

            <div className="my-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-full border-2 border-[var(--color-framboise)] hover:border-[var(--color-vert)] transition-all font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-3"
                aria-label="Retourner à la page d'accueil"
              >
                <HiArrowLeft className="w-5 h-5" aria-hidden="true" />
                Retour à l'accueil
              </Link>
            </div>

            <div className="pt-8 border-t border-[var(--color-border)]">
              <p className="text-lg font-semibold text-[var(--color-text-secondary)] mb-4">
                Vous cherchiez peut-être :
              </p>
              <nav
                aria-label="Navigation alternative"
                className="flex flex-wrap justify-center gap-5 my-4"
              >
                <MainLinks />
              </nav>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
