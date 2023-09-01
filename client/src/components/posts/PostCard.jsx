import { Link } from 'react-router-dom'
import { FaRegCommentDots } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { calculateReadingTime } from '../../utils/postRead'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function PostCard ({ post }) {
  const readingTime = calculateReadingTime(post.content)

  return (
    <div className='bg-white mb-4 rounded p-4 w-[95%]'>
      <div className='flex'>
        <img
          className='w-10 h-10 rounded-full mr-2 '
          src='../../../public/no-user-image-icon-3.jpg'
        />
        <div className=''>
          <Link
            className='font-semibold text-gray-800 hover:text-black'
            to={`/user/${post.author.username}`}>
            {post.author.username}
          </Link>
          <p>{post.createdAt}</p>
        </div>
      </div>

      <div className='text-xl font-semibold mb-2 '>{post.title}</div>

      <ReactMarkdown className='markdown-content prose lg:prose-xl max-w-none' remarkPlugins={[remarkGfm]} >{post.content}</ReactMarkdown>

      <div>
        <p>
          {post.tags.map(tag => (
            <Link
              className='hover:text-black text-gray-800 hover:bg-gray-100 border-none px-1.5 py-0.5 hover:border rounded'
              to={`/tag/${tag.name}`}
              key={tag.name}>
              #{tag.name}
            </Link>
          ))}
        </p>
      </div>

      <div className='flex items-center w-[95%] m-auto  '>
        <AiOutlineLike className='mr-2' color='gray ' />
        <div className='flex items-center hover:bg-gray-100 gap-x-1 px-1.5 py-0.5 border-none hover:border rounded'>
          <FaRegCommentDots color='gray' />
          <p>{post.comments.length}</p>
        </div>
        <small className='ml-auto'>{readingTime} min read</small>
      </div>
    </div>
  )
}
