import './SearchBar.css'

function SearchBar({ search, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="car-search">Buscar por marca o modelo</label>
      <input id="car-search" type="search" value={search} onChange={(event) => onSearchChange(event.target.value)} placeholder="Ejemplo: Camaro" />
    </div>
  )
}

export default SearchBar
