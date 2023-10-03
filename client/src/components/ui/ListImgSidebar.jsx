import { Link } from 'react-router-dom'

export function ListImgSidebar ({ setIsOpen, text, link, styles }) {
  return (
    <li className='flex' onClick={() => setIsOpen(!setIsOpen)}>
      <Link
        to={link}
        className={`hover:bg-indigo-400/30 rounded cursor-pointer w-full hover:text-indigo-600 hover:underline dark:hover:text-indigo-300 p-1 first-letter ${styles}`}>
        {text}
      </Link>
    </li>
  )
}
