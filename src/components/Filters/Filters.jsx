import './Filters.css'

function Filters({ countries, country, makes, makeId, onCountryChange, onMakeChange }) {
  return (
    <div className="filters">
      <label>País
        <select value={country} onChange={(event) => onCountryChange(event.target.value)}>
          <option value="Todos">Todos los países</option>
          {countries.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
      <label>Marca
        <select value={makes.length === 0 ? '' : makeId} onChange={(event) => onMakeChange(Number(event.target.value))} disabled={makes.length === 0}>
          {makes.length === 0 && <option value="">No hay marcas disponibles</option>}
          {makes.map((make) => <option key={make.MakeId} value={make.MakeId}>{make.MakeName}</option>)}
        </select>
      </label>
    </div>
  )
}

export default Filters
