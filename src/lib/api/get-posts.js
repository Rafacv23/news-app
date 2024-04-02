import { getCollection } from "astro:content"

export async function getPosts(collection) {
  let entries = []

  // Get published reviews from the collection
  entries = await getCollection(collection, ({ data }) => {
    return !data.draft && data.publishDate < new Date()
  })

  // Sort content entries by publication date
  entries.sort(function (a, b) {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  })

  return entries
}
