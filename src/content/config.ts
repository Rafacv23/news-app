// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"

// 2. Define your collection(s)
const articleCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default("Rafa Canosa"),
    category: z.string(),
    tags: z.array(z.string()),
  }),
})

const newsCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default("Rafa Canosa"),
    category: z.string(),
    tags: z.array(z.string()),
  }),
})

const reviewCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default("Rafa Canosa"),
    category: z.string(),
    tags: z.array(z.string()),
  }),
})

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  analisis: reviewCollection,
  noticias: newsCollection,
  articulos: articleCollection,
  team: teamCollection,
}
