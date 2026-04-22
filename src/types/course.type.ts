import type { TestimonialCard } from "./shared.type";

export type CourseLevel = "Nivel inicial" | "Nivel intermedio" | "Nivel avanzado";

export type CourseCategory = "Tecnología" | "Marketing" | "Idiomas" | "Diseño" | "Data" | "Productividad" | "Negocios" | "Habilidades blandas" | "Finanzas" | "Creatividad" | "Recursos Humanos" | "Mantenimiento";

export type CourseModule = {
  title: string;
  duration: string;
  classesCount: number;
}

export type CourseInstructor = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export type Course = {
  slug: string;
  title: string;
  description: string;
  category: CourseCategory;
  image: string;
  details: {
    totalHours: string;
    totalLessons: string;
    level: CourseLevel;
  };
  rating: string;
  reviews?: number;
  featured: boolean;
  
  // Detalles adicionales de la página del curso (/cursos/[slug])
  about?: string;
  learnings?: string[];
  modules?: CourseModule[];
  instructor?: CourseInstructor;
  benefits?: string[]; // Los beneficios como "Clases de yoga" en la cajita naranja
  includes?: { label: string; icon: string }[]; // Objeto con icon y texto para la lista
  tools?: string[];
  priceBadge?: string;
  testimonials?: TestimonialCard[];
}

