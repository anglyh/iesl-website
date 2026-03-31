import type { CtaButton, SplitTitle } from "./shared.type";

export type CursosHeroSection = {
  badge: string;
  title: SplitTitle;
  description: string;
  socialProof: {
    students: {
      type: "students";
      value: string;
      avatars: boolean;
    };
    certificate: {
      type: "certificate";
      value: string;
      icon: string;
    };
  };
};

export type ComparisonColumn = {
  label: string;
  items: string[];
};

export type CursosComparisonSection = {
  title: string;
  description: string;
  iesl: ComparisonColumn;
  others: ComparisonColumn;
};
