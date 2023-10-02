import { useParams } from 'react-router-dom'
import { ContentContainer } from '../components/ui/ContentContainer'
import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'
import PostCard from '../components/posts/PostCard'
import UserInfo from '../components/user/UserInfo'

export function ProfilePage () {
  const { userId } = useParams()
  const { user } = useAuth()
  const { getPostsByUser, userPosts, userSettings, getUserSettings } = useUser()
  const [moreUserInfo, setmoreUserInfo] = useState(false)
  const [follow, setFollow] = useState(false)

  useEffect(() => {
    getPostsByUser(userId)
    getUserSettings(userId)
  }, [userId])

  const isCurrentUserProfile = user && user.id === userId

  return (
    <ContentContainer styles={' w-[97%] m-auto'}>
      <div className='md:flex items-center justify-center relative'>
      <img
        className='w-16 h-16 relative left-4 md:left-0 md:h-24 md:w-24 top-6 border-red-600 bg-white border-2 rounded-full'
        src='/nutritionist.png'
        alt={`img profile of ${user?.username}`}
        />
        </div>

      <UserInfo
        moreUserInfo={moreUserInfo}
        setmoreUserInfo={setmoreUserInfo}
        userSettings={userSettings}
        follow={follow}
        isCurrentUserProfile={isCurrentUserProfile}
        setFollow={setFollow}
      />

      {userPosts.map(post => (
        <div key={post._id} className='bg-white rounded-md  shadow '>
          <PostCard post={post} />
        </div>
      ))}
    </ContentContainer>
  )
}
