/* eslint-disable indent */
import { AiOutlineHeart } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'

export function LeftPostSidebar ({ userLiked, handleLike, post }) {
  return (
    <aside className='w-[7%] lg:w-[13%] mr-auto overflow-hidden z-10 hidden md:block bg-[#efefef] shadow-sm  dark:bg-black'>
      <div className='flex gap-y-2  flex-col items-center h-full '>
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
        <div className='flex flex-col items-center hover:bg-gray-200 dark:hover:text-indigo-500 hover:text-indigo-700 p-2 gap-y-1 rounded cursor-pointer duration-150 dark:hover:bg-[#171717]'>
          <FaRegCommentDots className='w-5 h-5' />
          <p className=' text-black dark:text-gray-200'>{post.comments.length}</p>
        </div>

        <div className='hover-bg-gray-200 p-2 rounded'>
          <BiBookmark className='w-6 h-6 cursor-pointer dark:hover:text-indigo-500 hover:text-indigo-700 duration-150' />
        </div>
        <div className='hover:bg-gray-200 p-2 rounded dark:hover:bg-[#171717]'>
          <BsThreeDots className='w-6 h-6 cursor-pointer' />
        </div>
      </div>
    </aside>
  )
}
