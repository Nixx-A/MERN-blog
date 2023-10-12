import { Navbar } from './components/ui/Navbar'
import { useUser } from './context/UserContext'
import { useAuth } from './context/AuthContext'
import { useEffect } from 'react'
import { MainRoutes } from './components/Routes'
export default function App () {
  const { theme, getTheme } = useUser()
  const { loading, isAuthenticated, user } = useAuth()

  const defaultTheme = isAuthenticated ? theme : 'light'

  useEffect(() => {
    if (isAuthenticated) {
      getTheme(user.id)
    }
  }, [isAuthenticated, getTheme])

  if (loading) return <div className='flex justify-center items-center  h-screen'>Loading...</div>

  return (
    <main className={`bg-[#efefef] h-screen w-screen overflow-x-hidden  ${defaultTheme === 'dark' ? 'dark bg-black duration-75 text-white' : ''}`} >
      <Navbar />
      <MainRoutes />
    </main>
  )
}
