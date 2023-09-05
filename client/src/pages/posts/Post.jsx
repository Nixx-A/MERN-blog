import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePosts } from '../../context/PostsContext'
import { ContentContainer } from '../../components/ui/ContentContainer'
export function Post () {
  const [post, setPost] = useState(null)
  const { postId } = useParams()
  const { getPost } = usePosts()

  useEffect(() => {
    getPost(postId).then(fetchedPost => {
      setPost(fetchedPost)
    })
  }, [postId, getPost])

  return (
    <ContentContainer styles={'bg-white w-[97%] mr-auto rounded '}>

      <div className="sectionPost ">
        <p>sdads</p>
        <p>sdads</p>
        <p>sdads</p>
      </div>

      <div>Post</div>
      {post && <div>{post.title}</div>}
    </ContentContainer>
  )
}
