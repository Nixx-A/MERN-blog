import { AiOutlineHeart } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import { FaRegCommentDots } from 'react-icons/fa'
import { BiBookmark } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'

export function PostActions ({ post, userLiked, handleLike }) {
  return (
    <div className='w-[95%] mr-auto overflow-hidden z-10 md:hidden fixed bottom-0 left-0 right-0 h-12 bg-gray-100 shadow-sm dark:bg-black'>
      <div className='flex gap-x-2 items-center h-full justify-between w-[80%] m-auto'>
        <div className='flex items-center hover:bg-gray-200 p-2 gap-x-2 rounded dark:hover:bg-[#171717]'>
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
        <div className='flex items-center hover:bg-gray-200 p-2 gap-x-2 rounded cursor-pointer dark:hover:bg-[#171717]'>
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
    </div>
  )
}
