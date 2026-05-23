import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Rimba-maker.github.io',
  base: '/haventerra-residence',
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ['images.unsplash.com'],
  },
});
