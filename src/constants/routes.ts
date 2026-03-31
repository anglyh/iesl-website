export const ROUTES = {
  HOME: "/",
  COURSES: "/cursos",
  ABOUT: "/nosotros",
  COMMUNITY: "/comunidad",
  BENEFITS: "/beneficios",
  RESOURCES: "/recursos",
  CURSO_DETALLE: (slug: string) => `/cursos/${slug}`,
} as const;