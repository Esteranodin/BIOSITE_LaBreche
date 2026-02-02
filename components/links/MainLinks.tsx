import { MainLink } from "@/types";
import { PiHandHeartFill } from "react-icons/pi";
import { GiLetterBomb, GiNewspaper   } from "react-icons/gi";

const mainLinks: MainLink[] = [
  {
    title: "S'abonner",
    url: "https://www.helloasso.com/associations/journal-la-breche/boutiques/formulaire-d-abonnement",
    icon: GiNewspaper ,
    color: "var(--color-bleu)",
  },
  {
    title: "Faire un don",
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
    <div className="space-y-3 mb-10">
      {mainLinks.map((link, idx) => {
        const Icon = link.icon;
        return (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-full text-lg font-semibold tracking-wide transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-3"
            style={{
              backgroundColor: link.color,
              color: "var(--color-icon)",
            }}
          >
            <Icon className="w-6 h-6" />
            <h3>{link.title}</h3>
          </a>
        );
      })}
    </div>
  );
}
