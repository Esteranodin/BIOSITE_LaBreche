import { Logo } from "./Logo";

export function Header() {
  return (
    <div className="text-center mb-8">
      <div className="mx-auto mb-4 flex items-center justify-center overflow-hidden">
        <a
          href="https://journal-labreche.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo className="w-full h-full object-cover" />
        </a>
      </div>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
        Journal libre d'enquêtes, analyses et reportages
      </h1>
      <h2 className="text-lg mb-1 text-[var(--color-text-secondary)]">
        Environnement • Santé publique • Technocritique
      </h2>
    </div>
  );
}
