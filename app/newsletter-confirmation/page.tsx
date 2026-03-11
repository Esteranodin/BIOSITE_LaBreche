import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { HiArrowLeft, HiCheckCircle } from "react-icons/hi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function NewsletterConfirmation() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <Header />

        <main>
          <section aria-labelledby="confirmation-title" className="text-center">
            <HiCheckCircle
              className="w-16 h-16 mx-auto text-[var(--color-vert)]"
              aria-hidden="true"
            />
            <div className="h-1 w-24 mt-4 mx-auto bg-[var(--color-vert)] rounded-full" />

            <div className="space-y-3 my-6">
              <h1
                id="confirmation-title"
                className="text-3xl font-bold text-[var(--color-text-primary)]"
              >
                Inscription confirmée !
              </h1>
              <p className="text-lg font-medium text-[var(--color-text-secondary)]">
                Vous recevrez nos prochaines newsletters dès leur parution.
              </p>
            </div>

            <div className="my-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-full border-2 border-[var(--color-framboise)] hover:border-[var(--color-bleu)] transition-all font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-3"
                aria-label="Retourner à la page d'accueil"
              >
                <HiArrowLeft className="w-5 h-5" aria-hidden="true" />
                Retour à l&apos;accueil
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
