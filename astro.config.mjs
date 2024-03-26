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
        return page !== "https://taberna-precursor.vercel.app/test"
      },
    }),
  ],
  adapter: vercel(),

  serialize(item) {
    // Verifica si la URL es para una página dinámica [articleType]/[slug]
    if (item.url.includes('/[articleType]/[slug]')) {
      // Agrega cualquier lógica adicional que necesites para generar la URL del Sitemap
      const dynamicUrl = `https://taberna-precursor.vercel.app${item.url}`;
          
      // Modifica el objeto SitemapItem con la URL dinámica
      return {
        ...item,
        url: dynamicUrl,
        changefreq: 'weekly', // Puedes establecer la frecuencia de cambio según tus necesidades
        lastmod: new Date(), // Puedes establecer la última modificación según tus necesidades
        priority: 0.8 // Puedes establecer la prioridad según tus necesidades
      };
    }
    // Verifica si la URL es para una página con la ruta [articleType]
    else if (item.url.includes('/[articleType]')) {
      // Agrega cualquier lógica adicional que necesites para generar la URL del Sitemap
      const dynamicUrl = `https://taberna-precursor.vercel.app${item.url}`;
          
      // Modifica el objeto SitemapItem con la URL dinámica
      return {
        ...item,
        url: dynamicUrl,
        changefreq: 'weekly', // Puedes establecer la frecuencia de cambio según tus necesidades
        lastmod: new Date(), // Puedes establecer la última modificación según tus necesidades
        priority: 0.8 // Puedes establecer la prioridad según tus necesidades
      };
    }
    // Si no es una página dinámica, devuelve el objeto SitemapItem sin modificar
    return item;
  }
})
