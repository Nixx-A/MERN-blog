/* eslint-disable react/prop-types */
import { AiFillGithub, AiFillInstagram, AiOutlineClose, AiOutlineTwitter } from 'react-icons/ai'
import { sidebarData } from '../../data/SidebarData'
import { Link } from 'react-router-dom'

export default function Sidebar ({ isOpen, setIsOpen }) {
  // Add a conditional check to ensure setIsOpen is a function
  const toggleSidebar = () => {
    if (typeof setIsOpen === 'function') {
      setIsOpen(!isOpen)
    }
  }

  return (
    <>
      <aside className={`${isOpen ? 'absolute left-0 top-0' : 'absolute left-[-100%] top-0'} md:block md:relative md:ml-12 md:overflow-hidden md:left-0 md:mr-2 md:bg-[#efefef] flex flex-col  h-screen bg-white dark:bg-black w-3/4 md:w-2/6 duration-150 overflow-y-scroll z-10`}>
        <div className='flex items-center p-2 justify-between md:hidden'>
          <h2 className='font-semibold text-2xl'>Nixx</h2>
          <AiOutlineClose onClick={toggleSidebar} className='cursor-pointer m-2 w-[2.3rem] h-[2.3rem] hover:bg-indigo-400/30 hover:text-indigo-700 rounded p-2 mb-1' />
        </div>

        <div className='grid divide-y-2 dark:divide-y-0'>
          {sidebarData.map((item, index) => (
            <Link to={item.path} key={index}>
              <div onClick={toggleSidebar} className='flex items-center p-1 hover:bg-indigo-400/30 hover:text-indigo-500 hover:underline rounded'>
                <span className='text-black dark:text-white'>{item.icon}</span>
                <p className='p-2 my-1'>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className='relative bottom-0 flex'>
          <a href='https://github.com/Nixx-A' target='_blank' className='p-2' rel="noreferrer">
            <AiFillGithub className='social-media dark:text-white' />
          </a>
          <a href='https://twitter.com/Nicolas_Ayan_' target='_blank' className='p-2' rel="noreferrer">
            <AiOutlineTwitter className='social-media dark:text-white' />
          </a>
          <a href='https://www.instagram.com/nicolas.ayan/' target='_blank' className='p-2' rel="noreferrer">
            <AiFillInstagram className='social-media dark:text-white' />
          </a>
          <a></a>
        </div>
      </aside>
    </>
  )
}
