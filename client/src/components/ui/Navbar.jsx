import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Sidebar from './Sidebar'
import { useAuth } from '../../context/AuthContext'
import ImgSidebar from './ImgSidebar'

export function Navbar () {
  const { isAuthenticated } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [imgSidebarOpen, setimgSidebarOpen] = useState(false)
  const isWidtMd = window.innerWidth >= 768

  return (
    <>
      <header className='bg-white h-14 shadow-sm fixed w-full duration-150 border-b z-50'>
        <div className='w-full md:w-[97%] lg:w-[90%] m-auto flex items-center h-14'>
          <div onClick={() => setIsOpen(!isOpen)} className='md:hidden hover:bg-indigo-400/30 rounded mx-1 py-1  hover:text-indigo-700'>
            <GiHamburgerMenu className='cursor-pointer m-2 w-5 h-5 mb-1' />
          </div>

          <div className='flex gap-x-2 items-end md:w-[500px]'>
            <Link to='/'><img src='/settings-87x87px.png' className='w-[35px] h-[35px]' /></Link>
            <form className='hidden md:flex items-center justify-center w-full'>
              <input type="text" autoComplete='false' className=' w-full border py-1.5 px-2  border-gray-300  rounded-md focus:border-gray-600 outline-none placeholder:text-gray-700' placeholder='Search...' />
              <button className='w-6 h-6'><BiSearch className='relative right-[calc(100%-(-8px))] w-6 h-6' /></button>
            </form>
          </div>

          {isAuthenticated
            ? <div className='ml-auto flex items-center gap-x-2'>
              <Link to='/search' className='indigo-hover md:hidden'><BiSearch className='md:hidden w-6 h-6 cursor-pointer rounded ' color='black' /></Link>
              <Link to='/new' className='hidden md:block px-3.5 py-2 mr-2 md:mr-0 border rounded text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white hover:underline font-semibold '>Create Post</Link>
              <img className='w-8 h-8 rounded-full border border-black cursor-pointer md:w-10 md:h-10 hover:border-indigo-600 mr-4' onClick={() => setimgSidebarOpen(!imgSidebarOpen)} src='/nutritionist.png' />
              {imgSidebarOpen && <ImgSidebar setIsOpen={setimgSidebarOpen} />}
            </div>

            : <nav className='ml-auto flex items-center gap-x-2 md:gap-x-4'>
              <Link to='/search' className='p-2 hover:bg-indigo-400/30 rounded md:hidden'><BiSearch className='md:hidden w-6 h-6 cursor-pointer rounded ' color='black' /></Link>
              <Link to='/login' className='hidden md:inline hover:bg-indigo-400/30 p-2 rounded hover:text-indigo-600 hover:underline'>Log in</Link>
              <Link to='/register' className='px-3.5 py-2 mr-2 md:mr-0 border rounded text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white hover:underline font-semibold '>Create account</Link>
            </nav>
          }

        </div>
      </header>
      {!isWidtMd && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}

    </>
  )
}
