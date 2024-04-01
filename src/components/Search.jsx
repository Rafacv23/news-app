import React, { useState } from "react"
import blogJSON from "../lib/data/posts.json" // Importar el JSON

const Search = () => {
  const [searchInput, setSearchInput] = useState("")
  const [results, setResults] = useState([])
  const [searched, setSearched] = useState(false) // Estado para controlar si se ha realizado una búsqueda
  const site = "https://taberna-precursor.vercel.app"

  const handleSearch = () => {
    let newResults = blogJSON.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    setResults(newResults)
    setSearched(true) // Indicar que se ha realizado una búsqueda
  }

  return (
    <div className="flex gap-4 flex-col">
      <div className="flex gap-4">
        <input
          className="input input-solid"
          placeholder="Noticias, artículos, análisis..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          name="search"
          id="search"
          autoComplete="off"
        />
        <button
          onClick={handleSearch}
          id="search-btn"
          className="btn btn-solid-primary"
        >
          Buscar
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {searched && results.length === 0 ? (
          <p>No se han encontrado resultados</p>
        ) : (
          results.map((item) => (
            <a
              key={`${site}/${item.url}`}
              href={`${site}/${item.url}`}
              title={item.title}
              className="border rounded-md p-4 border-2 border-gray-600"
            >
              <h2 className="hover:text-yellow-400 hover:transition text-base">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </a>
          ))
        )}
      </ul>
    </div>
  )
}

export default Search
