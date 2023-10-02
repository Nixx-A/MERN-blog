import { AiFillHome, AiFillTags } from 'react-icons/ai'
import { PiMicrophoneLight } from 'react-icons/pi'
import { FaLightbulb } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'

const iconStyles = 'w-6 h-6'

export const sidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome className={iconStyles} />,
    cName: 'nav-text'
  },
  /*  {
    title: 'Search',
    path: '/search',
    icon: <AiOutlineSearch className={iconStyles} />,
    cName: 'nav-text'
  }, */
  {
    title: 'Podcasts',
    path: '/podcasts',
    icon: <PiMicrophoneLight className={iconStyles} />,
    cName: 'nav-text'
  },
  {
    title: 'Tags',
    path: '/tags',
    icon: <AiFillTags className={iconStyles} />,
    cName: 'nav-text'
  },
  {
    title: 'FAQ',
    path: '/faq',
    icon: <FaLightbulb className={iconStyles} />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <FcAbout className={iconStyles} />,
    cName: 'nav-text'
  }
]
