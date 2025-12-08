import { Podcast, Heart, Mail, HandCoins, MailIcon, MailQuestion, MailboxIcon, MailPlus, MailPlusIcon, HousePlus } from 'lucide-react';

const mainLinks = [
  {
    title: "S'abonner",
    url: "https://www.helloasso.com/associations/journal-la-breche/boutiques/formulaire-d-abonnement",
    icon: HousePlus,
    color: "bg-breche-blue"
  },
  {
    title: "Faire un don",
    url: "https://donorbox.org/la-breche",
    icon: HandCoins,
    color: "bg-breche-rose"
  },
  {
    title: "Newsletter",
    url: "#",
    icon: MailPlus,
    color: "bg-breche-green"
  }
];

export function MainLinks() {
  return (
    <div className="space-y-3 mb-10">
      {mainLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block py-4 px-6 rounded-full text-white font-semibold text-center transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02] ${link.color}`}
        >
          <link.icon className="inline mr-3" size={25} />
          {link.title}
        </a>
      ))}
    </div>
  );
}
