import { IoMdPaper } from 'react-icons/io'
import { FollowButton } from './FollowButton'
import { ExtraUserInfo } from './ExtraUserInfo'
import { MoreUserInfoButton } from './MoreUserInfoButton'
import { UserInfoSection } from './UserInfoSection'
import { formatProfileDate } from '../../utils/dateUtils'
import { useUser } from '../../context/UserContext'

export default function UserInfo ({ userSettings, setmoreUserInfo, moreUserInfo, setFollow, follow, isCurrentUserProfile }) {
  const { userPosts } = useUser()
  const formattedDate = formatProfileDate(userSettings?.user?.data_registered)
  return (
    <div className='bg-white rounded-sm mb-8'>
      <FollowButton setFollow={setFollow} follow={follow} isCurrentUserProfile={isCurrentUserProfile} />

      <UserInfoSection formattedDate={formattedDate} userSettings={userSettings} />

      {!moreUserInfo && <MoreUserInfoButton username={userSettings?.user?.username} setmoreUserInfo={setmoreUserInfo} />}

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
    </div >
  )
}
