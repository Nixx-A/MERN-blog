import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export function TagCard ({ tag }) {
  const [isFollowing, setIsFollowing] = useState(false)
  const navigate = useNavigate()

  const { user } = useAuth()

  const handleFollow = async () => {
    if (!user) return navigate('/login')
    setIsFollowing(!isFollowing)
  }

  return (
    <div key={tag._id} className='bg-white dark:bg-[#171717] font-semibold pt-4 px-3 rounded-md shadow'>

      <Link to={`/tag/${tag._id}/${tag.name}`}>
        <div className='flex gap-x-2 items-center justify-between'>
          <p>#{tag.name}</p>
          <p className='text-gray-600 text-sm font-normal'>{tag.postIds.length} posts</p>
        </div>
      </Link>

      <div className='flex items-center'>
        <button onClick={handleFollow} className={`relative left-0 top-0 ${isFollowing ? 'bg-gray-100 dark:bg-black dark:text-white my-4 px-4 py-1 inline-block border-gray-200 border-2 text-black rounded' : 'my-4 py-1 inline-block text-white rounded bg-blue-600 hover:bg-blue-700 duration-150 transition-colors px-4 border-2 border-transparent '}`}>{isFollowing ? 'Following' : 'Follow'}</button>
        <button className='hover:bg-gray-200 px-2 py-1.5 rounded dark:hover:bg-black'>Hide</button>
      </div>
    </div>
  )
}
