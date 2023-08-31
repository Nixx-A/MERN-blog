import { useEffect } from 'react'
import { usePosts } from '../context/PostsContext'
import { Link, useLocation } from 'react-router-dom'
import { ContentContainer } from '../components/ui/ContentContainer'
import PostsNavigation from '../components/PostsNavigation'
import PostCard from '../components/posts/PostCard'

export function Posts () {
  const { posts, getPosts, getTags } = usePosts()
  const location = useLocation()

  useEffect(() => {
    getPosts()
    getTags()
  }, [])

  return (
    <ContentContainer>
      <div>
        <PostsNavigation />
        {posts.length === 0 && <h2 className='text-center text-2xl font-semibold mt-4'>No posts</h2>}

        {
          location.pathname === '/' &&
          posts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))
        }
        {location.pathname === '/latest' && <p>Latest</p>}
        {location.pathname === '/top-week' && <p>Top</p>}
      </div>
    </ContentContainer>
  )
}
