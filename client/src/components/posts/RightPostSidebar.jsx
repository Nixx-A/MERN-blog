import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function RightPostSidebar ({ author }) {
  const [follow, setFollow] = useState(false)

  console.log(author)

  return (
    <>
      <aside className="ml-2 overflow-hidden z-10 w-[30%] h-full hidden p-4 lg:block rounded shadow-sm bg-white dark:bg-[#171717]">
        <Link className='flex gap-x-2' to={`/profile/${author._id}`}>
          <img className="w-8 h-8 rounded-full" src='/not-user.jpg' alt={`${author.username}'s profile`} />
          <p className="text-black dark:text-gray-300 mt-2 hover:text-indigo-600 dark:hover:text-indigo-400 ">{author.username}</p>
        </Link>
        <div className="mt-2 text-center w-full">
          <button
            onClick={() => setFollow(!follow)}
            className={`px-2 py-1 rounded-md w-full ${follow ? 'border border-white hover:bg-black/80 duration-100 ' : ' bg-indigo-600   text-white'}`}
          >
            {follow ? 'Following' : 'Follow'}
          </button>
        </div>
        <div className="mt-4 text-center">
        </div>
      </aside>
    </>
  )
}
