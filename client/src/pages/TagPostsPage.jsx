import { useEffect } from 'react'
import { ContentContainer } from '../components/ui/ContentContainer'
import { useParams } from 'react-router-dom'
import { usePosts } from '../context/PostsContext'
import PostCard from '../components/posts/PostCard'

export function TagPostsPage () {
  const { tagId, tagName } = useParams()
  const { getPostsByTag, posts } = usePosts()

  useEffect(() => {
    getPostsByTag(tagId)
  }, [tagId, tagName])

  return (
    <ContentContainer>
      <h1 className='text-center text-2xl font-semibold mb-2'>#{tagName} posts</h1>
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}

    </ContentContainer>
  )
}
