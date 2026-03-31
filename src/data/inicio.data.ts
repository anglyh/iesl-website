import type { HomeHeroSection, AboutSection, CommunitySection, WellnessSection, TestimonialCard } from "../types/home.type";
import type { ContactSection, Faq } from "../types/shared.type";

import claseOnline from "../assets/images/inicio/clase-online.webp";
import manosEstrechadas from "../assets/images/inicio/manos-estrechadas.webp";
import trabajoEnEquipo from "../assets/images/inicio/trabajo-en-equipo.webp";
import beneficioHombreYoga from "../assets/images/inicio/beneficio-hombre-realizando-yoga.webp";
import beneficioMujerMeditando from "../assets/images/inicio/beneficio-mujer-meditando.webp";
import estudianteClaseOnline from "../assets/images/inicio/estudiante-clase-online.webp";
import mujerConUnCafe from "../assets/images/inicio/mujer-con-un-cafe.webp";
import beneficioMujerEnsalada from "../assets/images/inicio/beneficio-mujer-ensalada.webp";
import { ROUTES } from "../constants/routes";

// ─── HERO ───────────────────────────────────────────────────────────────────
export const hero: HomeHeroSection = {
  badge: "Educación y bienestar pensado para vos",
  badgeIcon: "mdi:heart"  ,
  title: {
    static: "Estudia, crece y",
    highlight: "conecta", 
    end: "con personas como vos.",
  },
  description:
    "Cursos accesibles, comunidad activa y desarrollo personal para estudiantes y jóvenes profesionales que quieren crecer sin sacrificar su bienestar.",
  cta: {
    primary: { text: "Ver cursos", href: ROUTES.COURSES },
    secondary: { text: "Conoce los beneficios", href: ROUTES.BENEFITS },
  },
  slides: [
    {
      image: trabajoEnEquipo,
      floatingBadges: [
        {
          icon: "mdi:clock-outline",
          title: "Horarios flexibles",
          description: "Estudiá cuando puedas",
          color: "primary",
        },
        {
          icon: "fluent:people-team-20-regular",
          title: "Networking",
          description: "Comunidades disponibles",
          color: "red",
        },
      ],
    },
    {
      image: estudianteClaseOnline, // Will be replaced by second image
      floatingBadges: [
        {
          icon: "lucide:circle-check-big",
          title: "Certificado oficial",
          description: "Al terminar el curso",
          color: "primary",
        },
        {
          icon: "ph:gift",
          title: "Beneficios",
          description: "Incluidos con tu curso",
          color: "red",
        },
      ],
    }
  ],
};

// ─── QUIÉNES SOMOS ──────────────────────────────────────────────────────────
export const about: AboutSection = {
  badge: "¿Quiénes somos?",
  title: "Educación que entiende su formación",
  paragraphs: [
    {
      segments: [
        { text: "Somos una formación que sabe lo que es " },
        { text: "querer crecer profesionalmente sin dejar atrás el bienestar personal.", highlight: true },
      ],
    },
    {
      segments: [
        { text: "Por eso creamos IESL Institute: cursos que no te vacían el bolsillo, " },
        { text: "con horarios flexibles que respetan su vida", highlight: true },
        { text: " y con beneficios que cuidan su bienestar." },
      ],
    },
  ],
  closing: "No somos una institución más. Somos tu aliado.",
  features: [
    {
      icon: "basil:book-outline",
      title: "Formación profesional",
      description:
        "Cursos accesibles enfocados en habilidades aplicables al mundo laboral real.",
      color: "primary",
    },
    {
      icon: "octicon:people-16",
      title: "Comunidad",
      description:
        "Networking genuino, grupos de estudiantes y encuentros que generan oportunidades.",
      color: "purple",
    },
    {
      icon: "boxicons:brain",
      title: "Crecimiento humano",
      description:
        "Talleres de inteligencia emocional, comunicación y liderazgo colaborativo.",
      color: "orange",
    },
    {
      icon: "solar:heart-outline",
      title: "Bienestar incluido",
      description:
        "Beneficios reales para cuidarte mientras crecés: yoga, mindfulness, descuentos y más.",
      color: "red",
    },
  ],
};

// ─── COMUNIDAD ──────────────────────────────────────────────────────────────
export const community: CommunitySection = {
  badge: "Comunidad IESL",
  title: { static: "No estudias solo.", highlight: "Creces en comunidad." },
  description:
    "Al unirse a IESL accedes a una comunidad real de estudiantes y profesionales que comparten objetivos, se apoyan y se conectan para generar oportunidades.",
  items: [
    { icon: "gravity-ui:comment", text: "Grupos de intercambio por curso" },
    { icon: "akar-icons:calendar",            text: "Workshops y eventos mensuales" },
    { icon: "ci:globe",                       text: "Networking online y offline" },
    { icon: "ph:user-check-bold",             text: "Talleres de desarrollo humano" },
  ],
  floatingBadges: [
    { icon: "fluent:people-team-20-regular", title: "+500",       description: "Conexiones activas",        color: "red", image: claseOnline },
    { icon: "ph:user-rectangle",             title: "+10 talleres", description: "De desarrollo humano",    color: "purple", image: manosEstrechadas },
  ],
  cta: { text: "Conocer la comunidad", href: ROUTES.COMMUNITY },
};

// ─── BIENESTAR ──────────────────────────────────────────────────────────────
export const wellness: WellnessSection = {
  badge: "Incluído con su curso",
  title: { static: "Más que un curso:", highlight: "una comunidad que te acompaña." },
  description:
    "Al inscribirte a cualquier curso IESL accedes automáticamente a beneficios pensados para cuidar tu bienestar mientras crecés profesionalmente.",
  slides: [
    [
      { icon: "streamline-ultimate:yoga-half-moon-pose-1", title: "Clases de yoga", description: "Clases en vivo para desconectar", color: "red", image: beneficioHombreYoga },
      { icon: "hugeicons:yoga-02", title: "Mindfulness", description: "Técnicas para manejar el estrés", color: "orange", image: beneficioMujerMeditando },
    ],
    [
      { icon: "fluent:briefcase-24-regular", title: "Dtos. en cafés", description: "Para estudiar donde quieras", color: "primary", image: mujerConUnCafe },
      { icon: "fluent:people-team-20-regular", title: "Nutrición", description: "Aprende a comer para estar mejor", color: "purple", image: beneficioMujerEnsalada },
    ]
  ],
  cta: { text: "Ver todos los beneficios", href: ROUTES.BENEFITS },
};

// ─── TESTIMONIOS ────────────────────────────────────────────────────────────
export const testimonials: TestimonialCard[] = [
  {
    quote:
      "IESL ha cambiado mi forma de ver la educación. El curso fue increíble, pero lo que más me sorprendió fue la comunidad. Conecté con gente que hoy son colegas y amigos.",
    highlight: "“La comunidad lo cambia todo”",
    name: "Juliana Gonzáles",
    role: "Estudiante de contabilidad",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Gracias al curso de UX conseguí mi primer trabajo. El precio era accesible, los horarios se adaptaron a mis tiempos y el contenido era exactamente lo que necesitaba.",
    highlight: "“Conseguí mi primer trabajo”",
    name: "Martín Gómez",
    role: "Diseñador UX, recién egresado",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "El taller de inteligencia emocional fue un antes y un después. No esperaba que una plataforma de cursos me ofreciera algo así. IESL es diferente, y se nota.",
    highlight: "“Un antes y un después”",
    name: "Carolina Ruíz",
    role: "Joven profesional de RRHH",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

// ─── FAQ ────────────────────────────────────────────────────────────────────
export const faqs: Faq[] = [
  {
    question: "¿Los cursos son 100% online?",
    answer: "..."
  },
  {
    question: "¿Incluyen certificado?",
    answer: "...",
  },
  {
    question: "¿Qué pasa si no puedo ver las clases en vivo?",
    answer: "...",
  },
  {
    question: "¿Los beneficios se activan automáticamente?",
    answer: "...",
  },
  {
    question: "¿Puedo hacer más de un curso a la vez?",
    answer: "...",
  },
];

// ─── FORMULARIO / CTA FINAL ─────────────────────────────────────────────────
export const contactForm: ContactSection = {
  title: { static: "Tu futuro no tiene que", highlight: "costarte el presente" },
  description: "Empieza hoy con cursos accesibles, comunidad activa y beneficios de bienestar. ",
  closing: "Crece siendo tú",
  formTitle: { static: "Déjanos tus datos y", highlight: "te contactamos" },
  formDescription:
    "Un asesor de IESL te va a ayudar a encontrar el curso ideal para ti, sin compromisos.",
  countries: ["Argentina", "México", "Colombia"],
  submitText: "Quiero agendar una llamada",
  privacyNote: "*Tus datos están protegidos según nuestra política de privacidad.",
};