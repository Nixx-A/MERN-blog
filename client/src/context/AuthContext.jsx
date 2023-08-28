import { createContext, useContext, useState } from 'react'
import { loginRequest, logoutRequest, profileRequest, registerRequest, verifyTokenRequest } from '../api/auth'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [errors, setErrors] = useState(null)
  const [user, setUser] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const signup = async (user) => {
    try {
      const res = await registerRequest(user)
      console.log(res)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      console.log(error)
      setErrors(error)
    }
  }

  const signin = async (user) => {
    try {
      const res = await loginRequest(user)
      console.log(res)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      console.log(error)
      setErrors(error)
    }
  }

  const logout = async () => {
    setUser(null)
    setIsAuthenticated(false)
    logoutRequest()
  }

  return (
    <AuthContext.Provider value={{ signup, errors, user, isAuthenticated, signin, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
