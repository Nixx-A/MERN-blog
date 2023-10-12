import { useEffect } from 'react'
import { usePosts } from '../../context/PostsContext'
import { ListOfPostsCards } from '../../components/posts/ListOfPostsCards'

export function TopPosts () {
  const { posts, getTopPosts, loading, setLoading } = usePosts()

  useEffect(() => {
    setLoading(true)
    getTopPosts()
  }, [])

  return (
    <ListOfPostsCards loading={loading} posts={posts} />
  )
}
