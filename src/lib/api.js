import { supabase } from "./supabase"

export const getCategories = async () => {
  let { data: categorias, error } = await supabase
    .from("categorias")
    .select("*")

  if (error) {
    console.error(error)
  }

  console.log(categorias)
  return categorias
}

export const getCategoryByName = async (name) => {
  let { data: categorias, error } = await supabase
    .from("categorias")
    .select("*")
    .eq("name", name)

  if (error) {
    console.error(error)
  }

  const category = categorias[0]
  console.log(category)
  return category
}

export const getArticlesByType = async (type) => {
  // función que recoge los artículos de la api en función del tipo que estos tengan asignado.

  let { data: articulos, error } = await supabase
    .from("articulos")
    .select(
      "id, title, type, published_at, created_by_id, img, img_alternate, slug, body" //Modificar body por metadescripción
    )
    .eq("type", type)
    .limit(10)
    .order("published_at", { ascending: false })

  if (error) {
    console.log(error)
  }

  console.log(articulos)
  return articulos
}

export const getArticles = async () => {
  let { data: articulos, error } = await supabase
    .from("articulos")
    .select(
      "id, title, type, published_at, created_by_id, img, img_alternate, slug, body"
    )
    .order("published_at", { ascending: false })

  if (error) {
    console.log(error)
  }

  console.log(articulos)
  return articulos
}

export const getAuthorById = async (id) => {
  let { data: redactores, error } = await supabase
    .from("redactores")
    .select("id, name, avatar")
    .eq("id", id)

  if (error) {
    console.log(error)
  }

  const redactor = redactores[0]
  console.log(redactor)
  return redactor
}

export const getArticleBySlug = async (slug) => {
  let { data: articulos, error } = await supabase
    .from("articulos")
    .select(
      "id, title, body, type, published_at, created_by_id, img, img_alternate, slug"
    )
    .limit(1)
    .eq("slug", slug)

  if (error) {
    console.log(error)
  }

  console.log(articulos)
  return articulos
}

export const getArticlesByCategory = async (category) => {
  let { data: articulos_categorias_links, error } = await supabase
    .from("articulos_categorias_links")
    .select("*")
    .eq("categoria_id", category)

  if (error) {
    console.log(error)
  }

  console.log(articulos_categorias_links)
}

export const searchEngine = async (query) => {
  try {
    let { data: articulos, error } = await supabase
      .from("articulos")
      .select(
        "id, title, body, type, published_at, created_by_id, slug, img, img_alternate"
      )
      .ilike("title", `%${query}%`) // Utilizando el parámetro query para la búsqueda

    if (error) {
      throw error
    }

    console.log(articulos)
    return articulos
  } catch (error) {
    console.error("Error al realizar la búsqueda:", error.message)
    return null // O puedes manejar el error de otra manera según tus necesidades
  }
}

export const getArticlesByPage = async (page) => {
  const pageSize = 10
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  let { data: articulos, error } = await supabase
    .from("articulos")
    .select(
      "id, title, body, type, published_at, created_by_id, img, img_alternate"
    )
    .order("published_at", { ascending: false })
    .limit(10)
    .range(startIndex, endIndex)

  if (error) {
    console.log(error)
  }
  console.log(articulos)
  return articulos
}

export const getArticlesByPageAndType = async (page, type) => {
  const pageSize = 10
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  let { data: articulos, error } = await supabase
    .from("articulos")
    .select("*")
    .eq("type", type)
    .order("published_at", { ascending: false })
    .limit(10)
    .range(startIndex, endIndex)

  if (error) {
    console.log(error)
  }
  console.log(articulos)
  return articulos
}

export const getRelatedArticles = async (type, articleId) => {
  // función que recoge los artículos de la api en función del tipo que estos tengan asignado.

  let { data: articulos, error } = await supabase
    .from("articulos")
    .select(
      "id, title, body, type, published_at, created_by_id, img, img_alternate"
    )
    .eq("type", type)
    .limit(3)
    .order("published_at", { ascending: false })
    .neq("id", articleId)

  if (error) {
    console.log(error)
  }

  console.log(articulos)
  return articulos
}
