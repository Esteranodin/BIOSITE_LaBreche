import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaLaptopCode,
} from "react-icons/fa6";
import { BiMailSend } from "react-icons/bi";
import { SocialLink } from "@/types";

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/labrechejournal/",
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
    url: "https://www.linkedin.com/company/labr%C3%A8che/",
    color: "var(--color-vert)",
  },
  {
    name: "Nous contacter par email",
    icon: BiMailSend,
    url: "mailto:redaction.labreche@protonmail.com",
    color: "var(--color-framboise)",
  },
  {
    name: "Notre site",
    icon: FaLaptopCode,
    url: "https://journal-labreche.fr/",
    color: "var(--color-vert)",
  },
];

export function SocialLinks() {
  return (
    <ul className="flex justify-center gap-4 mb-8 wrap-under390">
      {socialLinks.map((social: SocialLink) => {
        const Icon = social.icon;
        return (
          <li key={social.name} className="relative group">
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border-3 transition-transform hover:scale-110 shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-3"
              style={{
                backgroundColor: "var(--color-blanc-casse)",
                borderColor: social.color,
              }}
              aria-label={`Visiter notre ${social.name} (ouvre un nouvel onglet)`}
            >
              <Icon className="w-6 h-6 text-noir-bleute" />
            </a>
            <h4
              className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 pointer-events-none shadow transition-opacity z-10"
              style={{ whiteSpace: "nowrap", top: "100%" }}
            >
              {social.name}
            </h4>
          </li>
        );
      })}
    </ul>
  );
}
