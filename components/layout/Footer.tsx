export default function Footer() {
  return (
    <footer className="text-center pt-8 border-t border-[var(--color-border)]">
      <p className="text-md font-semibold text-[var(--color-text-primary)] mt-2">
        Avec l'écran, on passe le temps - avec le papier, on prend le temps
      </p>
      <p className="text-sm text-[var(--color-text-secondary)] mt-2">
        © {new Date().getFullYear()}, La Brèche - Journal papier, libre et
        indépendant
      </p>
    </footer>
  );
}
