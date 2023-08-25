import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Sidebar from './Sidebar'

export function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className='bg-white h-14 shadow-xl flex items-center duration-150'>
        <div className='md:hidden'>
          <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className='cursor-pointer m-2 w-5 h-5 mb-1' />
        </div>

        <nav>
          <Link to='/'><h1 className='text-2xl font-semibold'>Nixx</h1></Link>
        </nav>

        <nav className='ml-auto flex mr-2 items-center'>
          <Link className='p-2 hover:bg-indigo-400/30 rounded mr-1'><BiSearch className='md:hidden w-6 h-6 mr-1 cursor-pointer rounded ' color='black' /></Link>
          <Link to='/login' className='hidden md:inline'>Login</Link>
          <Link to='/register' className='px-3 py-2 border rounded text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white hover:underline font-semibold'>Create account a</Link>
        </nav>
      </header>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
