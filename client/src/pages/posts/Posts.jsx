import { usePosts } from '../../context/PostsContext'
import { useEffect } from 'react'
import { ListOfPostsCards } from '../../components/posts/ListOfPostsCards'

export function Posts () {
  const { posts, getPosts, loading, setLoading } = usePosts()

  useEffect(() => {
    setLoading(true)
    getPosts()
  }, [])

  return (
    <ListOfPostsCards loading={loading} posts={posts} />
  )
}
