import { MainLink } from "@/types";
import { PiHandHeartFill } from "react-icons/pi";
import { GiLetterBomb, GiNewspaper } from "react-icons/gi";

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
  // {
  //   title: "Newsletter",
  //   url: "#",
  //   icon: GiLetterBomb ,
  //   color: "var(--color-vert)",
  // },
];

export function MainLinks() {
  return (
    <ul className="space-y-3 mb-10">
      {mainLinks.map((link, idx) => {
        const Icon = link.icon;
        return (
          <li key={idx}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.title} (ouvre un nouvel onglet)`}
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-full font-bold tracking-wide transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-3"
              style={{
                backgroundColor: link.color,
                color: "var(--color-icon)",
              }}
            >
              <Icon className="w-6 h-6" />
              <h3>{link.title}</h3>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
