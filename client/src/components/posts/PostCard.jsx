import { Link } from 'react-router-dom'
import { FaRegCommentDots } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { calculateReadingTime } from '../../utils/postRead'
import { formatPostDate } from '../../utils/dateUtils'

export default function PostCard ({ post }) {
  const readingTime = calculateReadingTime(post.content)
  const formattedDate = formatPostDate(post.createdAt)

  return (
    <div className='bg-white mb-4 rounded p-4 w-[95%]'>
      <div className='flex items-center'>
        <img
          className='w-10 h-10 rounded-full mr-2 '
          src='/not-user.jpg'
        />
        <div className=''>
          <Link
            className='font-semibold text-gray-800 hover:text-black'
            to={`/${post.author._id}`}>
            {post.author.username}
          </Link>
          <p className='font-light'>{formattedDate}</p>
        </div>
      </div>

      <h2 className='text-xl font-semibold mb-2 inline-block hover:text-indigo-700 cursor-pointer'><Link to={`/post/${post._id}`}>{post.title}</Link></h2>

      {
        post.tags.name &&
        <div>
          {post.tags.map(tag => (
            <Link
              className='hover:text-black text-gray-800  hover:bg-gray-100  px-1.5 py-0.5 hover:border-gray-300 border duration-150 border-transparent rounded'
              to={`/tag/${tag._id}/${tag.name}`}
              key={tag.name}>
              #{tag.name}
            </Link>
          ))}
        </div>
      }

      <div className='flex items-center w-[95%] m-auto  '>
        <AiOutlineLike size={20} className='mr-2' color='gray ' />
        <div className='flex items-center hover:bg-gray-100 gap-x-1 px-1.5 py-0.5 border-none hover:border rounded'>
          <FaRegCommentDots color='gray' />
          <p>{post.comments.length}</p>
        </div>
        <small className='ml-auto'>{readingTime} min read</small>
      </div>
    </div >
  )
}
