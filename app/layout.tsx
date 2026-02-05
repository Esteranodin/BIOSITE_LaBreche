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
    title: "La Brèche - Journal libre d'enquêtes, analyses et reportages",
    description: "Journal papier, libre et indépendant",
    url: "https://journal-labreche.fr",
    siteName: "La Brèche",
    locale: "fr_FR",
    type: "website",
     images: [
      {
        url: "https://journal-labreche.fr/og-image.png",
        height: 630,
        alt: "Logo La Brèche - Journal libre",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.variable} antialiased`}>{children}</body>
    </html>
  );
}
