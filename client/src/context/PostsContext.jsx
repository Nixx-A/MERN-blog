import { createContext, useContext, useState } from 'react'
import { getPostRequest, createPostRequest, getPostsRequest, getTagsRequest } from '../api/posts'

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
  const [tags, setTags] = useState([])

  const getPosts = async () => {
    try {
      const res = await getPostsRequest()
      setPosts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getTags = async () => {
    try {
      const res = await getTagsRequest()
      setTags(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (<PostsContext.Provider value={{ getPosts, posts, tags, getTags }}>
    {children}
  </PostsContext.Provider >)
}
