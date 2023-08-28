import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export function SignoutConfirm () {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const signout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-full h-[80%] flex justify-center items-center flex-col gap-2" >
      <h2 className='text-2xl font-semibold'>Are you sure you want to sign out?</h2>
      <button onClick={signout} className='px-3 font-semibold py-2.5 bg-indigo-700 hover:bg-indigo-800 rounded text-white'>Yes, sign out</button>
    </div>
  )
}
