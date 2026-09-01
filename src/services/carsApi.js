import axios from 'axios'

const API_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles'

export async function getCarMakes() {
  const response = await axios.get(`${API_URL}/GetMakesForVehicleType/car?format=json`)
  return response.data.Results
}

export async function getModelsForMake(makeId) {
  const response = await axios.get(`${API_URL}/GetModelsForMakeId/${makeId}?format=json`)
  return response.data.Results
}
