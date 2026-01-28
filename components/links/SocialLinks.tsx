import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaXTwitter,
  FaLaptopCode 
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
    name: "X (ex-Twitter)",
    icon: FaXTwitter,
    url: "https://twitter.com/journallabreche",
    color: "var(--color-bleu)",
  },
  {
    name: "Nous contacter par email",
    icon: BiMailSend,
    url: "mailto:contact@labreche.info",
    color: "var(--color-framboise)",
  },
  {
    name: "Notre site",
    icon: FaLaptopCode ,
    url: "https://journal-labreche.fr/",
    color: "var(--color-vert)",
  },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 mb-8 wrap-under390">
      {socialLinks.map((social: SocialLink) => {
        const Icon = social.icon;
        return (
          <div key={social.name} className="relative group">
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border-3 transition-transform hover:scale-110 shadow-md"
              style={{ 
                backgroundColor:"var(--color-blanc-casse)",
                borderColor: social.color }}
              aria-label={social.name}
            >
              <Icon className="w-6 h-6 text-noir-bleute" />
            </a>
            <span
              className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-white text-xs text-noir-bleute opacity-0 group-hover:opacity-100 pointer-events-none shadow transition-opacity z-10"
              style={{ whiteSpace: "nowrap", top: "100%" }}
            >
              {social.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
