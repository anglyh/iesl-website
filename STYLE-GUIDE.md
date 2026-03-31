# IESL Institute - UI & Style Guide

This document outlines the design system, styling conventions, and component structures implemented in the project. It serves as a reference for developing new pages and components while maintaining a consistent, premium aesthetic.

## 1. Typography

The project uses two primary web fonts tailored for a clean, professional, and accessible look. The base `html` font size is `18px`.

* **Headings (h1 - h6):** `var(--font-poppins)` (Poppins)
  * Used for all titles, section headers, and prominent text.
* **Body Text:** `var(--font-inter)` (Inter)
  * Used for paragraphs, buttons, badges, and general UI elements.

### Responsive Typography (Fluid Constraints)
* **h1:** `clamp(2.5rem, 5vw, 3.2rem)`
* **h2:** `clamp(2rem, 4vw, 2.6rem)`
* **p:** `clamp(0.9rem, 1.5vw, 1rem)`

## 2. Color Palette

Based on `global.css` and Tailwind v4 inline theme configuration:

* **Primary (`--color-primary`):** `#2AB3BA` (Teal/Cyan) 
  * Used for primary buttons, prominent text highlights, active states, and badge texts.
* **Secondary (`--color-secondary`):** `#d62942` (Red)
  * Used for accents and secondary attention-grabbing elements.
* **Backgrounds & Surfaces:**
  * **Default Page background:** Usually white (`#ffffff`).
  * **Section alternates:** `bg-gray-50/50` or `bg-gray-50` for visual separation.
  * **Subtle Highlights:** Use alpha transparency on primary (e.g., `bg-primary/10`).

## 3. Layout & Structure

### Section Container
All major page sections use the standard `Section.astro` wrapper to ensure consistent vertical and horizontal pacing.

* **Vertical Padding:** `py-16 md:py-22`
* **Inner Container:** `<div class="container mx-auto px-4 md:px-6 lg:px-8">`
* **Title Grouping:** Centered, usually max-width constrained. 
  ```html
  <div class="text-center max-w-2xl mx-auto mb-16">
    <!-- InfoBadge, Title, Description -->
  </div>
  ```

### Grid Systems
Item collections (cards, features, courses) typically use standard responsive CSS grid layouts with `gap-8`:
* `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` or `grid-cols-1 xl:grid-cols-3 gap-8` depending on card width.

## 4. UI Components

### Button (`Button.astro`)
The default action element.
* **Base Styles:** `flex items-center justify-center gap-2 font-bold px-8 py-3.5 rounded-full shadow-primary/20 border-2 w-fit cursor-pointer`
* **Variants:**
  * **Primary:** `bg-primary text-white border-transparent hover:bg-primary/90`
  * **Secondary:** `bg-white text-primary border-primary hover:bg-gray-50`
  * **Outline:** `bg-outline text-white` (Assumes a dark or context-aware background)

### InfoBadge (`InfoBadge.astro`)
A small, pill-shaped indicator often placed above section titles.
* **Styles:** `inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-bold mb-4 tracking-wide`

### Standard Cards (Courses, Testimonials)
Cards generally feature:
* Rounded corners.
* White background over a `bg-gray-50/50` section, or soft shadows (`shadow-sm`, `shadow-md`).

## 5. Animations & Transitions

For a consistent and smooth feel, all interactive elements feature a unified global transition.

* **Global Interactive Base:** Links (`a`), `button`, `input`, `select`, `textarea` globally apply the `.transition-global` utility.
* **Global Transition Utility:** `.transition-global` applies `transition: all 300ms ease;` to ensure all animations and changes happen at the same speed.

## 6. Best Practices for This Project

1. **Don't hardcode hex colors.** Always use Tailwind standard classes (`text-primary`, `bg-secondary`) or standard grays.
2. **Use Semantic Components.** Always import `Section.astro`, `Button.astro`, and `InfoBadge.astro` instead of recreating their raw DOM.
3. **Keep it Accessible.** Ensure contrast remains high, especially when overlaying text on gradients or using `/10` alpha backgrounds.
4. **Responsive First.** Rely on `mx-auto`, `<Fragment>`, and `grid` adjustments at the `md:`, `lg:`, and `xl:` breakpoints.
