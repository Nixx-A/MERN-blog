import { createContext, useContext, useState } from 'react'
import { getPostRequest, createPostRequest, getPostsRequest } from '../api/posts'

const PostsContext = createContext()

export const usePosts = () => {
  const context = useContext(PostsContext)
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider')
  }
  return context
}

export function PostsProvider ({ children }) {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const res = await getPostsRequest()
      setPosts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (<PostsContext.Provider value={{ getPosts, posts }}>
    {children}
  </PostsContext.Provider >)
}