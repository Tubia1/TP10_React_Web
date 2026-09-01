import CarCard from '../CarCard/CarCard'
import EmptyMessage from '../EmptyMessage/EmptyMessage'
import './CarList.css'

function CarList({ cars, favoriteIds, onToggleFavorite, onSelectCar, emptyMessage = 'No se encontraron autos para la búsqueda ingresada.' }) {
  if (cars.length === 0) return <EmptyMessage message={emptyMessage} />

  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.Model_ID} car={car} isFavorite={favoriteIds.has(car.Model_ID)} onToggleFavorite={onToggleFavorite} onSelectCar={onSelectCar} />
      ))}
    </div>
  )
}

export default CarList
