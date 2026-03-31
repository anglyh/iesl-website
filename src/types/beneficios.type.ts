import type { IconName } from "./icons";
import type { CtaButton } from "./shared.type";

export type BeneficiosHeroSection = {
  badge: string;
  title: string;
  description: string;
  images: ImageMetadata[];
  cta: CtaButton;
}

export type BenefitsSection = {
  title: string;
  description: string;
  icon: IconName;
  cards: BenefitCard[];
}

export type BenefitCard = {
  title: string;
  image?: ImageMetadata;
  href?: string;
}

export type CtaSection = {
  title: string;
  description: string;
  cta: CtaButton;
}