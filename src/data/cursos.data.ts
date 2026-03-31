import type { CursosHeroSection, CursosComparisonSection } from "../types/cursos.type";
import type { ContactSection, Faq } from "../types/shared.type";

export const hero: CursosHeroSection = {
  badge: "Todos los cursos incluyen +20 beneficios y acceso a la comunidad IESL",
  title: {
    static: "Cursos para impulsar tu",
    highlight: "crecimiento profesional",
  },
  description: "Programas accesibles diseñados para estudiantes y jóvenes profesionales.",
  socialProof: {
    students: {
      type: "students",
      value: "+15.000 estudiantes",
      avatars: true,
    },
    certificate: {
      type: "certificate",
      value: "Certificado oficial",
      icon: "certificate",
    },
  },
};

export const comparison: CursosComparisonSection = {
  title: "¿Por qué aprender con nosotros?",
  description: "No te vendemos promesas vacías. Te ofrecemos una educación pensada para personas reales, con vidas reales.",
  iesl: {
    label: "IESL Institute",
    items: [
      "Precios accesibles y justos",
      "Horarios flexibles",
      "Beneficios de bienestar",
      "Acompañamiento humano real",
      "Contenido práctico y actualizado",
    ],
  },
  others: {
    label: "Otras instituciones",
    items: [
      "Precios que te endeudan",
      "Horarios rígidos e imposibles",
      "Solo te venden el curso",
      "Tutores que no responden",
      "Contenido genérico y aburrido",
    ],
  },
};

export const faqs: Faq[] = [
  {
    question: "¿Los cursos son 100% online?",
    answer: "Sí, todos nuestros cursos son 100% online y puedes acceder desde cualquier dispositivo con conexión a internet.",
  },
  {
    question: "¿Incluyen certificado?",
    answer: "Sí, todos nuestros cursos incluyen certificado oficial al finalizar.",
  },
  {
    question: "¿Qué pasa si no puedo ver las clases en vivo?",
    answer: "No te preocupes. Todas las clases quedan grabadas y puedes verlas cuando quieras.",
  },
  {
    question: "¿Los beneficios se activan automáticamente?",
    answer: "Sí, al inscribirte accedes automáticamente a todos los beneficios.",
  },
  {
    question: "¿Puedo hacer más de un curso a la vez?",
    answer: "Sí, puedes inscribirte en todos los cursos que quieras.",
  },
];

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