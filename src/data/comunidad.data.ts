import type {
  ComunidadHeroSection,
  ConnectSection,
  GrowthSection,
  SoftSkillsSection,
  EventsSection,
  AccessSection,
  ComunidadContactSection,
} from "../types/comunidad.type";
import claseVirtualHero from "../assets/images/comunidad/clase-virtual.webp"
import comunidadEquipoHero from "../assets/images/comunidad/comunidad-equipo.webp"
import comunidadWhatsapp from "../assets/images/comunidad/comunidad-whatsapp.webp"
import comunidadLinkedin from "../assets/images/comunidad/comunidad-linkedin.webp"
import crecimientoColectivo from "../assets/images/comunidad/crecimiento-colectivo.webp"

import { ROUTES } from "../constants/routes";

// ─── HERO ───────────────────────────────────────────────────────────────────
export const hero: ComunidadHeroSection = {
  badge: "Comunidad IESL",
  title: {
    static: "No estudias solo.",
    highlight: "Creces en comunidad.",
  },
  description:
    "Al unirte a IESL formás parte de una red viva de estudiantes y jóvenes profesionales que se apoyan, colaboran y crecen juntos. La comunidad es el corazón de todo lo que hacemos.",
  cta: { text: "Unirme a la comunidad", href: "#contacto" },
  images: [claseVirtualHero, comunidadEquipoHero  ],
};

// ─── CONECTA ────────────────────────────────────────────────────────────────
export const connect: ConnectSection = {
  badge: "Canales IESL",
  title: "Conecta con la comunidad IESL",
  description:
    "Formá parte de nuestros canales exclusivos donde la comunidad comparte recursos, oportunidades y se apoya día a día.",
  cards: [
    {
      title: "Comunidad WhatsApp",
      description:
        "Un espacio diario donde los estudiantes comparten recursos, hacen preguntas y se apoyan entre sí en tiempo real.",
      image: comunidadWhatsapp
    },
    {
      title: "Comunidad LinkedIn",
      description:
        "Conectate con egresados, ampliá tu red profesional y acceda a oportunidades laborales dentro de la comunidad IESL.",
      image: comunidadLinkedin
    },
  ],
  cta: { text: "Quiero unirme", href: "#contacto" },
};

// ─── CRECIMIENTO ────────────────────────────────────────────────────────────
export const growth: GrowthSection = {
  badge: "Crecimiento",
  title: "Tu crecimiento es colectivo",
  description:
    "La comunidad IESL está diseñada para que no solo aprendas contenido, sino que construyas relaciones y oportunidades reales.",
  image: crecimientoColectivo,
  items: [
    {
      icon: "ci:globe",
      title: "Networking con otros estudiantes",
      description: "Conectate con estudiantes y egresados de toda la región. La comunidad IESL es tu red profesional desde el día uno.",
    },
    {
      icon: "mdi:handshake-outline",
      title: "Comunidad",
      description: "Cada curso tiene su propio espacio de intercambio donde puedes hacer preguntas, compartir recursos y debatir con compañeros.",
    },
    {
      icon: "mdi:trending-up",
      title: "Desarrollo humano",
      description: "Tutores y mentores con experiencia real te acompañan durante todo tu proceso de aprendizaje, sin que te sientas solo.",
    },
    {
      icon: "mdi:handshake-outline",
      title: "Bienestar incluido",
      description: "Proyectos grupales, co-creación de contenido y oportunidades laborales surgen naturalmente dentro de la comunidad.",
    },
  ],
};

// ─── HABILIDADES BLANDAS ────────────────────────────────────────────────────
export const softSkills: SoftSkillsSection = {
  badge: "Talleres de desarrollo",
  title: {
    static: "Habilidades que el trabajo",
    highlight: "no te puede enseñar",
  },
  description:
    "Incluidos para todos los estudiantes activos. Talleres mensuales en vivo para desarrollarte más allá de lo técnico.",
  cards: [
    {
      icon: "boxicons:thunder",
      tag: "Desarrollo Personal",
      title: "Inteligencia emocional",
      description:
        "Aprende a gestionar tus emociones, mejorar tus relaciones y tomar mejores decisiones bajo presión. Una habilidad clave en cualquier entorno profesional.",
      skills: ["Autoconocimiento profundo", "Gestión del estrés", "Empatía aplicadad"],
    },
    {
      icon: "mdi:forum-outline",
      tag: "Habilidades Blandas",
      title: "Comunicación efectiva",
      description:
        "Desarrolla habilidades para presentar ideas, negociar y expresarte con claridad en entornos profesionales. Comunicar bien es liderar bien.",
      skills: ["Presentaciones impactantes", "Escucha activa", "Negociación y persuasión"],
    },
    {
      icon: "solar:star-outline",
      tag: "Liderazgo",
      title: "Liderazgo colaborativo",
      description:
        "Construye equipos de alto rendimiento, impulsa proyectos y lidera desde la empatía y la confianza. El liderazgo moderno es humano.",
      skills: ["Gestión de equipos", "Toma de decisiones", "Cultura de confianza"]
    },
  ],
};

// ─── EVENTOS ────────────────────────────────────────────────────────────────
export const events: EventsSection = {
  badge: "Actividades",
  title: "Eventos y actividades de la comunidad",
  description:
    "Cada mes organizamos workshops en vivo, encuentros de networking y eventos exclusivos para estudiantes y egresados. Todo incluido en tu inscripción.",
  note: "Todos los eventos son opcionales y quedan grabados para verlos cuando quieras.",
  events: [
    {
      title: "Taller de inteligencia emocional",
      description: "Online · En vivo",
      date: new Date("2026-03-24"),
    },
    {
      title: "Networking: Jóvenes Profesionales",
      description: "Online · En vivo",
      date: new Date("2026-03-24"),
    },
    {
      title: "Workshop: Comunicación Efectiva",
      description: "Online · En vivo",
      date: new Date("2026-03-24"),
    },
    {
      title: "Encuentro de Egresados IESL",
      description: "Online · En vivo",
      date: new Date("2026-03-24"),
    },
  ],
};

// ─── PASOS DE ACCESO ────────────────────────────────────────────────────────
export const access: AccessSection = {
  title: "Accede a la comunidad con cualquier curso",
  steps: [
    {
      step: 1,
      title: "Elige un curso",
      description: "Explora nuestra oferta y encuentra el curso que mejor se adapta a tus objetivos y disponibilidad.",
    },
    {
      step: 2,
      title: "Te inscribes",
      description: "Proceso simple y accesible. Pagas una sola vez y accedes a todo: curso + comunidad + beneficios.",
    },
    {
      step: 3,
      title: "Accedes a la comunidad",
      description: "Desde el primer día tienes acceso a los grupos, eventos, talleres y la red completa de IESL.",
    },
  ],
  cta: { text: "Ver cursos disponibles", href: ROUTES.COURSES },
};

// ─── FORMULARIO / CTA FINAL ────────────────────────────────────────────────
export const contactForm: ComunidadContactSection = {
  title: {
    static: "Sumate a la",
    highlight: "comunidad IESL",
  },
  description:
    "Inscribiéndote en cualquier curso accedes automáticamente a la comunidad, workshops y eventos.",
  formTitle: {
    static: "Déjanos tus datos y",
    highlight: "te contactamos",
  },
  formDescription:
    "Un asesor de IESL te va a ayudar a encontrar el curso ideal para ti, sin compromisos.",
  countries: ["Argentina", "México", "Colombia"],
  submitText: "Quiero que me contacten",
  privacyNote: "Sin compromiso. Un asesor se pondrá en contacto contigo.",
};
