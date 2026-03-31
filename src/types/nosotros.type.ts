import type { IconName, Color } from "./icons";
import type { CtaButton, SplitTitle } from "./shared.type";

export type NosotrosHeroSection = {
  badge: string;
  title: SplitTitle;
  image: ImageMetadata;
  description: string;
  cta: CtaButton;
}

export type ValueCard = {
  icon: IconName;
  title: string;
  description: string;
  color: Color;
}

export type ValuesSection = {
  cards: ValueCard[];
}

export type StorySection = {
  badge: string;
  title: SplitTitle;
  paragraphs: string[];
  closing: string;
  images: ImageMetadata[];
}

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image?: any;
}

export type TeamSection = {
  title: string;
  description: string;
  members: TeamMember[];
}

export type NosotrosCTASection = {
  title: SplitTitle;
  description: string;
  closing: string;
  formTitle: SplitTitle;
  formDescription: string;
  countries: string[];
  submitText: string;
  privacyNote: string;
}