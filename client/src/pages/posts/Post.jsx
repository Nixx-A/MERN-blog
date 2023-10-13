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
import { LeftPostSidebar } from '../../components/posts/LeftPostSidebar'
import DeletePostBtn from '../../components/posts/DeletePostBtn'
import RightPostSidebar from '../../components/posts/RightPostSidebar'

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

    <ContentContainer styles={'bg-white w-[97%] md:flex dark:bg-black mr-auto rounded p-2'}>
      {post && (
        <>
          <LeftPostSidebar post={post} userLiked={userLiked} handleLike={handleLike} />

          <div className='w-full p-2 m-auto md:pl-4 dark:bg-[#171717]'>
            <PostAuthorInfo author={post.author} postDate={formattedData} />
            {user.username === post.author.username && (
              <div className='flex w-full items-center justify-between'>
                <DeletePostBtn handleDelete={handleDelete} />
              </div>
            )}
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

          <RightPostSidebar author={post.author} />
        </>
      )}
    </ContentContainer>
  )
}
