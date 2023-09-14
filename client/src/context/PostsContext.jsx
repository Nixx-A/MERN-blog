import { createContext, useContext, useEffect, useState } from 'react'
import { getPostRequest, createPostRequest, getPostsRequest, getTagsRequest, getPostsByTagRequest } from '../api/posts'

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
  const [loading, setloading] = useState(false)

  const getPosts = async () => {
    try {
      const res = await getPostsRequest()
      console.log(loading)
      setPosts(res.data)
      console.log(loading)
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  const createPost = async (post) => {
    try {
      console.log(post)
      await createPostRequest(post)
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

  const getPostsByTag = async (tagId) => {
    try {
      const res = await getPostsByTagRequest(tagId)
      setPosts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getPost = async (postId) => {
    try {
      const res = await getPostRequest(postId)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (<PostsContext.Provider value={{ getPosts, posts, getPostsByTag, createPost, getPost, tags, getTags, loading }}>
    {children}
  </PostsContext.Provider >)
}
