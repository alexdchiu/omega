import axios from 'axios'

const REGISTER_URL = '/api/v1/auth/users/'
const LOGIN_URL = '/api/v1/auth/jwt/create/'
const ACTIVATE_URL = 'api/v1/auth/users/activation/'

// REGISTER USER
const register = async (userData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await axios.post(REGISTER_URL, userData, config)
  return response.data
}

// LOGIN USER
const login = async (userData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await axios.post(LOGIN_URL, userData, config)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  } 
  console.log(response.data)
  return response.data
}

// LOGOUT USER
const logout = () => localStorage.removeItem('user')

// ACVIATE USER PROFILE
const activate = async (userData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await axios.post(ACTIVATE_URL, userData, config)
  return response.data
}

const authService = {register, login, logout, activate}

export default authService