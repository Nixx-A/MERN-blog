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
import { PostAuthorInfo } from '../../components/posts/PostAuthorInfo'

export function Post () {
  const navigate = useNavigate()
  const { postId } = useParams()
  const { user } = useAuth()
  const { getPost, addLike, deletePost } = usePosts()
  const [post, setPost] = useState(null)
  const [userLiked, setUserLiked] = useState(false)

  const formattedData = post ? formatPostDate(post.createdAt) : ''

  useEffect(() => {
    getPost(postId).then(fetchedPost => {
      setPost(fetchedPost)
      setUserLiked(fetchedPost.likes.includes(user.id))
    })
  }, [postId])

  const handleDelete = async () => {
    await deletePost(postId)
    navigate('/')
  }

  const handleLike = async () => {
    if (!user) navigate('/login')
    const res = await addLike(postId)
    setPost(res)
    console.log(res)
    setUserLiked(!userLiked)
  }

  return (

    <ContentContainer styles={'bg-white w-[97%] dark:bg-[#171717] mr-auto rounded p-2'}>
      {post && (
        <div className='w-[98%] m-auto '>
          {user.username === post.author.username && (
            <div className='flex w-full justify-end'>
              <button
                onClick={handleDelete}
                className='bg-red-500  text-white py-2 px-4 mt-4 rounded hover:bg-red-600'
              >
                Delete Post
              </button>
            </div>
          )}

          <PostAuthorInfo author={post.author} postDate={formattedData} />
          <div className='w-full left-5 flex items-center '>
            {userLiked ? <FcLike onClick={handleLike} /> : <FcLikePlaceholder onClick={handleLike} />}
            <p>{post.likes.length}</p>
          </div>

          <div className='mb-8'>
            <h2 className='font-bold text-4xl mb-2'>{post.title}</h2>
            <PostTags tags={post.tags} />
          </div>

          <ReactMarkdown className='markdown-content prose lg:prose-xl max-w-none border-b dark:border-gray-800 pb-2' remarkPlugins={[remarkGfm]} components={markdownStyles}>{post.content}</ReactMarkdown>
          <Comment post={post} />
          <PostActions handleLike={handleLike} post={post} userLiked={userLiked} />
        </div>
      )}
    </ContentContainer>
  )
}
