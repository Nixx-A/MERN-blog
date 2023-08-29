import { createContext, useContext, useEffect, useState } from 'react'
import { loginRequest, logoutRequest, registerRequest, verifyTokenRequest } from '../api/auth'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  const signup = async (user) => {
    try {
      const res = await registerRequest(user)
      console.log(res)
      if (res.status === 200) {
        setUser(res.data)
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.log(error.response)
      setErrors(error.response?.data.message)
    }
  }

  const signin = async (user) => {
    try {
      const res = await loginRequest(user)
      console.log(res)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      console.log(error.response)
      setErrors(error.response?.message)
    }
  }

  const logout = async () => {
    setUser(null)
    setIsAuthenticated(false)
    logoutRequest()
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([])
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [errors])

  useEffect(() => {
    async function checkLogin () {
      const cookies = Cookies.get()

      if (!cookies.token) {
        setIsAuthenticated(false)
        setLoading(false)
        setUser(null)
        return
      }

      try {
        const res = await verifyTokenRequest(cookies.token)
        if (!res.data) return setIsAuthenticated(false)

        setIsAuthenticated(true)
        setUser(res.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setIsAuthenticated(false)
        setLoading(false)
      }
    }

    checkLogin()
  }, [])

  return (
    <AuthContext.Provider value={{ signup, errors, user, isAuthenticated, signin, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
