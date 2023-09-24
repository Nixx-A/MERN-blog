import axios from './axios'

export const getPostsByUserRequest = async (userId) => axios.get(`/settings/posts/${userId}`)

export const getUserSettings = async () => axios.get('/settings')
export const changeSettingsRequest = async (settings, userId) => axios.post('/settings', { settings, userId })
