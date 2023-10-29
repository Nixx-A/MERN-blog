import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'

export default function LikeButton ({ likes, isUserLiked }) {
  return (
    <div className=''>
      {isUserLiked ? <FcLike /> : <FcLikePlaceholder />}
      {/* <p>{likes}</p> */}
    </div>
  )
}
