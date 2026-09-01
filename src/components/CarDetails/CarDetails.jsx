import { useEffect, useState } from 'react'
import CarImage from '../CarImage/CarImage'
import { getMakeCountry } from '../../data/makeCountries'
import { getCarInformation } from '../../services/imagesApi'
import './CarDetails.css'

function CarDetails({ car, isFavorite, onToggleFavorite, onClose }) {
  const [information, setInformation] = useState(null)
  const [loadingInformation, setLoadingInformation] = useState(true)

  useEffect(() => {
    let active = true
    getCarInformation(car.Make_Name, car.Model_Name)
      .then((result) => active && setInformation(result))
      .catch(() => active && setInformation(null))
      .finally(() => active && setLoadingInformation(false))
    return () => { active = false }
  }, [car.Make_Name, car.Model_Name])

  return (
    <div className="details-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="car-details" role="dialog" aria-modal="true" aria-labelledby="details-title" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="car-details__close" onClick={onClose} aria-label="Cerrar información">×</button>
        <CarImage make={car.Make_Name} model={car.Model_Name} />
        <div><p className="car-details__make">{car.Make_Name}</p><h2 id="details-title">{car.Model_Name}</h2></div>
        <dl>
          <div><dt>Tipo</dt><dd>Automóvil de pasajeros</dd></div>
          <div><dt>País de la marca</dt><dd>{getMakeCountry(car.Make_Name)}</dd></div>
          <div><dt>ID de marca</dt><dd>{car.Make_ID}</dd></div>
          <div><dt>ID de modelo</dt><dd>{car.Model_ID}</dd></div>
        </dl>
        <div className="car-details__description">
          <h3>Acerca del modelo</h3>
          {loadingInformation && <p>Cargando datos del modelo…</p>}
          {!loadingInformation && information && (
            <>
              <p>{information.description}</p>
              <a href={information.sourceUrl} target="_blank" rel="noreferrer">Ver información completa en Wikipedia</a>
            </>
          )}
          {!loadingInformation && !information && <p>No hay información adicional disponible para este modelo.</p>}
        </div>
        <button type="button" className="car-card__button" onClick={() => onToggleFavorite(car)}>
          {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        </button>
      </section>
    </div>
  )
}

export default CarDetails
