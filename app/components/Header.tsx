export function Header() {
  return (
    <div className="text-center mb-8">
      <div className="mx-auto mb-4 bg-gray-100 flex items-center justify-center overflow-hidden">
        <picture>
          <source media="(max-width: 500px)" srcSet="LogoRS.png" />
          <source media="(min-width: 501px)" srcSet="LogoFondNoir.png" />
          <img 
            src="/images/desktop.jpg" 
            alt="La Brèche"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Journal libre d'enquêtes, analyses et reportages
      </h1>
      <p className="text-gray-600 text-lg mb-1">
        Environnement • Santé publique • Technocritique
      </p>
    </div>
  );
}
