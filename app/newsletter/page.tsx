import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export const metadata = {
  title: "Newsletter - Journal La Brèche",
  description:
    "Inscrivez-vous à la newsletter du Journal La Brèche pour recevoir nos dernières enquêtes et analyses.",
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <Header />

        <main>
          <section aria-labelledby="newsletter-title" className="text-center">
            <h1
              id="newsletter-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)]"
            >
              Newsletter de <em>La&nbsp;Brèche</em>
            </h1>
            <div className="h-1 w-3/4 min-[580px]:w-2/3 lg:w-3/4 mt-4 mx-auto bg-[var(--color-vert)] rounded-full" />

            <p className="text-lg text-[var(--color-text-secondary)] mt-6 mb-8">
              Abonnez-vous à notre <span className="font-bold">newsletter</span>{" "}
              pour ne rien manquer de nos actualités mais aussi pour créer et
              conserver un lien, un trait d'union,  <span className="font-bold">loin des GAFAM</span>.
            </p>

            <NewsletterForm />
          </section>

          <div className="text-center mt-12 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full border-2 border-[var(--color-framboise)] hover:border-[var(--color-bleu)] transition-all font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-3"
              aria-label="Retourner à la page d'accueil"
            >
              <HiArrowLeft className="w-5 h-5" aria-hidden="true" />
              Retour
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
