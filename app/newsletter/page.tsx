import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { NewsletterForm } from "@/components/newsletter/NewsletterForm";
import { BackButton } from "@/components/newsletter/BackButton";

export const metadata = {
  title: "Newsletter - Journal La Brèche",
  description:
    "Inscrivez-vous à la newsletter du Journal La Brèche pour recevoir nos dernières enquêtes et analyses.",
};

export default async function NewsletterPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await searchParams;

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
              conserver un lien, un trait d'union,{" "}
              <span className="font-bold">loin des GAFAM</span>.
            </p>

            <NewsletterForm from={from} />
          </section>

          <div className="text-center mt-12 mb-8">
            <BackButton from={from} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
