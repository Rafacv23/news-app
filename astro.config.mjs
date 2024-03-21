import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  output: "server",
  prefetch: true,
  prefetch: {
    defaultStrategy: "tap",
  },
})
