import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'
export function ProtectedRoute () {
  const { isAuthenticated, loading } = useAuth()
  console.log(isAuthenticated, loading)

  if (loading) return <div>Loading...</div>

  if (!loading && !isAuthenticated) return <Navigate to='/login' replace />

  return <Outlet />
}
