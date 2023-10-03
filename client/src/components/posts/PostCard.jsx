import { Link } from 'react-router-dom'
import { FaRegCommentDots } from 'react-icons/fa'
import { calculateReadingTime } from '../../utils/postRead'
import { formatPostDate } from '../../utils/dateUtils'
import { useAuth } from '../../context/AuthContext'
import PostTags from './PostTags'
import { PostAuthorInfo } from './PostAuthorInfo'
import LikeButton from './LikeButton'
import { BiBookmark } from 'react-icons/bi'

export default function PostCard ({ post }) {
  const { user } = useAuth()
  const readingTime = calculateReadingTime(post.content)
  const formattedDate = formatPostDate(post.createdAt)
  const isUserLiked = user && post.likes.includes(user.id)

  return (
    <div className='bg-white dark:bg-[#171717] mb-4 rounded p-4 w-[95%]'>
      <PostAuthorInfo author={post.author} postDate={formattedDate} />
      <h2 className='text-2xl font-semibold mb-2  inline-block hover:text-indigo-700 dark:hover:text-indigo-500 cursor-pointer'>
        <Link to={`/post/${post._id}`}>{post.title}</Link>
      </h2>

      {post.tags && <PostTags tags={post.tags} />}

      <div className='flex justify-between items-center w-[95%] m-auto  '>
        <div className='flex'>
          <LikeButton isUserLiked={isUserLiked} likes={post.likes.length} />
          <div className='flex items-center hover:bg-gray-100 gap-x-1 px-1.5 py-0.5 border-none hover:border rounded dark:hover:bg-black '>
            <FaRegCommentDots color='gray' />
            <p>{post.comments.length}</p>
          </div>
        </div>

        <div className='flex gap-x-3 items-center'>
          <small className='ml-auto'>{readingTime} min read</small>
          <div className='p-2 hover:bg-indigo-400/30 dark:hover:bg-indigo-600/30 rounded cursor-pointer'>
            <BiBookmark />
          </div>
        </div>
      </div>
    </div>
  )
}
