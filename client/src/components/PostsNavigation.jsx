import { Link, useLocation } from 'react-router-dom'

export default function PostsNavigation () {
  const location = useLocation()

  return (
    <div>
      <ul className='flex gap-x-4 ml-2 mb-2 font-medium text-gray-700'>
        <li>
          <Link
            className={`hover:bg-gray-50 focus:text-indigo-800 hover:text-indigo-800 p-2 rounded ${location.pathname === '/' ? 'text-black font-bold' : ''
              }`}
            autoFocus
            to='/'>
            Relevant
          </Link>
        </li>
        <li>
          <Link
            className={`hover:bg-gray-50 focus:text-indigo-800 hover:text-indigo-800 p-2 rounded ${location.pathname === '/latest' ? 'text-black font-bold' : ''
              }`}
            to='/latest'>
            Latest
          </Link>
        </li>
        <li>
          <Link
            className={`hover:bg-gray-50 focus:text-indigo-800 hover:text-indigo-800 p-2 rounded ${location.pathname === '/top-week' ? 'text-black font-bold' : ''
              }`}
            to='/top-week'>
            Top
          </Link>
        </li>
      </ul>
    </div>
  )
}
