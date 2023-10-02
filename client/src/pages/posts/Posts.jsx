import { usePosts } from '../../context/PostsContext'
import { useLocation } from 'react-router-dom'
import { ContentContainer } from '../../components/ui/ContentContainer'
import PostsNavigation from '../../components/PostsNavigation'
import PostCard from '../../components/posts/PostCard'
import { PostCardLoading } from '../../components/PostLoadingSkeleton'
import { useEffect } from 'react'

export function Posts () {
  const { posts, getPosts, loading, setLoading, getLatestPosts, getTopPosts } =
    usePosts()
  const location = useLocation()

  useEffect(() => {
    setLoading(true)

    if (location.pathname === '/') {
      getPosts()
    } else if (location.pathname === '/latest') {
      getLatestPosts()
    } else if (location.pathname === '/top-week') {
      getTopPosts()
    }
  }, [location.pathname])

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

  console.log(posts)
  return (
    <ContentContainer>
      {posts.length === 0 && (
        <h2 className='text-center text-2xl font-semibold mt-4'>No posts</h2>
      )}
      <div>
        <PostsNavigation />

        {location.pathname === '/' && posts.map(post => <PostCard post={post} key={post._id} />)}

        {location.pathname === '/latest' && posts.map(post => <PostCard post={post} key={post._id} />)}

        {location.pathname === '/top-week' && posts.map(post => <PostCard post={post} key={post._id} />)}
      </div>
    </ContentContainer>
  )
}
