export type BackLink = { href: string; label: string; external: boolean };

export const BREVO_SESSION_KEY = "newsletter_from";

const REFERRER_MAP: Record<string, string> = { "journal-labreche.fr": "site" };

export const BACK_BUTTON_CLASS =
  "inline-flex items-center gap-2 py-3 px-6 rounded-full border-2 border-[var(--color-framboise)] hover:border-[var(--color-bleu)] transition-all font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-3";

export const BACK_LINKS: Record<string, BackLink> = {
  site: {
    href: "https://journal-labreche.fr",
    label: "Retour au site",
    external: true,
  },
};

export const DEFAULT_BACK_LINK: BackLink = {
  href: "/",
  label: "Retour",
  external: false,
};

export function getBackLink(from?: string | null): BackLink {
  if (from && BACK_LINKS[from]) return BACK_LINKS[from];
  return DEFAULT_BACK_LINK;
}

export function getFromByReferrer(): string | undefined {
  if (typeof document === "undefined") return undefined;
  try {
    const { hostname } = new URL(document.referrer);
    return REFERRER_MAP[hostname];
  } catch {
    return undefined;
  }
}
