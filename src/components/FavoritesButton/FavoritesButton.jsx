import './FavoritesButton.css'

function FavoritesButton({ count, isOpen, onClick }) {
  return (
    <button type="button" className="favorites-button" onClick={onClick} aria-expanded={isOpen}>
      {isOpen ? 'Volver a los autos' : `Ver favoritos (${count})`}
    </button>
  )
}

export default FavoritesButton
