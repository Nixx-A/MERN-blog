import { AiOutlineGithub, AiOutlineGoogle, AiOutlineMail } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'

export function Methods () {
  const location = useLocation()

  return (
    <>
      {location.pathname === '/login'
        ? < div className='bg-white px-3 rounded w-full  m-auto' >
          <h2 className='text-center text-3xl font-bold mb-2'>Welcome to Nixx</h2>
          <div className='flex flex-col w-full m-auto md:w-4/6 lg:w-full items-center justify-center text-white mt-5 gap-2'>

            <button className='flex items-center justify-center bg-[#24292e] py-2.5 rounded-md w-full hover:bg-black duration-150 gap-x-2'>
              <AiOutlineGithub />
              <p>Continue with Github</p>
            </button>

            <button className='flex justify-center items-center bg-blue-700 py-2.5 rounded-md w-full hover:bg-blue-800 duration-150 gap-x-2'>
              <AiOutlineGoogle />
              <p>Continue with Google</p>
            </button>

          </div>
          <p className='text-center mt-5 after:linea'>Have a password? Continue with your email address</p>
        </div >
        : < div className='bg-white p-3 py-10 mt-10 rounded w-5/6 lg:w-4/6 m-auto' >
          <h2 className='text-center text-3xl font-bold mt-8'>Welcome to Nixx</h2>
          <div className='flex flex-col w-5/6 m-auto md:w-4/6 items-center justify-center text-white mt-5 gap-2'>

            <button className='flex items-center justify-center bg-[#24292e] py-2.5 rounded-md w-full hover:bg-black duration-150 gap-x-2'>
              <AiOutlineGithub />
              <p>Sign up with Github</p>
            </button>

            <button className='flex justify-center items-center bg-blue-700 py-2.5 rounded-md w-full hover:bg-blue-800 duration-150 gap-x-2'>
              <AiOutlineGoogle />
              <p>Sign up with Google</p>
            </button>

            <Link to={'/register-form'} className='flex items-center justify-center bg-[#24292e] py-2.5 rounded-md w-full hover:bg-black duration-150 gap-x-2'>
              <AiOutlineMail />
              <p>Sign up with Email</p>
            </Link>
          </div>
          <p className='text-center mt-5 after:linea'>Already have an account?<Link to={'/login'} className='text-blue-500 ml-1 hover:underline'>Log in.</Link></p>
        </div >
      }

    </>
  )
}

/*  < div className='bg-white p-3 py-10 mt-10 rounded w-5/6 lg:w-4/6 m-auto' >
        <h2 className='text-center text-3xl font-bold mt-8'>Welcome to Nixx</h2>
        <div className='flex flex-col w-5/6 m-auto md:w-4/6 items-center justify-center text-white mt-5 gap-2'>

          <button className='flex items-center justify-center bg-[#24292e] py-2.5 rounded-md w-full hover:bg-black duration-150 gap-x-2'>
            <AiOutlineGithub />
            <p>Sign up with Github</p>
          </button>

          <button className='flex justify-center items-center bg-blue-700 py-2.5 rounded-md w-full hover:bg-blue-800 duration-150 gap-x-2'>
            <AiOutlineGoogle />
            <p>Sign up with Google</p>
          </button>

          <Link to={'/register-form'} className='flex items-center justify-center bg-[#24292e] py-2.5 rounded-md w-full hover:bg-black duration-150 gap-x-2'>
            <AiOutlineMail />
            <p>Sign up with Email</p>
          </Link>
        </div>
        <p className='text-center mt-5 after:linea'>Already have an account?<Link to={'/login'} className='text-blue-500 ml-1 hover:underline'>Log in.</Link></p>
      </div > */
