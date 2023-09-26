import { createContext, useContext, useEffect, useState } from 'react'
import { getPostsByUserRequest, changeSettingsRequest, getUserSettingsRequest } from '../api/user'

const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export const UserProvider = ({ children }) => {
  const [userPosts, setUserPosts] = useState([])
  const [userSettings, setUserSettings] = useState([])

  const getPostsByUser = async (userId) => {
    try {
      const res = await getPostsByUserRequest(userId)
      setUserPosts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getUserSettings = async (userId) => {
    try {
      const res = await getUserSettingsRequest(userId)
      console.log(res.data)
      setUserSettings(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const changeSettings = async (settings, id) => {
    console.log(settings)
    try {
      await changeSettingsRequest(settings, id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserSettings()
  }, [])

  return (
    <UserContext.Provider value={{ userPosts, getPostsByUser, changeSettings, getUserSettings, userSettings }}>
      {children}
    </UserContext.Provider>
  )
}
