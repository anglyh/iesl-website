import type {
  NosotrosHeroSection,
  ValuesSection,
  StorySection,
  TeamSection,
  NosotrosCTASection,
} from "../types/nosotros.type";

import nosotrosHero from "../assets/images/nosotros/nosotros-hero.webp";
import nuestraHistoria1 from "../assets/images/nosotros/nuestra-historia1.webp";
import nuestraHistoria2 from "../assets/images/nosotros/nuestra-historia2.webp";

export const hero: NosotrosHeroSection = {
  badge: "Nosotros",
  title: {
    static: "No somos una plataforma más.",
    highlight: "Somos tu aliado.",
  },
  image: nosotrosHero,
  description:
    "Creamos IESL porque creemos que la educación de calidad debe ser accesible para todos, sin sacrificar el bienestar personal.",
  cta: { text: "Conocer más", href: "#valores" },
};

export const values: ValuesSection = {
  cards: [
    {
      icon: "solar:flag-2-linear",
      title: "Nuestra misión",
      description:
        "Hacer que la educación profesional de calidad sea accesible para estudiantes y jóvenes profesionales, acompañándolos con una comunidad activa y beneficios de bienestar.",
      color: "primary",
    },
    {
      icon: "solar:eye-outline",
      title: "Nuestra visión",
      description:
        "Ser el ecosistema de referencia en Latinoamérica para el crecimiento profesional y humano de jóvenes que quieren desarrollarse sin perder su equilibrio personal.",
      color: "primary",
    },
    {
      icon: "mage:focus",
      title: "Nuestro enfoque",
      description:
        "Combinamos formación práctica, comunidad genuina y desarrollo humano. No vendemos solo cursos, construimos personas íntegras y profesionales completos.",
      color: "primary",
    },
  ],
};

export const story: StorySection = {
  badge: "Nuestra historia",
  title: {
    static: "Nacimos de entender",
    highlight: "tu realidad",
  },
  paragraphs: [
    "IESL nació de una pregunta simple: ¿por qué la educación de calidad es tan cara y tan rígida para quienes más la necesitan?",
    "Somos un equipo que vivió de cerca la experiencia de estudiar y trabajar al mismo tiempo, de llegar a fin de mes justo, de no poder pagar cursos caros con horarios imposibles.",
  ],
  closing: "Por eso creamos IESL: una plataforma que te acompaña como persona, y no solo como alumno.",
  images: [
    nuestraHistoria1,
    nuestraHistoria2,
  ],
};

export const team: TeamSection = {
  title: "Nuestro equipo",
  description:
    "Personas apasionadas por la educación, la tecnología y el bienestar.",
  members: [
    {
      name: "María González",
      role: "Directora Académica",
      description:
        "Especialista en gestión de calidad con 15 años de experiencia.",
    },
    {
      name: "Lucas Martínez",
      role: "Director de Comunidad",
      description:
        "Apasionado del networking y el valor de una comunidad activa.",
    },
    {
      name: "Sofía Ruiz",
      role: "Coordinadora de Bienestar",
      description:
        "Psicóloga y experta en equilibrio vida-trabajo-estudio.",
    },
    {
      name: "Andrés López",
      role: "Responsable Tecnológico",
      description:
        "Desarrolla las herramientas que acompañan tu experiencia de aprendizaje.",
    },
  ],
};

export const ctaSection: NosotrosCTASection = {
  title: {
    static: "Tu futuro no tiene que",
    highlight: "costarte el presente",
  },
  description:
    "Empezá hoy con cursos accesibles, comunidad activa y beneficios de bienestar.",
  closing: "Crecé siendo tú.",
  formTitle: {
    static: "Dejanos tus datos y",
    highlight: "te contactamos",
  },
  formDescription:
    "Un asesor de IESL va a ayudarte a encontrar el curso ideal para ti, sin compromiso.",
  countries: ["Argentina", "México", "Colombia", "Chile", "Perú", "España", "Otro"],
  submitText: "Quiero que me contacten",
  privacyNote:
    "Sin compromiso. Un asesor se pondrá en contacto contigo.",
};