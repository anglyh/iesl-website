# IESL Institute — Guía de Proyecto

## Stack Tecnológico

- **Framework:** Astro
- **Estilos:** Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline`)
- **Iconos:** `astro-icon` (Iconify) — tipos centralizados en `src/types/icons.ts`
- **Fuentes:** Poppins (headings) + Inter (body) via `astro:assets` Font
- **Imágenes:** `<SmartImage />` wrapper sobre `astro:assets` Image, con fallback a `placeholder.webp`
- **Carrusel:** Swiper.js (CSS importado en frontmatter, JS en `<script>` del cliente)

---

## Estructura de Carpetas

```
src/
├── assets/images/          # Imágenes locales optimizadas por Astro
├── components/
│   ├── layout/             # Header.astro, Footer.astro
│   ├── ui/                 # Componentes reutilizables (Button, Section, SmartImage, Glow, IconBubble, Cards...)
│   ├── home/               # Secciones exclusivas de la página Home
│   ├── beneficios/         # Secciones exclusivas de la página Beneficios
│   └── comunidad/          # Secciones exclusivas de la página Comunidad
├── data/                   # Datos estáticos tipados por página (home.data.ts, beneficios.data.ts, etc.)
├── layouts/                # Layout.astro (Layout principal: Header + <slot /> + Footer)
├── pages/                  # Rutas del sitio (index.astro, beneficios.astro, comunidad.astro, cursos.astro...)
├── styles/                 # global.css (Tailwind config, tokens de diseño, utilidades)
└── types/                  # Tipos TypeScript por página + compartidos (shared.type.ts, icons.ts)
```

---

## Convenciones

### 1. Organización por Página

Cada página tiene su propio ecosistema aislado con una correspondencia 1:1:

| Página              | Componentes              | Datos                  | Tipos                   |
|---------------------|--------------------------|------------------------|-------------------------|
| `index.astro`       | `components/home/`       | `data/home.data.ts`    | `types/home.type.ts`    |
| `beneficios.astro`  | `components/beneficios/` | `data/beneficios.data.ts` | `types/beneficios.type.ts` |
| `comunidad.astro`   | `components/comunidad/`  | `data/comunidad.data.ts`  | `types/comunidad.type.ts`  |

### 2. Componentes de Sección

- Cada sección de una página es un componente independiente (`HeroSection.astro`, `CTASection.astro`, etc.)
- Todos usan el wrapper `<Section>` de `ui/` para padding y container consistentes.
- La página los ensambla como bloques:

```astro
<Layout>
  <HeroSection />
  <BenefitsSection data={wellnessBenefits} iconColor="orange" />
  <CTASection />
</Layout>
```

### 3. Datos → Props → Componentes

- Los **datos** viven en `src/data/[pagina].data.ts` como objetos exportados con tipos estrictos.
- Los **tipos** se definen en `src/types/[pagina].type.ts`, reutilizando tipos compartidos de `shared.type.ts`.
- Los componentes de sección reciben datos via `Props` tipadas.
- Los datos **nunca** se definen inline en los componentes: siempre se importan desde `data/`.

```ts
// data/beneficios.data.ts
export const wellnessBenefits: BenefitsSection = { ... };

// types/beneficios.type.ts
export type BenefitsSection = { title: string; icon: IconName; cards: BenefitCard[] };
```

### 4. Componentes UI (`components/ui/`)

Primitivos reutilizables que NO pertenecen a ninguna página específica:

| Componente         | Propósito                                              |
|--------------------|--------------------------------------------------------|
| `Section.astro`    | Wrapper con padding vertical y container centrado      |
| `Button.astro`     | Botón/enlace con variantes primary/secondary/outline   |
| `SmartImage.astro` | Wrapper de `<Image />` con fallback a placeholder.webp |
| `Glow.astro`       | Efecto decorativo de blur/glow posicionable            |
| `IconBubble.astro` | Icono dentro de burbuja circular con color temático    |
| `ImageCard.astro`  | Tarjeta de imagen con overlay oscuro y título          |
| `*Card.astro`      | Tarjetas específicas (Course, Testimonial, Connect...) |

### 5. Estilos y Design Tokens

Definidos en `src/styles/global.css`:

- **Colores:** `--color-primary: #2AB3BA`, `--color-secondary: #d62942`
- **Color palette (tipos):** `"primary" | "purple" | "orange" | "red"` (ver `types/icons.ts` → `Color`)
- **Transiciones:** Clase utilitaria `.transition-global` (`all 300ms ease`)
- **Tarjetas:** Clase componente `.card-base` (borde primary, hover shadow)
- **Tipografía:** Headings con `clamp()` responsive, `font-size` base `18px`

### 6. Iconos

- Se usa `astro-icon` con Iconify.
- Todos los nombres de iconos válidos están en `src/types/icons.ts` como union type `IconName`.
- Al añadir un icono nuevo, **siempre** agregarlo al type `IconName`.

### 7. Imágenes

- Todas las imágenes locales van en `src/assets/images/`.
- Se importan como módulos ES (`import img from '../../assets/images/foto.webp'`).
- Usar `<SmartImage />` en lugar de `<Image />` directamente para obtener el fallback automático.

### 8. JavaScript del Cliente (Swiper, interactividad)

- CSS de librerías externas se importa en el **frontmatter** (`---`).
- JS interactivo va en etiquetas `<script>` al final del componente.
- Inicializar con llamada directa + listeners de `astro:page-load` / `astro:after-swap`.

---

## Checklist para Crear una Nueva Página

1. **Crear la página** en `src/pages/[nombre].astro`
2. **Crear tipos** en `src/types/[nombre].type.ts` (reutilizar `shared.type.ts`)
3. **Crear datos** en `src/data/[nombre].data.ts` (tipados con los tipos del paso 2)
4. **Crear carpeta de componentes** en `src/components/[nombre]/`
5. **Crear secciones** como componentes individuales (`HeroSection.astro`, etc.)
6. **Ensamblar** en la página usando `<Layout>` + secciones
7. **Reutilizar** componentes de `ui/` (Section, Button, SmartImage, Glow, IconBubble...)
