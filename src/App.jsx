import { useMemo, useState } from 'react'
import CarList from './components/CarList/CarList'
import CarDetails from './components/CarDetails/CarDetails'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import Favorites from './components/Favorites/Favorites'
import FavoritesButton from './components/FavoritesButton/FavoritesButton'
import Filters from './components/Filters/Filters'
import Header from './components/Header/Header'
import LoadingMessage from './components/LoadingMessage/LoadingMessage'
import SearchBar from './components/SearchBar/SearchBar'
import { useCars } from './hooks/useCars'
import { getMakeCountry } from './data/makeCountries'
import './App.css'

function App() {
  const { cars, makes, selectedMakeId, setSelectedMakeId, loading, error } = useCars()
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState('Todos')
  const [favorites, setFavorites] = useState([])
  const [showFavorites, setShowFavorites] = useState(false)
  const [selectedCar, setSelectedCar] = useState(null)

  const favoriteIds = useMemo(() => new Set(favorites.map((car) => car.Model_ID)), [favorites])

  const filteredCars = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()
    if (!normalizedSearch) return cars

    return cars.filter(
      (car) => car.Make_Name.toLowerCase().includes(normalizedSearch) || car.Model_Name.toLowerCase().includes(normalizedSearch),
    )
  }, [cars, search])

  const countries = useMemo(
    () => [...new Set([...makes.map((make) => getMakeCountry(make.MakeName)), 'Argentina'])].sort(),
    [makes],
  )

  const filteredMakes = useMemo(
    () => country === 'Todos' ? makes : makes.filter((make) => getMakeCountry(make.MakeName) === country),
    [country, makes],
  )

  const changeCountry = (nextCountry) => {
    setCountry(nextCountry)
    const availableMakes = nextCountry === 'Todos'
      ? makes
      : makes.filter((make) => getMakeCountry(make.MakeName) === nextCountry)
    if (availableMakes.length > 0 && !availableMakes.some((make) => make.MakeId === selectedMakeId)) {
      setSelectedMakeId(availableMakes[0].MakeId)
    }
  }

  const toggleFavorite = (car) => {
    setFavorites((currentFavorites) => {
      const isFavorite = currentFavorites.some((favorite) => favorite.Model_ID === car.Model_ID)
      return isFavorite
        ? currentFavorites.filter((favorite) => favorite.Model_ID !== car.Model_ID)
        : [...currentFavorites, car]
    })
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <SearchBar search={search} onSearchChange={setSearch} />
        <Filters
          countries={countries}
          country={country}
          makes={filteredMakes}
          makeId={selectedMakeId}
          onCountryChange={changeCountry}
          onMakeChange={setSelectedMakeId}
        />
        <FavoritesButton
          count={favorites.length}
          isOpen={showFavorites}
          onClick={() => setShowFavorites((isOpen) => !isOpen)}
        />

        {showFavorites ? (
          <Favorites favorites={favorites} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} onSelectCar={setSelectedCar} />
        ) : (
          <section aria-labelledby="cars-title">
            <div className="section-heading">
              <div><p>Resultados</p><h2 id="cars-title">Autos disponibles</h2></div>
              {!loading && !error && <span>{filteredMakes.length > 0 ? filteredCars.length : 0}</span>}
            </div>

            {loading && <LoadingMessage />}
            {error && <ErrorMessage message={error} />}
            {!loading && !error && <CarList cars={filteredMakes.length > 0 ? filteredCars : []} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} onSelectCar={setSelectedCar} emptyMessage={filteredMakes.length > 0 ? undefined : 'No hay marcas argentinas disponibles en vPIC.'} />}
          </section>
        )}
      </main>
      {selectedCar && (
        <CarDetails
          car={selectedCar}
          isFavorite={favoriteIds.has(selectedCar.Model_ID)}
          onToggleFavorite={toggleFavorite}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  )
}

export default App
