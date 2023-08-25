import axios from './axios'

export const registerRequest = async (user) => axios.post('/api/auth/register', user)

export const loginRequest = async (user) => axios.post('/api/auth/login', user)

export const logoutRequest = async () => axios.post('/api/auth/logout')

export const verifyTokenRequest = async () => axios.get('/verify')

export const profileRequest = async () => axios.get('/profile')
