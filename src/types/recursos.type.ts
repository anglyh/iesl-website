import type { IconName } from "./icons";

export type ResourceCategory = 
  | "Productividad" 
  | "Liderazgo" 
  | "Desarrollo profesional" 
  | "Crecimiento profesional"
  | "Networking";

export type IncludedResource = {
  label: string;
  icon?: IconName;
  url?: string; // Optional download URL
};

export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  author: string;
  date: string;
  image: string; // e.g. "/images/placeholder.webp"
  contentHtml?: string;
  includedResource?: IncludedResource;
  relatedSlugs?: string[]; // Slugs of related resources to display at the bottom
};

// Types for the main /recursos page data
export type RecursosHeroSection = {
  badge: "Blog y recursos" | string;
  title: {
    static: string;
  };
  description: string;
};
