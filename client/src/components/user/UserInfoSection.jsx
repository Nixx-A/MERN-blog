import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal, BiSolidCake } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'

export function UserInfoSection ({ userSettings, formattedDate }) {
  return (
    <div className='w-[95%] m-auto mb-4 dark:text-white'>
      <h3 className='font-bold text-xl md:text-center'>{userSettings?.user?.username}</h3>
      <p className='mt-2 text-gray-800 md:text-center dark:text-white'>{userSettings.bio}</p>

      <div className='md:flex justify-center flex-wrap'>
        <div className='flex flex-col md:flex-row gap-6 mt-6'>
          {userSettings.location &&
            <div className='flex items-center'>
              <MdLocationOn className='w-6 h-6' color='gray' />
              <p className='font-light'>{userSettings.location}</p>
            </div>
          }

          <div className='flex items-center'>
            <BiSolidCake className='w-6 h-6' color='gray' />
            <p className='font-light'> Joined on {formattedDate}</p>
          </div>

          {userSettings.website_url &&
            <a href={userSettings.website_url} target='_blank' className=' flex items-center cursor-pointer text-gray-600 dark:text-white  hover:text-indigo-700 duration-200' rel="noreferrer">
              <BiLinkExternal className='w-6 h-6 p-1 ' />
              {userSettings.website_url}
            </a>
          }

          {userSettings.github &&
            <a href={userSettings.github} target='_blank' className='inline-flex w-min cursor-pointer ' rel='noreferrer'>
              <AiFillGithub className='w-6 h-6 text-gray-500 hover:text-indigo-700 duration-300 inline-flex' />
            </a>
          }
        </div>

      </div>
    </div >
  )
}
