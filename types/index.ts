import { IconType } from "react-icons";

export interface Article {
  title: string;
  link: string;
  image?: string;
  category?: string;
  displayImage?: boolean;
}

export interface SocialLink {
  name: string;
  icon: IconType;
  url: string;
  color: string;
}

export interface MainLink {
  title: string;
  url: string;
  icon: IconType;
  color: string;
}
