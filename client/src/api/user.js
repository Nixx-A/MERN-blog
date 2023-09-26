import axios from './axios'

export const getPostsByUserRequest = async (userId) => axios.get(`/settings/posts/${userId}`)

export const getUserSettingsRequest = async (userId) => axios.get(`/settings/${userId}`)

export const changeSettingsRequest = async (settings, userId) => axios.post('/settings', { settings, userId })
