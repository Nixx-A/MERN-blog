import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePosts } from '../../context/PostsContext'
import { ContentContainer } from '../../components/ui/ContentContainer'
import { AiOutlineLike } from 'react-icons/ai'
import { formatPostDate } from '../../utils/dateUtils'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function Post () {
  const [post, setPost] = useState(null)
  const { postId } = useParams()
  const { getPost } = usePosts()

  const formattedData = post ? formatPostDate(post.createdAt) : ''

  useEffect(() => {
    getPost(postId).then(fetchedPost => {
      setPost(fetchedPost)
    })
  }, [postId, getPost])

  return (

    <ContentContainer styles={'bg-white w-[97%] mr-auto rounded p-2'}>
      <div className='w-[98%] m-auto '>
        {post && (
          <>
            <div className='flex'>
              <img src="/no-user-image-icon-3.jpg" alt="user" className='w-10 h-10 rounded-full' />
              <div className='flex flex-col'>
                <p className=''>{post.author.username}</p>
                <p>{formattedData}</p>
              </div>
            </div>
            <div className='w-full left-5 '>
              <AiOutlineLike className=''/>
            </div>

            <div className='mb-8'>
              <h2 className='font-bold text-4xl mb-2'>{post.title}</h2>
              {post.tags.map(tag => (
                <Link
                  className='hover:text-black text-gray-800 mb-4  hover:bg-gray-100  px-1.5 py-0.5 hover:border-gray-300 border duration-150 border-transparent rounded'
                  to={`/tag/${tag._id}/${tag.name}`}
                  key={tag.name}>
                  #{tag.name}
                </Link>
              ))}
            </div>

            <ReactMarkdown className='markdown-content prose lg:prose-xl max-w-none' remarkPlugins={[remarkGfm]} >{post.content}</ReactMarkdown>
          </>
        )}
      </div>
    </ContentContainer>
  )
}
