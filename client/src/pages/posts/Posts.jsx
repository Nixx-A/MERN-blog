import { usePosts } from '../../context/PostsContext'
import { useLocation } from 'react-router-dom'
import { ContentContainer } from '../../components/ui/ContentContainer'
import PostsNavigation from '../../components/posts/PostsNavigation'
import PostCard from '../../components/posts/PostCard'
import { PostCardLoading } from '../../components/posts/PostLoadingSkeleton'
import { useEffect } from 'react'
import { MainPostsUi } from '../../components/posts/MainPostsUi'

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

  return (
    <ContentContainer>
      <div>
        <MainPostsUi>
          <PostsNavigation />

          {loading && posts.map(post => <PostCardLoading key={post._id} />)}
          {location.pathname === '/' && posts.map(post => <PostCard post={post} key={post._id} />)}
          {location.pathname === '/latest' && posts.map(post => <PostCard post={post} key={post._id} />)}
          {location.pathname === '/top-week' && posts.map(post => <PostCard post={post} key={post._id} />)}
        </MainPostsUi>
      </div>

    </ContentContainer >
  )
}
