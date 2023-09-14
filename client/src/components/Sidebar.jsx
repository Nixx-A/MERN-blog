/* eslint-disable react/prop-types */
import { AiFillGithub, AiFillInstagram, AiOutlineClose, AiOutlineTwitter } from 'react-icons/ai'
import { sidebarData } from '../data/SidebarData'

import { Link } from 'react-router-dom'

export default function Sidebar ({ isOpen, setIsOpen }) {
  return (
    <>
      <aside className={`${isOpen ? 'absolute left-0 top-0' : 'absolute left-[-100%] top-0'} flex flex-col  h-screen bg-white w-3/4 md:w-2/4 duration-150 overflow-y-scroll z-10`}>
        <div className='flex  items-center p-2 justify-between'>
          <h2 className='font-semibold text-2xl'>Nixx</h2>
          <AiOutlineClose onClick={() => setIsOpen(!isOpen)} className='cursor-pointer m-2 w-[2.3rem] h-[2.3rem] hover:bg-indigo-400/30 hover:text-indigo-700 rounded p-2 mb-1' />
        </div>

        <div className='grid divide-y-2'>
          {sidebarData.map((item, index) => (
            <Link to={item.path} key={index}>
              <div onClick={() => setIsOpen(!isOpen)} className='flex items-center p-1 hover:bg-indigo-400/30 hover:text-indigo-700 hover:underline rounded'>
                <span className='text-black' >{item.icon}</span>
                <p className=' p-2 my-1'>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className='relative bottom-0 flex'>
          <a href='https://github.com/Nixx-A' target='_blank' className='p-2' rel="noreferrer">
            <AiFillGithub className='social-media' />
          </a>
          <a href='https://twitter.com/Nicolas_Ayan_' target='_blank' className='p-2' rel="noreferrer">
            <AiOutlineTwitter className='social-media' />
          </a>
          <a href='https://www.instagram.com/nicolas.ayan/' target='_blank' className='p-2' rel="noreferrer">
            <AiFillInstagram className='social-media' />
          </a>

          <a></a>
        </div>
      </aside>

    </>
  )
}
