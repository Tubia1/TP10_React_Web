import './CarCard.css'
import CarImage from '../CarImage/CarImage'
import { getMakeCountry } from '../../data/makeCountries'

function CarCard({ car, isFavorite, onToggleFavorite, onSelectCar }) {
  const { Make_Name: make, Model_Name: model, Model_ID: modelId } = car

  return (
    <article className="car-card" onClick={() => onSelectCar(car)}>
      <CarImage make={make} model={model} />
      <div>
        <p className="car-card__make">{make}</p>
        <h3>{model}</h3>
        <dl className="car-card__data">
          <div><dt>País</dt><dd>{getMakeCountry(make)}</dd></div>
          <div><dt>ID del modelo</dt><dd>{modelId}</dd></div>
        </dl>
      </div>
      <button type="button" className={isFavorite ? 'car-card__button car-card__button--remove' : 'car-card__button'} onClick={(event) => { event.stopPropagation(); onToggleFavorite(car) }}>
        {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      </button>
    </article>
  )
}

export default CarCard
