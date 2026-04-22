/**
 * courses.data.ts
 * ─────────────────────────────────────────────
 * Catálogo de cursos. Actualmente es un mock estático.
 * Cuando tengas la API lista, reemplaza este archivo por un fetch():
 *
 *   const res = await fetch("https://tu-api.com/courses");
 *   export const courses: Course[] = await res.json();
 *
 * El resto del proyecto no necesita cambios, solo este archivo.
 */

import type { Course, CourseCategory } from "../types/course.type";

export const courses: Course[] = [
  {
    slug: "people-analytics-power-bi",
    title: "People Analytics con Power BI",
    description: "Domina People Analytics con Power BI y DAX avanzado para analizar rotación, ausentismo y desempeño.",
    category: "Recursos Humanos",
    image: "/images/placeholder.webp",
    details: { totalHours: "48 horas", totalLessons: "24 clases", level: "Nivel avanzado" },
    rating: "4.9",
    reviews: 85,
    featured: true,
    priceBadge: "PRECIO ACCESIBLE",
    about: "Domina People Analytics con Power BI y DAX avanzado para analizar rotación, ausentismo y desempeño. Diseña dashboards estratégicos y toma decisiones basadas en datos en Recursos Humanos.",
    learnings: [
      "Dominar Power BI para consolidar datos de RRHH desde múltiples fuentes en un modelo unificado.",
      "Calcular KPIs clave de talento (rotación, ausentismo, headcount, costo por contratación) con DAX avanzado.",
      "Diseñar dashboards interactivos para análisis de plantilla, desempeño, diversidad y retención.",
      "Apoyar decisiones estratégicas mediante workforce planning y análisis de programas de talento.",
    ],
    modules: [
      { title: "Módulo 1: Introducción a Power BI", duration: "4 horas", classesCount: 2 },
      { title: "Módulo 2: Power BI Intermedio y Avanzado", duration: "8 horas", classesCount: 4 },
      { title: "Módulo 3: Power BI para People Analytics y RRHH", duration: "16 horas", classesCount: 8 },
      { title: "Módulo 4: Análisis Avanzado y Toma de Decisiones en People Analytics", duration: "20 horas", classesCount: 10 },
    ],
    instructor: {
      name: "",
      role: "",
      avatar: "https://i.pravatar.cc/150?u=placeholder",
      bio: ""
    },
    benefits: [
      "Acceso a plantillas de RRHH",
      "Casos de estudio reales",
      "Networking con profesionales del área"
    ],
    includes: [
      { label: "24 clases en vivo", icon: "tabler:device-desktop" },
      { label: "48 horas de contenido", icon: "mdi:clock-outline" },
      { label: "Certificado: People Analytics con Power BI", icon: "tabler:school" },
      { label: "Recursos descargables (Datasets)", icon: "tabler:file-invoice" }
    ],
    tools: ["Power BI", "DAX", "Power Query", "Excel", "SQL"],
    testimonials: []
  },
  {
    slug: "power-bi-mantenimiento",
    title: "Power BI aplicado al Mantenimiento",
    description: "Domina KPIs como MTBF, MTTR y OEE, crea dashboards de activos y optimiza decisiones con análisis predictivo.",
    category: "Mantenimiento",
    image: "/images/placeholder.webp",
    details: { totalHours: "48 horas", totalLessons: "24 clases", level: "Nivel avanzado" },
    rating: "4.9",
    reviews: 64,
    featured: true,
    priceBadge: "PRECIO ACCESIBLE",
    about: "Power BI para Mantenimiento: domina KPIs como MTBF, MTTR y OEE, crea dashboards de activos y órdenes de trabajo, y optimiza decisiones con análisis predictivo de confiabilidad.",
    learnings: [
      "Dominar Power BI para integrar y transformar datos de activos y órdenes de trabajo.",
      "Calcular KPIs clave de mantenimiento (MTBF, MTTR, OEE, disponibilidad) con medidas DAX avanzadas.",
      "Diseñar dashboards ejecutivos para monitoreo de equipos, backlog y cumplimiento.",
      "Optimizar decisiones de reemplazo y presupuesto mediante análisis de confiabilidad.",
    ],
    modules: [
      { title: "Módulo 1: Introducción a Power BI", duration: "4 horas", classesCount: 2 },
      { title: "Módulo 2: Power BI Intermedio y Avanzado", duration: "8 horas", classesCount: 4 },
      { title: "Módulo 3: Power BI para Mantenimiento y Gestión de Activos", duration: "16 horas", classesCount: 8 },
      { title: "Módulo 4: Análisis Predictivo y Toma de Decisiones en Mantenimiento", duration: "20 horas", classesCount: 10 },
    ],
    instructor: {
      name: "",
      role: "",
      avatar: "https://i.pravatar.cc/150?u=placeholder",
      bio: ""
    },
    benefits: [
      "Modelos de datos para activos",
      "Análisis de criticidad",
      "Soporte técnico en proyectos"
    ],
    includes: [
      { label: "24 clases en vivo", icon: "tabler:device-desktop" },
      { label: "48 horas de contenido", icon: "mdi:clock-outline" },
      { label: "Certificado: Power BI Avanzado aplicado al Mantenimiento", icon: "tabler:school" },
      { label: "Acceso a comunidad técnica", icon: "tabler:users" }
    ],
    tools: ["Power BI", "DAX", "Power Query", "Excel", "CMMS Data"],
    testimonials: []
  },
  {
    slug: "power-bi-ia-finanzas",
    title: "Power BI e Inteligencia Artificial para Finanzas",
    description: "Construye modelos financieros, calcula KPIs (EBITDA, ROE, WACC) y aplica IA para pronósticos de alto impacto.",
    category: "Finanzas",
    image: "/images/placeholder.webp",
    details: { totalHours: "48 horas", totalLessons: "24 clases", level: "Nivel avanzado" },
    rating: "5.0",
    reviews: 92,
    featured: true,
    priceBadge: "PRECIO ACCESIBLE",
    about: "Power BI para Finanzas: aprende a construir modelos financieros complejos, integrar IA generativa para análisis de riesgos y crear dashboards ejecutivos de alto impacto para la toma de decisiones.",
    learnings: [
      "Dominar Power BI para conectar, transformar y modelar datos financieros.",
      "Construir medidas DAX avanzadas para KPIs clave (EBITDA, ROE, WACC).",
      "Diseñar dashboards ejecutivos interactivos para reporting profesional.",
      "Aplicar IA generativa para automatizar pronósticos y análisis de riesgos.",
    ],
    modules: [
      { title: "Módulo 1: Introducción a Power BI", duration: "4 horas", classesCount: 2 },
      { title: "Módulo 2: Power BI Intermedio y Avanzado", duration: "8 horas", classesCount: 4 },
      { title: "Módulo 3: Power BI para Finanzas y Controlling", duration: "24 horas", classesCount: 12 },
      { title: "Módulo 4: Inteligencia Artificial aplicada a Finanzas", duration: "12 horas", classesCount: 6 },
    ],
    instructor: {
      name: "",
      role: "",
      avatar: "https://i.pravatar.cc/150?u=placeholder",
      bio: ""
    },
    benefits: [
      "Plantillas financieras DAX",
      "Técnicas de IA generativa",
      "Certificación especializada"
    ],
    includes: [
      { label: "24 clases en vivo", icon: "tabler:device-desktop" },
      { label: "48 horas de contenido", icon: "mdi:clock-outline" },
      { label: "Certificado: Power BI e Inteligencia Artificial para Finanzas", icon: "tabler:school" },
      { label: "Recursos de IA y Prompts", icon: "tabler:file-invoice" }
    ],
    tools: ["Power BI", "DAX", "AI Generativa", "Python (opcional)", "Excel"],
    testimonials: []
  }
];
/** Devuelve todas las categorías únicas presentes en los cursos */
export const getCategories = (): CourseCategory[] => {
  const all = courses.map((c) => c.category);
  return [...new Set(all)];
};

export const getFeaturedCourses = () => courses.filter((c) => c.featured);
export const getCourseBySlug = (slug: string) => courses.find((c) => c.slug === slug);
