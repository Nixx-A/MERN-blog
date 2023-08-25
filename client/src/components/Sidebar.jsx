/* eslint-disable react/prop-types */
import { AiFillGithub, AiFillInstagram, AiOutlineClose, AiOutlineTwitter } from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'

export default function Sidebar ({ isOpen, setIsOpen }) {
  return (
    <>
      <aside className={`${isOpen ? 'absolute left-0 top-0' : 'absolute left-[-100%] top-0'} flex flex-col  h-screen bg-white w-2/4 duration-150 overflow-y-scroll`}>
        <div className='flex border-b items-center p-2 justify-between'>
          <h2 className='font-semibold text-2xl'>Nixx</h2>
          <AiOutlineClose onClick={() => setIsOpen(!isOpen)} className='cursor-pointer m-2 w-[2.3rem] h-[2.3rem] hover:bg-indigo-400/30 rounded p-2 mb-1' />
        </div>
        {SidebarData.map((item, index) => (
          <Link to={item.path} key={index}>
            <div className='flex items-center p-1 hover:bg-indigo-400/30 rounded'>
              <span >{item.icon}</span>
              <p className=' p-2 my-1'>{item.title}</p>
            </div>
          </Link>
        ))}
        <div className='relative bottom-0 flex'>
          <a href='https://github.com/Nixx-A' target='_blank' className='p-2' rel="noreferrer">
            <AiFillGithub className='h-[20px] w-[20px] text-gray-500 hover:text-gray-700 hover:scale-105 transform transition-transform duration-300' />
          </a>
          <a href='https://twitter.com/Nicolas_Ayan_' target='_blank' className='p-2' rel="noreferrer">
            <AiOutlineTwitter className='h-[20px] w-[20px] text-gray-500 hover:text-gray-700 hover:scale-105 transform transition-transform duration-300' />
          </a>
          <a href='https://www.instagram.com/nicolas.ayan/' target='_blank' className='p-2' rel="noreferrer">
            <AiFillInstagram className='h-[20px] w-[20px] text-gray-500 hover:text-gray-700 hover:scale-105 transform transition-transform duration-300' />
          </a>

          <a></a>
        </div>
      </aside>

    </>
  )
}
