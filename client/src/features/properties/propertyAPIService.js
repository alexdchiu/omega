import axios from 'axios'
import { GiConsoleController } from 'react-icons/gi'

// GET ALL PROPERTIES
const getProperties = async () => {
  const response = await axios.get('/api/v1/properties/all/')
  return response.data
}

// CREATE NEW PROPERTY

const CREATE_PROPERTY_URL = '/api/v1/properties/create/'



const createProperty = async (propertyData, token) => {
  console.log('tok2', token)
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }

  const response = await axios.post(CREATE_PROPERTY_URL, propertyData, config)
  console.log(response.data)
  return response.data
}


const propertyAPIService = {getProperties, createProperty}

export default propertyAPIService