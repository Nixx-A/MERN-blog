import { Link } from 'react-router-dom'
export default function PostsNavigation () {
  return (
    <div>
      <ul className='flex gap-x-4 ml-2 mb-2 font-medium text-gray-700'>
        <li><Link className='hover:bg-gray-50 focus:font-bold focus:text-black focus:hover:text-indigo-800 hover:text-indigo-800 p-2 rounded' autoFocus to='/'>Relevant</Link></li>
        <li><Link className='hover:bg-gray-50 focus:font-bold focus:text-black focus:hover:text-indigo-800 hover:text-indigo-800 p-2 rounded' to='/latest'>Latest</Link></li>
        <li><Link className='hover:bg-gray-50 focus:font-bold focus:text-black focus:hover:text-indigo-800 hover:text-indigo-800 p-2 rounded' to='/top-week'>Top</Link></li>
      </ul>

    </div>
  )
}
