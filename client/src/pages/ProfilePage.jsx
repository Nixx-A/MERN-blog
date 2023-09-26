import { Link, useParams } from 'react-router-dom'
import { ContentContainer } from '../components/ui/ContentContainer'
import { useAuth } from '../context/AuthContext'
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal, BiSolidCake } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { formatProfileDate } from '../utils/dateUtils'
import { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'
import { IoMdPaper } from 'react-icons/io'
import PostCard from '../components/posts/PostCard'

export function ProfilePage () {
  const { userId } = useParams()
  const { user } = useAuth()
  const { getPostsByUser, userPosts, userSettings } = useUser()
  const [moreUserInfo, setmoreUserInfo] = useState(false)
  const [follow, setFollow] = useState(false)

  // console.log(user)
  console.log(userPosts)
  // console.log(userSettings)
  const formattedDate = formatProfileDate(user.data_registered)

  useEffect(() => {
    getPostsByUser(userId)
  }, [userId])

  const isCurrentUserProfile = user.id === userId

  return (
    <ContentContainer>
      <img
        className='w-16 h-16 relative left-4 top-6 border-red-600 bg-white border-2 rounded-full'
        src='/nutritionist.png'
        alt={`img profile of ${user?.username}`}
      />

      <div className='bg-white rounded-sm w-[97%] m-auto mb-8'>
        <div className='bg-white rounded-sm w-[97%] m-auto '>
          <div className='flex ml-auto justify-end mr-8'>
            {isCurrentUserProfile
              ? (

                <button className='indigo-btn'>
                  <Link to='/settings/profile'>Edit Profile</Link>
                </button>
                )
              : (
                <button className='indigo-btn' onClick={() => setFollow(!follow)}>Follow</button>
                )}
          </div>
        </div>

        <div className='w-[95%] m-auto '>
          <h3 className='font-bold text-xl'>{user?.username}</h3>
          <p className='mt-2 text-gray-800 '>{userSettings.bio}</p>

          <div className='flex flex-col md:flex-row gap-2 mt-6'>
            <div className='flex items-center '>
              <MdLocationOn className='w-6 h-6' color='gray' />
              <p className='font-light'>{userSettings.location}</p>
            </div>
            <div className='flex items-center'>
              <BiSolidCake className='w-6 h-6' color='gray' />
              <p className='font-light'> Joined on {formattedDate}</p>
            </div>

            <a href={userSettings.website_url} target='_blank' className=' flex items-center cursor-pointer text-gray-600  hover:text-indigo-700 duration-200' rel="noreferrer">
              <BiLinkExternal className='w-6 h-6 p-1 ' />
              {userSettings.website_url}
            </a>

            <a href={userSettings.github} target='_blank' className='flex items-center cursor-pointer' rel='noreferrer'>
              <AiFillGithub className='w-6 h-6 text-gray-500 hover:text-indigo-700 duration-300' />
            </a>

          </div>
        </div>
        {!moreUserInfo &&
          <div className='flex justify-center'>
            <button onClick={() => setmoreUserInfo(true)} className='border font-semibold border-gray-500 w-[80%] text-gray-700 hover:border-gray-900 hover:bg-gray-100 duration-150 rounded outline-none px-2 py-1 mb-2'>More about @{user?.username}</button>
          </div>
        }
      </div>

      {
        moreUserInfo &&
        <div className='bg-white rounded-sm w-[97%] m-auto mt-4 mb-8'>

          <div className='w-[95%] m-auto p-2'>
            <h3 className='font-semibold text-lg border-b mt-4'>Skills/languages</h3>
            <p className='mt-2'>{userSettings.skills}</p>

            <h3 className='font-semibold text-lg border-y mt-4'>Currently learning</h3>
            <p className='mt-2'>{userSettings.currently_learning}</p>

            <h3 className='font-semibold text-lg border-b mt-4'>Available for</h3>
            <p className='mt-2'>{userSettings.available_for}</p>

            <div className='flex items-center gap-2 mt-8'>
              <IoMdPaper className='w-6 h-6' />
              <p>{userPosts.length} posts published</p>
            </div>
          </div>
        </div>
      }

      {
        userPosts.map(post => (
          <div key={post._id} className='bg-white rounded-md  shadow '>
            <PostCard post={post} />
          </div>
        ))
      }
    </ContentContainer >
  )
}
