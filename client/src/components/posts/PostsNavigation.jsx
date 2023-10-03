import { Link, useLocation } from 'react-router-dom'

export default function PostsNavigation () {
  return (
    <div>
      <ul className='flex gap-x-4 ml-2 mb-2 font-medium text-gray-700'>
        <PostsNavigationCard to='/' label='Relevant' />
        <PostsNavigationCard to='/latest' label='Latest' />
        <PostsNavigationCard to='/top-week' label='Top' />
      </ul>
    </div>
  )
}

function PostsNavigationCard ({ to, label }) {
  const location = useLocation()

  const isActive = location.pathname === to

  return (
    <li>
      <Link
        to={to}
        className={`hover:bg-gray-50 dark:bg-black dark:bg-none hover:text-indigo-800 p-2 rounded ${isActive
          ? 'text-black font-bold dark:text-white dark:hover:text-indigo-500'
          : 'dark:text-gray-500 dark:hover:text-indigo-500'
          }`}
      >
        {label}
      </Link>
    </li>
  )
}
