import type { IconName, Color } from "./icons";
import type { CtaButton, SplitTitle, FeatureCard } from "./shared.type";

export type ComunidadHeroSection = {
  badge: string;
  title: SplitTitle;
  description: string;
  cta: CtaButton;
  images: ImageMetadata[];
}

export type ConnectCard = {
  title: string;
  description: string;
  image: any;
}

export type ConnectSection = {
  badge: string;
  title: string;
  description: string;
  cards: ConnectCard[];
  cta: CtaButton;
}

export type GrowthItem = {
  icon: IconName;
  title: string;
  description: string;
}

export type GrowthSection = {
  badge: string;
  title: string;
  description: string;
  image: ImageMetadata;
  items: GrowthItem[];
}

export type SoftSkillsSection = {
  badge: string;
  title: SplitTitle;
  description: string;
  cards: SoftSkillCard[];
}

export type SoftSkillCard = {
  icon: IconName;
  tag: string;
  title: string;
  description: string;
  skills: string[];
}

export type EventItem = {
  title: string;
  description: string;
  date: Date;
}

export type EventsSection = {
  badge: string;
  title: string;
  description: string;
  note: string;
  events: EventItem[];
}

export type AccessStep = {
  step: number;
  title: string;
  description: string;
}

export type AccessSection = {
  title: string;
  steps: AccessStep[];
  cta: CtaButton;
}

export type ComunidadContactSection = {
  title: SplitTitle;
  description: string;
  formTitle: SplitTitle;
  formDescription: string;
  countries: string[];
  submitText: string;
  privacyNote: string;
}
