import axios from './axios'

export const getPostsRequest = async () => axios.get('/posts')

export const getPostRequest = async (id) => axios.get(`/posts/${id}`)

export const createPostRequest = async (post) => axios.post('/posts', post)

export const deletePostRequest = async (id) => axios.delete(`/posts/${id}`)

export const updatePostRequest = async (id, post) => axios.patch(`/posts/${id}`, post)

export const getCommentsRequest = async (postId) => axios.get(`/posts/${postId}/comments`)

export const getTagsRequest = async () => axios.get('/posts/tags')

export const getPostsByTagRequest = async (tagId) => axios.get(`/posts/tag/${tagId}`)

export const createCommentRequest = async (comment, postId) => axios.post(`/posts/${postId}/comments`, comment)

export const deleteCommentRequest = async (commentId, postId) => axios.delete(`/posts/${postId}/comments/${commentId}`)

export const addLikeRequest = async (postId) => axios.post(`/posts/${postId}/like`)
