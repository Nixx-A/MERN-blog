/* eslint-disable indent */
import { AiOutlineHeart } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'

export function PostSidebar ({ userLiked, handleLike, post }) {
  return (
    <aside className='w- mr-auto overflow-hidden z-10 h-full hidden md:block    bg-gray-100 shadow-sm dark:bg-black'>
      <div className='flex gap-y-2  flex-col items-center h-full'>
        <div className='flex flex-col gap-1 items-center hover:bg-gray-200 p-2 rounded dark:hover:bg-[#171717]'>
          {userLiked
            ? (
              <FcLike onClick={handleLike} className='w-6 h-6 cursor-pointer ' />
            )
            : (
              <AiOutlineHeart
                className='w-6 h-6 cursor-pointer'
                onClick={handleLike}
              />
            )}
          <p>{post.likes.length}</p>
        </div>
        <div className='flex flex-col items-center hover:bg-gray-200 p-2 gap-y-1 rounded cursor-pointer dark:hover:bg-[#171717]'>
          <FaRegCommentDots className='w-5 h-5' />
          <p>{post.comments.length}</p>
        </div>

        <div className='hover-bg-gray-200 p-2 rounded'>
          <BiBookmark className='w-6 h-6 cursor-pointer hover:text-indigo-500 duration-150' />
        </div>
        <div className='hover:bg-gray-200 p-2 rounded dark:hover:bg-[#171717]'>
          <BsThreeDots className='w-6 h-6 cursor-pointer' />
        </div>
      </div>
    </aside>
  )
}
