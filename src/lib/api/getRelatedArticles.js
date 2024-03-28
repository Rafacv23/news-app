import { getCollection } from "astro:content"

export const getRelatedArticles = async (collection, slug) => {
  const relatedArticles = await getCollection(collection, ({ data }) => {
    return !data.draft && data.publishDate < new Date() && data.slug !== slug
  })

  relatedArticles.sort(function (a, b) {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  })

  console.log(relatedArticles)
  return relatedArticles.slice(0, 3)
}
