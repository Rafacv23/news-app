export function buscar() {
  const searchInput = document.getElementById("search")
  const query = searchInput.value.trim()
  if (query) {
    // Handle redirection here
    window.location.href = `/search/${encodeURIComponent(query)}`
  } else {
    console.error("No se encontraron resultados para la búsqueda:", query)
    // You can display an error message or take another action as needed
  }
}
