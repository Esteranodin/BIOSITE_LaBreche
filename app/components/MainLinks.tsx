import { HiHome, HiHeart, HiMail } from "react-icons/hi";

const mainLinks = [
  {
    title: "S'abonner",
    url: "https://www.helloasso.com/associations/journal-la-breche/boutiques/formulaire-d-abonnement",
    icon: HiHome,
    color: "var(--color-bleu)",
  },
  {
    title: "Faire un don",
    url: "https://donorbox.org/la-breche",
    icon: HiHeart,
    color: "var(--color-framboise)",
  },
  {
    title: "Newsletter",
    url: "#",
    icon: HiMail,
    color: "var(--color-vert)",
  },
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
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            style={{
              backgroundColor: link.color,
              color: "var(--color-blanc-casse)",
            }}
          >
            <Icon className="w-6 h-6" />
            <span>{link.title}</span>
          </a>
        );
      })}
    </div>
  );
}
