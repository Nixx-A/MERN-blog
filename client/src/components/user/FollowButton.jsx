import { Link } from 'react-router-dom'

export function FollowButton ({ isCurrentUserProfile, follow, setFollow }) {
  return (
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
  )
}
