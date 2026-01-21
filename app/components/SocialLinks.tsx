import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/journallabreche",
    color: "var(--color-framboise)",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/journallabreche",
    color: "var(--color-bleu)",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/journal-la-br%C3%A8che/",
    color: "var(--color-vert)",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    url: "https://twitter.com/journallabreche",
    color: "var(--color-bleu)",
  },
  {
    name: "Email",
    icon: HiMail,
    url: "mailto:contact@labreche.info",
    color: "var(--color-framboise)",
  },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-transform hover:scale-110 shadow-md"
            style={{ backgroundColor: social.color }}
            aria-label={social.name}
          >
            <Icon className="w-6 h-6" color="var(--color-blanc-casse)" />
          </a>
        );
      })}
    </div>
  );
}
