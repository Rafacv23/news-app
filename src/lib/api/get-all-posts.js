export async function getAllPosts(
  firstCollection,
  secondCollection,
  thirdCollection
) {
  const allPublishedEntries = firstCollection.concat(
    secondCollection,
    thirdCollection
  )

  // Sort content entries by publication date
  allPublishedEntries.sort(function (a, b) {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  })

  return allPublishedEntries
}
