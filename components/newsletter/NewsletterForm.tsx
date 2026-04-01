"use client";

import { BREVO_SESSION_KEY } from "@/utils/backLinks";

const BREVO_FORM_ACTION =
  "https://61344ea0.sibforms.com/serve/MUIFAHTXvDd60Gi-TXeZD-DNyPhPWZRwRG4G2gCPJ66Xf5MinKncRQxHzm5RDulvqtoZ8Va93-I4BLdIL73iUkEknU1in1n-eyuLI0maTATUj4hO-9yc6qvNyQdCU1FD3na4GX6LUaVHk5SouRQd9aKpnJq6wIbR66Dy0NB-zuDqbkK-C8Oe9ml7pTBJLRC5ntCeZt76vl4mjLzQ";

export function NewsletterForm({ from }: { from?: string }) {
  const handleSubmit = () => {
    sessionStorage.setItem(BREVO_SESSION_KEY, from ?? "");
  };

  return (
    <form
      action={BREVO_FORM_ACTION}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto"
    >
      <input
        type="text"
        name="email_address_check"
        value=""
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        readOnly
      />
      <input type="hidden" name="locale" value="fr" />
      <input type="hidden" name="html_type" value="simple" />

      <div>
        <label htmlFor="newsletter-email" className="sr-only">
          Renseignez votre adresse email
        </label>
        <input
          type="email"
          id="newsletter-email"
          name="EMAIL"
          required
          placeholder="exemple@mail.com"
          autoComplete="email"
          className="w-full px-4 py-3 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-gris-moyen)] focus:border-[var(--color-vert)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-3 transition-all"
        />
        <p className="text-xs md:text-sm text-[var(--color-text-secondary)] mt-2 ml-4">
          Veuillez renseigner votre adresse email pour vous inscrire.
        </p>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-full text-xl font-semibold tracking-wide transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-3 cursor-pointer"
        style={{
          backgroundColor: "var(--color-framboise)",
          color: "var(--color-icon)",
        }}
      >
        S&apos;inscrire
      </button>

      <p className="text-start text-xs md:text-sm pl-4 text-[var(--color-text-secondary)]">
        Votre adresse e-mail est uniquement utilisée pour vous envoyer notre
        newsletter. Vous pouvez vous désinscrire à tout moment à l&apos;aide du
        lien inclus dans chaque email.
      </p>
    </form>
  );
}