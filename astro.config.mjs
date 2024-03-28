import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import vercelStatic from "@astrojs/vercel/static"

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
  output: "static",
  adapter: vercelStatic(),
})
