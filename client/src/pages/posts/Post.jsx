import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { usePosts } from '../../context/PostsContext'
import { ContentContainer } from '../../components/ui/ContentContainer'
import { formatPostDate } from '../../utils/dateUtils'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { markdownStyles } from '../../data/markdownStyles'
import { Comment } from '../../components/posts/Comment'
import { useAuth } from '../../context/AuthContext'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { PostActions } from '../../components/posts/PostAction'
import PostTags from '../../components/posts/PostTags'

export function Post () {
  const navigate = useNavigate()
  const { postId } = useParams()
  const { user } = useAuth()
  const { getPost, addLike } = usePosts()
  const [post, setPost] = useState(null)
  const [userLiked, setUserLiked] = useState(false)

  const formattedData = post ? formatPostDate(post.createdAt) : ''

  useEffect(() => {
    getPost(postId).then(fetchedPost => {
      setPost(fetchedPost)
      setUserLiked(fetchedPost.likes.includes(user.id))
    })
  }, [postId])

  const handleLike = async () => {
    if (!user) navigate('/login')
    const res = await addLike(postId)
    setPost(res)
    console.log(res)
    setUserLiked(!userLiked)
  }

  return (

    <ContentContainer styles={'bg-white w-[97%] mr-auto rounded p-2'}>
      {post && (
        <div className='w-[98%] m-auto '>
          <div className='flex gap-x-2 mb-4'>
            <img src="/not-user.jpg" alt="user" className='w-10 h-10 rounded-full' />
            <div className=' flex flex-col'>
              <p className='font-semibold'>{post.author.username}</p>
              <small className=''>{formattedData}</small>
            </div>
          </div>
          <div className='w-full left-5 flex items-center '>
            {userLiked ? <FcLike onClick={handleLike} /> : <FcLikePlaceholder onClick={handleLike} />}
            <p>{post.likes.length}</p>
          </div>

          <div className='mb-8'>
            <h2 className='font-bold text-4xl mb-2'>{post.title}</h2>
            <PostTags tags={post.tags} />
          </div>

          <ReactMarkdown className='markdown-content prose lg:prose-xl max-w-none border-b pb-2' remarkPlugins={[remarkGfm]} components={markdownStyles}>{post.content}</ReactMarkdown>
          <Comment post={post} />
          <PostActions handleLike={handleLike} post={post} userLiked={userLiked} />
        </div>
      )}
    </ContentContainer>
  )
}
