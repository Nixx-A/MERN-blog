import { Link } from 'react-router-dom'
import { formatPostDate } from '../../utils/dateUtils'

export function CommentCard ({ comment }) {
  return (
    <div className='flex gap-x-2 mb-8' key={comment._id}>
      <Link to={`/${comment.author._id}`}>
        <img
          src='/not-user.jpg'
          className='w-6 h-6 rounded-full '
          alt=''
        />
      </Link>
      <div className='border border-gray-200 m-auto w-[90%] h-auto rounded-md p-2'>
        <div className='flex gap-x-2'>
          <Link to={`/${comment.author._id}`}>
            <p className='text-gray-500/90 font-semibold'>
              {comment.author.username}
            </p>
          </Link>
          <p className='text-gray-400 font-thin'>{formatPostDate(comment.createdAt)}</p>
        </div>
        <p className='p-1'>{comment.comment}</p>
      </div>
    </div>
  )
}
