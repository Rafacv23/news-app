import { getCollection } from "astro:content"

export const getAuthorByName = async (author) => {
  // Nombre del autor que deseas buscar
  const name = author.author

  // Filtrar los miembros del equipo con 'draft: false' y fecha anterior a la fecha actual
  const publishedTeamMembers = await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < new Date()
  })

  // Buscar el autor por el nombre proporcionado
  const autorEncontrado = publishedTeamMembers.find(
    (member) => member.data.name === name
  )

  // Verificar si se encontró el autor
  if (autorEncontrado) {
    // Si se encontró el autor, puedes acceder a sus datos
    const avatarAutorEncontrado = autorEncontrado.data.avatar
    // Puedes hacer lo que necesites con los datos del autor encontrado
    console.log(`avatar del autor: ${avatarAutorEncontrado}`)

    // Return the avatar of the author
    return avatarAutorEncontrado
  } else {
    console.log(`No se encontró ningún autor con el nombre '${name}'`)
    return null
  }
}
