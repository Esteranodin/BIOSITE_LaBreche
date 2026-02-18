import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Journal La Brèche - Liens utiles",
  description:
    "Journal papier, libre et indépendant. Environnement, santé publique, technocritique. Abonnez-vous ou faites un don pour nous soutenir.",
  keywords: [
    "journal",
    "environnement",
    "santé publique",
    "technocritique",
    "enquêtes",
    "reportages",
    "indépendant",
  ],
  openGraph: {
    title: "La Brèche - Journal d'enquêtes, analyses et reportages",
    description: "Journal papier, libre et indépendant",
    url: "https://biosite-la-breche.vercel.app",
    siteName: "La Brèche",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Logo du journal La Brèche",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Brèche - Journal d'enquêtes, analyses et reportages",
    description: "Journal papier, libre et indépendant",
    images: ["/og-image.png"],
  },
  authors: [{ name: "La Brèche" }],
  metadataBase: new URL("https://biosite-la-breche.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${robotoFlex.variable} antialiased`}>{children}</body>
    </html>
  );
}
