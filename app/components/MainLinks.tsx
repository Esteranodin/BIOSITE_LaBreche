import { Podcast, Heart, Mail } from 'lucide-react';

const mainLinks = [
  {
    title: "💳 S'abonner",
    url: "https://www.helloasso.com/associations/journal-la-breche/boutiques/formulaire-d-abonnement",
    icon: Podcast,
    color: "bg-emerald-600 hover:bg-emerald-700"
  },
  {
    title: "❤️ Faire un don",
    url: "https://donorbox.org/la-breche",
    icon: Heart,
    color: "bg-red-600 hover:bg-red-700"
  },
  {
    title: "📧 Newsletter",
    url: "#",
    icon: Mail,
    color: "bg-blue-600 hover:bg-blue-700"
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
          className={`block w-full py-4 px-6 rounded-full text-white font-semibold text-center transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02] ${link.color}`}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}
