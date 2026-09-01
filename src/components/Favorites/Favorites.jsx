import CarList from '../CarList/CarList'
import EmptyMessage from '../EmptyMessage/EmptyMessage'
import './Favorites.css'

function Favorites({ favorites, favoriteIds, onToggleFavorite }) {
  return (
    <section className="favorites" aria-labelledby="favorites-title">
      <div className="section-heading">
        <div><p>Tu selección</p><h2 id="favorites-title">Favoritos</h2></div>
        <span>{favorites.length}</span>
      </div>
      {favorites.length === 0 ? <EmptyMessage message="Todavía no agregaste autos a favoritos." /> : <CarList cars={favorites} favoriteIds={favoriteIds} onToggleFavorite={onToggleFavorite} />}
    </section>
  )
}

export default Favorites
