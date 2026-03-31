import type { BeneficiosHeroSection, BenefitsSection, CtaSection } from "../types/beneficios.type";

import clasesYoga from "../assets/images/beneficios/clases-yoga.webp";
import stretching from "../assets/images/beneficios/stretching.webp";
import mindfulness from "../assets/images/beneficios/mindfulness.webp";
import asesoriaPsicologica from "../assets/images/beneficios/asesoria-psicologica.webp";
import nutricion from "../assets/images/beneficios/nutricion.webp";

import cafeterias from "../assets/images/beneficios/cafeterias.webp";
import entrenamiento from "../assets/images/beneficios/entrenamiento.webp";
import restaurantes from "../assets/images/beneficios/restaurantes.webp";
import coworking from "../assets/images/beneficios/coworking.webp";
import softwareEducativo from "../assets/images/beneficios/software-educativo.webp";

import asincronico from "../assets/images/beneficios/asincronico.webp";
import actividadesRecreativas from "../assets/images/beneficios/actividades-recreativas.webp";
import encuentrosComunidad from "../assets/images/beneficios/encuentros-comunidad.webp";
import sinHorarios from "../assets/images/beneficios/sin-horarios.webp";
import accesoDeporvida from "../assets/images/beneficios/acceso-deporvida.webp";

import beneficiosHeroHombre from "../assets/images/beneficios/beneficios-hero-hombre.webp";
import beneficiosHeroMujer from "../assets/images/beneficios/beneficios-hero-mujer.webp";

import { ROUTES } from "../constants/routes";


export const hero: BeneficiosHeroSection = {
  badge: "Incluídos con tu curso",
  title: "Estudiar también es cuidar tu bienestar",
  description:
    "En IESL creemos que el crecimiento profesional también requiere equilibrio personal. Por eso, al inscribirte en un curso accedes a beneficios diseñados para acompañarte durante tu proceso de aprendizaje.",
  images: [beneficiosHeroHombre, beneficiosHeroMujer],
  cta: { text: "Ver cursos", href: ROUTES.COURSES },
};

export const wellnessBenefits: BenefitsSection = {
  title: "Bienestar & Salud",
  description: "Cuida tu cuerpo y tu mente",
  icon: "iconoir:yoga",
  cards: [
    {
      title: "Clases de yoga",
      image: clasesYoga,
      href: "",
    },
    {
      title: "Stretching",
      image: stretching,
      href: "",
    },
    {
      title: "Mindfulness",
      image: mindfulness,
      href: "",
    },
    {
      title: "Asesoría psicológica",
      image: asesoriaPsicologica,
      href: "",
    },
    {
      title: "Nutrición",
      image: nutricion,
      href: "",
    },
  ],
};

export const discountBenefits: BenefitsSection = {
  title: "Descuentos exclusivos",
  description: "Cuida tu bolsillo",
  icon: "mynaui:coffee",
  cards: [
    {
      title: "Cafeterías",
      image: cafeterias,
      href: "",
    },
    {
      title: "Apps de entrenamiento",
      image: entrenamiento,
      href: "",
    },
    {
      title: "Gastronomía",
      image: restaurantes,
      href: "",
    },
    {
      title: "Espacios de coworking",
      image: coworking,
      href: "",
    },
    {
      title: "Software Educativo",
      image: softwareEducativo,
      href: "",
    },
  ],
};

export const balanceBenefits: BenefitsSection = {
  title: "Balance vida-estudio",
  description: "Cuida tu tiempo",
  icon: "mdi:clock-outline",
  cards: [
    {
      title: "100% asincrónico",
      image: asincronico,
      href: "",
    },
    {
      title: "Actividades recreativas",
      image: actividadesRecreativas,
      href: "",
    },
    {
      title: "Encuentros de comunidad",
      image: encuentrosComunidad,
      href: "",
    },
    {
      title: "Sin horarios fijos",
      image: sinHorarios,
      href: "",
    },
    {
      title: "Acceso de por vida",
      image: accesoDeporvida,
      href: "",
    },
  ],
};

export const ctaSection: CtaSection = {
  title: "¿Listo para acceder a todos los beneficios?",
  description: "Elegí cualquier curso y empezá a disfrutar de bienestar, descuentos y flexibilidad desde el día uno.",
  cta: { text: "Ver cursos disponibles", href: "/cursos" },
};
