import axios from './axios'

export const getPostsByUserRequest = async (userId) => axios.get(`/settings/${userId}`)
