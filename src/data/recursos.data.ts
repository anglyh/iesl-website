import type { Resource, RecursosHeroSection } from "../types/recursos.type";

// ─── PÁGINA PRINCIPAL HERO ──────────────────────────────────────────────────
export const recursosHero: RecursosHeroSection = {
  badge: "Blog y recursos",
  title: {
    static: "Ideas y herramientas para crear profesionalmente",
  },
  description: "Artículos, guías y recursos descargables sobre crecimiento profesional, liderazgo y desarrollo personal.",
};

// ─── DATOS DE ARTÍCULOS ─────────────────────────────────────────────────────
const baseContent = `
<p class="font-inter text-gray-700 leading-relaxed mb-6">Emprender un nuevo camino sea lo que sea que decidas hacer, es difícil. Si a tu camino le sumas distracciones o si sientes que estás trabajando duro pero no avanzas hacia tus metas, puede que este artículo sea lo que necesitas leer hoy.</p>
<p class="font-inter text-gray-700 leading-relaxed mb-6">Muchas personas dudan, postergan su trabajo, aprenden nuevas habilidades o cambian de ruta pensando que las excusas los salvarán, pero realmente eso te detendrá de lograr el éxito profesional.</p>
<p class="font-inter text-gray-700 leading-relaxed mb-6">Una metodología que ayuda a resolver este problema es el sistema OKR (Objetivos y Resultados Clave), utilizado por Google y otras grandes empresas tecnológicas para mantener el enfoque en objetivos puntuales garantizando un alto nivel de resultados.</p>
<h3 class="font-poppins font-bold text-gray-900 text-2xl mb-4 mt-8">¿Qué son los OKRs?</h3>
<p class="font-inter text-gray-700 leading-relaxed mb-6">O = Objetivo (Objetive en inglés) y KR = Key Results, es decir, Objetivos y Resultados Clave.</p>
<p class="font-inter text-gray-700 leading-relaxed mb-6">Se trata de una metodología de planificación de objetivos orientada a resultados mensurables que te permite medir de forma sistemática y transparente tus progesos.</p>
<ul class="list-disc pl-6 space-y-3 font-inter text-gray-700 mb-8">
  <li><strong>Objetivo (Objetive):</strong> Es la meta que quieres alcanzar. Debe ser clara, inspiradora y fácil de entender.</li>
  <li><strong>Resultados Clave (Key Results):</strong> Son métricas específicas que te indicarán si has alcanzado o no el cumplimiento de tu objetivo.</li>
</ul>
<p class="font-inter text-gray-700 leading-relaxed">Con herramientas sencillas y enfocándote en lo verdaderamente importante (Deep Work), tus días dejarán de parecer llenos de humo laboral.</p>
`;

export const resources: Resource[] = [
  {
    slug: "como-usar-okrs",
    title: "Cómo usar OKRs para alcanzar tus metas profesionales en 90 días",
    description: "Los OKR (Objectives and Key Results) son el framework de gestión de objetivos usado por Google, Netflix y las empresas más innovadoras del mundo...",
    category: "Productividad",
    author: "Por IESL",
    date: "12 de Junio de 2024",
    image: "/images/placeholder.webp",
    contentHtml: baseContent,
    includedResource: {
      label: "Plantilla OKR lista para usar",
      icon: "material-symbols:download-rounded",
      url: "#"
    },
    relatedSlugs: ["liderazgo-colaborativo", "inteligencia-emocional-trabajo", "productividad-profunda"]
  },
  {
    slug: "liderazgo-colaborativo",
    title: "Liderazgo colaborativo: cómo construir equipos de alto rendimiento",
    description: "El liderazgo moderno no se trata de tener todas las respuestas. Se trata de crear las condiciones para que tu equipo brille. Estas son las claves...",
    category: "Liderazgo",
    author: "Por IESL",
    date: "05 de Mayo de 2024",
    image: "/images/placeholder.webp",
    contentHtml: baseContent.replace("OKRs", "Liderazgo Colaborativo"),
    includedResource: {
      label: "Guía de feedback efectivo",
      icon: "material-symbols:download-rounded",
      url: "#"
    },
    relatedSlugs: ["como-usar-okrs", "inteligencia-emocional-trabajo"]
  },
  {
    slug: "inteligencia-emocional-trabajo",
    title: "Inteligencia emocional en el trabajo: la habilidad que diferencia a los mejores",
    description: "Investigaciones de Harvard demuestran que el 90% de los profesionales con mejor desempeño tienen alta inteligencia emocional. Descubre cómo...",
    category: "Desarrollo profesional",
    author: "Por IESL",
    date: "28 de Abril de 2024",
    image: "/images/placeholder.webp",
    contentHtml: baseContent,
    relatedSlugs: ["liderazgo-colaborativo", "como-armar-portfolio"]
  },
  {
    slug: "productividad-profunda",
    title: "Productividad profunda: técnicas para trabajar menos y lograr más",
    description: "Cal Newport popularizó el concepto de 'deep work'. Aplicarlo correctamente puede triplicar tu productividad y darte más tiempo libre...",
    category: "Productividad",
    author: "Por IESL",
    date: "15 de Abril de 2024",
    image: "/images/placeholder.webp",
    contentHtml: baseContent,
    includedResource: {
      label: "Planificador semanal de deep work",
      icon: "material-symbols:download-rounded",
      url: "#"
    },
    relatedSlugs: ["como-usar-okrs", "como-armar-portfolio"]
  },
  {
    slug: "como-armar-portfolio",
    title: "Cómo armar tu portfolio profesional y conseguir tu primer cliente",
    description: "Tener habilidades es necesario, pero saber mostrarlas es lo que hace la diferencia. Este guía paso a paso te ayuda a crear un portfolio que...",
    category: "Crecimiento profesional",
    author: "Por IESL",
    date: "02 de Marzo de 2024",
    image: "/images/placeholder.webp",
    contentHtml: baseContent,
    includedResource: {
      label: "Checklist de portfolio profesional",
      icon: "material-symbols:download-rounded",
      url: "#"
    },
    relatedSlugs: ["inteligencia-emocional-trabajo", "productividad-profunda"]
  }
];

export const getResourceBySlug = (slug: string): Resource | undefined => {
  return resources.find(r => r.slug === slug);
}

export const getRelatedResources = (resource: Resource): Resource[] => {
  if (!resource.relatedSlugs || resource.relatedSlugs.length === 0) return [];
  return resources.filter(r => resource.relatedSlugs?.includes(r.slug));
}
