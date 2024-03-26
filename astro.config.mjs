import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  output: "server",
  prefetch: true,
  prefetch: {
    defaultStrategy: "tap",
  },
  site: "https://taberna-precursor.vercel.app/",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => {
        // Devuelve false si la página es /test para excluir esta ruta del Sitemap
        return page !== "https://taberna-precursor.vercel.app/test/"
      },
    }),
  ],
  adapter: vercel(),
})
