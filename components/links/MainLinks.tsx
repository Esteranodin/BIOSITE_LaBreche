import { MainLink } from "@/types";
import { PiHandHeartFill } from "react-icons/pi";
import { GiLetterBomb, GiNewspaper } from "react-icons/gi";
import Link from "next/link";

const mainLinks: MainLink[] = [
  {
    title: "S'abonner",
    url: "https://www.helloasso.com/associations/journal-la-breche/boutiques/formulaire-d-abonnement",
    icon: GiNewspaper,
    color: "var(--color-bleu)",
  },
  {
    title: "Nous soutenir",
    url: "https://donorbox.org/la-breche",
    icon: PiHandHeartFill,
    color: "var(--color-framboise)",
  },
  {
    title: "Newsletter",
    url: "/newsletter",
    icon: GiLetterBomb,
    color: "var(--color-vert)",
  },
];

export function MainLinks() {
  return (
    <ul className="space-y-3 mb-10">
      {mainLinks.map((link) => {
        const Icon = link.icon;
        const isExternal = link.url.startsWith("http");
        const className =
          "flex items-center justify-center gap-3 py-4 px-6 rounded-full font-bold tracking-wide transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-3";
        const style = {
          backgroundColor: link.color,
          color: "var(--color-icon)",
        };
        const content = (
          <>
            <Icon className="w-6 h-6" />
            <span>{link.title}</span>
          </>
        );
        return (
          <li key={link.title}>
            {isExternal ? (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.title} (ouvre un nouvel onglet)`}
                className={className}
                style={style}
              >
                {content}
              </a>
            ) : (
              <Link
                href={link.url}
                aria-label={link.title}
                className={className}
                style={style}
              >
                {content}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
