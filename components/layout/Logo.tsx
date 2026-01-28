"use client";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <picture>
      <source srcSet="/LogoRS.png" media="(max-width: 500px)" />
      <source
        srcSet="/Logo-fd-blanc.png"
        media="(prefers-color-scheme: dark)"
      />
      <img
        src="/LogoFondNoir.png"
        alt="La Brèche"
        className={className}
        loading="lazy"
      />
    </picture>
  );
}
