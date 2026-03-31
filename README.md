# IESL Institute

Bienvenido al repositorio del proyecto web de **IESL Institute**, una academia y plataforma educativa enfocada en el crecimiento profesional de excelencia y en el bienestar humano integral.

## 🚀 Tecnologías Principales

- **Framework Core:** [Astro](https://astro.build/) - Para máxima velocidad y generación de HTML estático.
- **Estilos:** Tailwind CSS v4 - Sistema de diseño a través de clases de utilidad sobre `global.css`.
- **Librería de Iconos:** `astro-icon` - Utiliza íconos universales de manera ultra-rápida.
- **Interactividad:** Vanilla JS nativo de Astro junto con utilidades de interacción (HTML5 Dialogs) y Swiper.js para transiciones complejas.

## 📁 Arquitectura del Proyecto

Para mantener un proyecto escalable, escalable y muy limpio, operamos bajo un estricto principio de separación de responsabilidades. La lógica, los estilos, las vistas y **los datos** viven rígidamente separados.

```text
/
├── public/               # Archivos fijos en la raíz del servidor (favicon.svg, robots.txt)
├── src/
│   ├── assets/           # Imágenes locales (idealmente .webp) para ser optimizadas en build
│   ├── components/       # Todas las piezas del rompecabezas visual
│   │   ├── layout/       # Piezas base (Header, Footer, Navegación Principal)
│   │   ├── ui/           # Colección de diseño abstracta (Buttons, Cards, Labels genéricas)
│   │   └── [pagina]/     # Componentes atados a solo una página (hero-section, faq-section)
│   ├── constants/        # Constantes globales reutilizables (Rutas, SEO, Números de contacto)
│   ├── data/             # 🗃️ Información estática: Contiene textos, beneficios y copys de todo el sitio web.
│   ├── layouts/          # Punto de entrada HTML y etiquetas universales de SEO
│   ├── pages/            # Sistema central de enrutamiento basado puramente en estructura de carpetas
│   ├── styles/           # Variables maestras, directivas Tailwind y tokens (colores, fuentes)
│   └── types/            # 🧠 Tipado estricto de TypeScript: Controla qué requiere el catálogo y los componentes.
└── astro.config.mjs
```

## 📝 Modificar los Datos del Sitio Web

Este proyecto tiene su **base de contenido (Textos, Testimonios, Cursos) completamente apartada de las etiquetas HTML/Astro**. 

Si necesitas:
1. Cambiar los textos del inicio.
2. Añadir un nuevo beneficio.
3. Actualizar la lista de testimonios o cursos.

**Debes ir directamente a la carpeta `src/data/`**. Dentro hallarás archivos TypeScript (por ejemplo `inicio.data.ts` o `cursos.data.ts`) que exportan estructuras de datos súper amigables para leer y modificar. Lo que edites aquí mutará automáticamente en toda la interfaz gráfica de la web gracias a las definiciones en `src/types/`.

## 🧞 Comandos Esenciales

Para levantar la web en tu propia computadora:

| Comando             | Acción                                                                               |
| :------------------ | :----------------------------------------------------------------------------------- |
| `npm install`       | Descarga e instala los módulos necesarios (`node_modules`).                          |
| `npm run dev`           | Arranca el servidor local de prueba (`localhost:4321`) con recarga súper rápida instantánea. |
| `npm run build`         | Compila todo a HTML/CSS estático ultrarrápido listo para producción (carpeta `/dist`).|
| `npm run preview`       | Previsualiza la carpeta `/dist` localmente antes de subirla al hosting nube.         |
