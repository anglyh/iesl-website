// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["i.pravatar.cc"],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Poppins",
      cssVariable: "--font-poppins",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
    }
  ],
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  },
});
