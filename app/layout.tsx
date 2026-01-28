import type { Metadata } from "next";
import {Roboto_Flex} from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Journal La Brèche - Liens utiles",
  description: "SPA pour le journal La Brèche",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
