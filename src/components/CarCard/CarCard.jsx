import './CarCard.css'
import CarImage from '../CarImage/CarImage'

function CarCard({ car, isFavorite, onToggleFavorite }) {
  return (
    <article className="car-card">
      <CarImage make={car.Make_Name} model={car.Model_Name} />
      <div>
        <p className="car-card__make">{car.Make_Name}</p>
        <h3>{car.Model_Name}</h3>
      </div>
      <button type="button" className={isFavorite ? 'car-card__button car-card__button--remove' : 'car-card__button'} onClick={() => onToggleFavorite(car)}>
        {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      </button>
    </article>
  )
}

export default CarCard
