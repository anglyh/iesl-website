import type { Color, IconName } from "./icons";

export type CtaButton = {
  text: string;
  href: string;
}

export type SplitTitle = {
  static: string;
  highlight: string;
}

export type TextSegment = {
  text: string;
  highlight?: boolean;
}

export type Paragraph = {
  segments: TextSegment[];
  class?: string;
}

export type FeatureCard = {
  icon: IconName;
  title: string;
  description: string;
  color: Color;
}

export type Faq = {
  question: string;
  answer?: string;
}

export type ContactSection = {
  title: SplitTitle;
  description: string;
  closing: string;
  formTitle: SplitTitle;
  formDescription: string;
  countries: string[];
  submitText: string;
  privacyNote: string;
}

export type TestimonialCard = {
  quote: string;
  name: string;
  role: string;
  highlight?: string;
  avatar?: string;
}