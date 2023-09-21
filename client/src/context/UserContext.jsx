import { createContext, useContext, useState } from 'react'
import { getPostsByUserRequest } from '../api/user'

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

  const getPostsByUser = async (userId) => {
    try {
      const res = await getPostsByUserRequest(userId)
      setUserPosts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{ userPosts, getPostsByUser }}>
      {children}
    </UserContext.Provider>
  )
}
