import { Link } from 'react-router-dom'
import { ContentContainer } from '../components/ui/ContentContainer'
import { useAuth } from '../context/AuthContext'
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal, BiSolidCake } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { formatProfileDate } from '../utils/dateUtils'
import { useEffect } from 'react'
import { usePosts } from '../context/PostsContext'

export function ProfilePage () {
  const { user } = useAuth()
  const { getPostsByUser, userPosts } = usePosts()

  console.log(user)
  console.log(userPosts)
  const formattedDate = formatProfileDate(user.data_registered)

  useEffect(() => {
    getPostsByUser(user.id)
  }, [])

  return (
    <ContentContainer>
      <img
        className='w-16 h-16 relative left-4 top-6 border-red-600 bg-white border-2 rounded-full'
        src='/nutritionist.png'
        alt={`img profile of ${user?.username}`}
      />

      <div className='bg-white rounded-sm w-[97%] m-auto'>

        <div className='flex ml-auto justify-end mr-8'>
          <button className='indigo-btn'>
            <Link to='/settings'>Edit Profile</Link>
          </button>
        </div>

        <h3 className='font-semibold '>{user?.username}</h3>
        <p>bio</p>

        <div className='flex flex-col md:flex-row gap-2 mt-6'>
          <p className=' text-gray-500 hover:text-indigo-700 duration-150'><BiLinkExternal /></p>
          <MdLocationOn color='gray' />
          <p className='flex items-center'><BiSolidCake color='gray' />Joined on {formattedDate}</p>
          <div>
            <Link className='inline-block text-gray-500 hover:text-indigo-700 hover:scale-105 transform transition-transform duration-300'><AiFillGithub /></Link>
          </div>
        </div>
      </div>
    </ContentContainer>
  )
}
