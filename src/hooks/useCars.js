import { useEffect, useState } from 'react'
import { getCarMakes, getModelsForMake } from '../services/carsApi'

export function useCars() {
  const [makes, setMakes] = useState([])
  const [cars, setCars] = useState([])
  const [selectedMakeId, setSelectedMakeId] = useState(467)
  const [loadingMakes, setLoadingMakes] = useState(true)
  const [loadingCars, setLoadingCars] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadMakes = async () => {
      try { setMakes(await getCarMakes()) }
      catch { setError('No se pudo cargar la información de las marcas') }
      finally { setLoadingMakes(false) }
    }
    loadMakes()
  }, [])

  useEffect(() => {
    const loadCars = async () => {
      setLoadingCars(true)
      setError('')
      try { setCars(await getModelsForMake(selectedMakeId)) }
      catch {
        setCars([])
        setError('No se pudo cargar la información de los autos')
      } finally { setLoadingCars(false) }
    }
    loadCars()
  }, [selectedMakeId])

  return { cars, makes, selectedMakeId, setSelectedMakeId, loading: loadingMakes || loadingCars, error }
}
