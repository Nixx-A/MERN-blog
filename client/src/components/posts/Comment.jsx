import { useState } from 'react'
import { usePosts } from '../../context/PostsContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createCommentSchema } from '../../schemas/post'
import { useAuth } from '../../context/AuthContext'
import { CommentCard } from './CommentCard'

export function Comment ({ post }) {
  const { user } = useAuth()
  const { createComment, deleteComment } = usePosts()
  const [showBtn, setShowBtn] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(createCommentSchema) })

  const onSubmit = async data => {
    console.log(data)
    await createComment(data, post._id)
    window.location.reload()
  }

  const handleDeleteComment = (commentId) => {
    deleteComment(commentId)
    window.location.reload()
  }

  return (
    <div className=''>
      <div className='flex items-center gap-x-2 font-bold p-2'>
        <h3 className='text-xl'>Comments</h3>
        <p>({post.comments.length})</p>
      </div>

      {user && (
        <div className='mt-6 flex gap-x-2'>
          <img src='/not-user.jpg' className='w-6 h-6 rounded-full ' alt='' />
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

            {errors.comment && (
              <p className='text-red-500'>{errors.comment.message}</p>
            )}

            <textarea
              name='comment'
              onFocus={() => setShowBtn(true)}
              rows={4}
              className='rounded-md outline-none border border-gray-200 placeholder:text-gray-800 p-2 w-[98%] m-auto dark:bg-black dark:text-white dark:placeholder:text-gray-400 dark:focus:border-indigo-600 duration-150 dark:border-black'
              placeholder='Add to the discussion...'
              {...register('comment')}
            />

            {showBtn && (
              <button
                type='submit'
                className='bg-indigo-500 text-white rounded-md px-4 py-1 hover:bg-indigo-700 duration-150'>
                Comment
              </button>
            )}
          </form>
        </div>
      )}

      <div className='mt-8 mb-12'>
        {post.comments.map(comment => (
          <CommentCard key={comment._id} comment={comment} onDelete={handleDeleteComment} />
        ))}
      </div>
    </div>
  )
}
