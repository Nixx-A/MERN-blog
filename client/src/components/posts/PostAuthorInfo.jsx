import { Link } from 'react-router-dom'

export function PostAuthorInfo ({ author, postDate }) {
  return (
    <div className='flex  items-center mb-2 justify-between'>
      <div className='flex items-center mb-2'>

        <Link to={`/profile/${author._id}`}>
          <img
            className='w-10 h-10 rounded-full mr-2 '
            src='/not-user.jpg'
          />
        </Link>
        <div className='flex flex-col'>
          <Link
            className='font-semibold text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white'
            to={`/profile/${author._id}`}>
            {author.username}
          </Link>
          <small className='font-light'>{postDate}</small>
        </div>
      </div>
    </div>
  )
}
