/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ImgSidebar ({ setIsOpen }) {
  const { user } = useAuth()
  console.log(user)
  return (
    <>
      <ul
        className={
          'absolute top-16 w-[95%] m-auto right-0 left-0 shadow-md md:right-8  h-auto md:w-auto md:left-[70%] lg:left-[80%] break-before-avoid-page  bg-white rounded-md p-4'
        }>
        <li className='flex' onClick={() => setIsOpen(!setIsOpen)}>
          <Link
            to='/profile/:user'
            className='hover:bg-indigo-400/30 rounded cursor-pointer w-full hover:text-indigo-600 hover:underline p-1 border-b font-semibold'>
            {user?.username}
          </Link>
        </li>

        <li className='flex' onClick={() => setIsOpen(!setIsOpen)}>
          <Link
            to='/new'
            className='hover:bg-indigo-400/30 rounded cursor-pointer w-full hover:text-indigo-600 hover:underline p-1'>
            Create Post
          </Link>
        </li>

        <li className='flex' onClick={() => setIsOpen(!setIsOpen)}>
          <Link
            to='/settings'
            className='hover:bg-indigo-400/30 rounded cursor-pointer w-full hover:text-indigo-600 hover:underline p-1'>
            Settings
          </Link>
        </li>

        <li className='flex' onClick={() => setIsOpen(!setIsOpen)}>
          <Link
            to='/signout-confirm'
            className='hover:bg-indigo-400/30 rounded cursor-pointer w-full hover:text-indigo-600 hover:underline p-1'>
            Sign out
          </Link>
        </li>
      </ul>
    </>
  )
}
