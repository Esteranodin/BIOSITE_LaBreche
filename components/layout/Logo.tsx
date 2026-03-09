"use client";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <picture className="block w-full max-[500px]:w-49">
      <source srcSet="/LogoRS.png" media="(max-width: 500px)" />
      <source
        srcSet="/Logo-fd-blanc.png"
        media="(prefers-color-scheme: dark)"
      />
      <img
        src="/LogoFondNoir.png"
        alt="La Brèche"
        className={`w-full h-auto object-cover${className ? ` ${className}` : ""}`}
        loading="lazy"
      />
    </picture>
  );
}
