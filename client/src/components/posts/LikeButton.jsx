import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'

export default function LikeButton ({ likes, isUserLiked }) {
  return (
    <div className='flex items-center hover:bg-gray-100 gap-x-1 px-1.5 py-0.5 border-none hover:border rounded'>
      {isUserLiked ? <FcLike /> : <FcLikePlaceholder />}
      <p>{likes}</p>
    </div>
  )
}
