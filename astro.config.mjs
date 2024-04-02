import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  prefetch: {
    defaultStrategy: "tap",
  },
  site: "https://taberna-precursor.vercel.app/",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page !== "https://taberna-precursor.vercel.app/test/",
    }),
  ],
  output: "hybrid",
  adapter: vercel(),
})
