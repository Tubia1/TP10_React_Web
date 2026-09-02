import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <p className="header__eyebrow">Catálogo de vehículos</p>
        <h1>Catálogo de autos</h1>
        <p>Explorá modelos de distintas marcas y países, y armá tu lista de favoritos.</p>
        <nav className="header__nav" aria-label="Navegación principal">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/favoritos">Favoritos</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
