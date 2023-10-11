import { Link } from 'react-router-dom'
import { formatPostDate } from '../../utils/dateUtils'

export function CommentCard ({ comment, onDelete, loggedUserId }) {
  const currentUserIsAuthor = comment.author._id === loggedUserId

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      console.log(comment._id)
      onDelete(comment._id)
    }
  }

  return (
    <div className='flex gap-x-2 mb-8' key={comment._id}>
      <Link to={`/${comment.author._id}`}>
        <img
          src='/not-user.jpg'
          className='w-6 h-6 rounded-full '
          alt=''
        />
      </Link>
      <div className='border border-gray-200 dark:border-gray-400 m-auto w-[90%] h-auto rounded-md p-2'>
        <div className='flex gap-x-2 mb-2 justify-between items-center'>

          <div className='flex items-center gap-x-2'>
            <Link to={`/${comment.author._id}`}>
              <p className='text-gray-500/90 font-semibold dark:text-gray-300 dark:hover:text-white'>
                {comment.author.username}
              </p>
            </Link>
            <small className='text-gray-400 font-thin'>{formatPostDate(comment.createdAt)}</small>
          </div>

          {currentUserIsAuthor && (
            <button className='bg-red-500 text-white rounded-md px-4 py-1 hover:bg-red-700' onClick={handleDelete}>Delete</button>
          )}
        </div>
        <p className='p-1'>{comment.comment}</p>
      </div>
    </div>
  )
}
