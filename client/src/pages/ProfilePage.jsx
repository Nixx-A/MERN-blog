/* eslint-disable indent */
import { Link, useParams } from 'react-router-dom'
import { ContentContainer } from '../components/ui/ContentContainer'
import { useAuth } from '../context/AuthContext'
import { formatProfileDate } from '../utils/dateUtils'
import { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'
import { IoMdPaper } from 'react-icons/io'
import PostCard from '../components/posts/PostCard'
import { UserInfoSection } from '../components/user/UserInfoSection'
import { ExtraUserInfo } from '../components/user/ExtraUserInfo'

export function ProfilePage () {
  const { userId } = useParams()
  const { user } = useAuth()
  const { getPostsByUser, userPosts, userSettings, getUserSettings } = useUser()
  const [moreUserInfo, setmoreUserInfo] = useState(false)
  const [follow, setFollow] = useState(false)

  console.log(user)
  // console.log(userPosts)
  console.log(userSettings)
  const formattedDate = formatProfileDate(userSettings?.user?.data_registered)

  useEffect(() => {
    getPostsByUser(userId)
    getUserSettings(userId)
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
                <button className='indigo-btn' onClick={() => setFollow(!follow)}>
                  {follow ? 'Unfollow' : 'Follow'}
                </button>
              )}
          </div>
        </div>

        <UserInfoSection formattedDate={formattedDate} userSettings={userSettings} />

        {!moreUserInfo &&
          <div className='flex justify-center'>
            <button onClick={() => setmoreUserInfo(true)} className='border font-semibold border-gray-500 w-[80%] text-gray-700 hover:border-gray-900 hover:bg-gray-100 duration-150 rounded outline-none px-2 py-1 mb-2'>More about @{userSettings?.username}</button>
          </div>
        }
      </div>

      {
        moreUserInfo &&
        <div className='bg-white rounded-sm w-[97%] m-auto mt-4 mb-8'>

          <div className='w-[95%] m-auto p-2'>
            <ExtraUserInfo label='Skills/languages' text={userSettings.skills} />
            <ExtraUserInfo label='Currently learning' text={userSettings.currently_learning} />
            <ExtraUserInfo label='Available for' text={userSettings.available_for} />
            <div className='flex items-center gap-2 mt-4'>
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
