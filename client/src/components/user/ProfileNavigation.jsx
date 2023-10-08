import { Link } from 'react-router-dom'

export function ProfileNavigation ({ handleOptionChange, username }) {
  return (
    <>
      <select
        onChange={handleOptionChange}
        className='mb-6 w-full rounded-md focus:border-blue-500 py-2 dark:bg-[#171717] border-gray-300 border md:hidden'>
        <option value='Profile'>Profile</option>
        <option value='Customization'>Customization</option>
      </select>

      <Link
        to={`/profile/${username.id}`}
        className='text-indigo-700 dark:text-indigo-500 font-semibold text-lg md:text-2xl '>
        @{username}
      </Link>
    </>
  )
}
