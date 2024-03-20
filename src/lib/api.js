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
    .select("*")
    .eq("type", type)

  if (error) {
    console.log(error)
  }

  console.log(articulos)
  return articulos
}

export const getArticles = async () => {
  let { data: articulos, error } = await supabase.from("articulos").select("*")

  if (error) {
    console.log(error)
  }

  console.log(articulos)
  return articulos
}

export const getAuthorById = async (id) => {
  let { data: redactores, error } = await supabase
    .from("redactores")
    .select("*")
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
    .select("*")
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
