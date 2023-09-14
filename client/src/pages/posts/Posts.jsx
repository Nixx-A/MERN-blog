import { useEffect } from 'react'
import { usePosts } from '../../context/PostsContext'
import { useLocation } from 'react-router-dom'
import { ContentContainer } from '../../components/ui/ContentContainer'
import PostsNavigation from '../../components/PostsNavigation'
import PostCard from '../../components/posts/PostCard'
import { PostCardLoading } from '../../components/PostLoadingSkeleton'

export function Posts () {
  const { posts, getPosts, loading } = usePosts()
  const location = useLocation()

  if (loading) {
    return (
      <div className='mt-[110px]'>
        <PostCardLoading />
        <PostCardLoading />
        <PostCardLoading />
        <PostCardLoading />
      </div>
    )
  }

  return (
    <ContentContainer>
      <div>
        <PostsNavigation />

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

// {posts.length === 0 && <h2 className='text-center text-2xl font-semibold mt-4'>No posts</h2>}
