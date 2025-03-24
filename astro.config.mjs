import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: 'https://sebastianrv26.github.io',
  // base: '', // my-repo
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
