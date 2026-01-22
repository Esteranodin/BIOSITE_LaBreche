'use client'

import { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détecte le mode sombre
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(darkModeQuery.matches);

    const mobileQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mobileQuery.matches);

    const darkHandler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    const mobileHandler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    darkModeQuery.addEventListener("change", darkHandler);
    mobileQuery.addEventListener("change", mobileHandler);

    return () => {
      darkModeQuery.removeEventListener("change", darkHandler);
      mobileQuery.removeEventListener("change", mobileHandler);
    };
  }, []);

  const getLogoSrc = () => {
    if (isMobile) return "/LogoRS.png"; 
    return isDark ? "Logo-fd-blanc.png" : "/LogoFondNoir.png"; 
  };

  return (
    <img
      src={getLogoSrc()}
      alt="La Brèche"
      className={className}
    />
  );
}