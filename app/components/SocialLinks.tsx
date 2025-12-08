import { Instagram, Facebook, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, url: "https://www.instagram.com/LaBrecheJournal", label: "Instagram", color: "hover:text-pink-600" },
  { icon: Facebook, url: "https://www.facebook.com/journallabreche", label: "Facebook", color: "hover:text-blue-600" },
  { icon: Linkedin, url: "https://www.linkedin.com/company/labrèche", label: "LinkedIn", color: "hover:text-blue-700" },
  { icon: Twitter, url: "#", label: "Twitter", color: "hover:text-sky-500" },
  { icon: Mail, url: "mailto:redaction.labreche@protonmail.com", label: "Email", color: "hover:text-gray-700" }
];

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {socialLinks.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 transition-all ${social.color}`}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
}
