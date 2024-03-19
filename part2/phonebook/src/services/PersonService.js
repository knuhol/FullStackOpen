import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

const addPerson = async (newPerson) => {
  const response = await axios.post(baseURL, newPerson)
  return response.data
}

export { getAll, addPerson }
