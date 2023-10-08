import { Link, useLocation } from 'react-router-dom'
import { FcSettings } from 'react-icons/fc'

export function SettingsSidebar () {
  const { pathname } = useLocation()

  return (
    <div className="hidden md:flex flex-col lg:w-[30%] items-end divide-y-0 mt-12">

      <div >
        <Link className={`flex items-center hover:bg-indigo-400/30 hover:text-indigo-700 dark:hover:text-indigo-500 gap-1 p-1 rounded duration-150  ${pathname === '/settings/profile' ? 'bg-indigo-200/50 dark:bg-indigo-200/10' : ''}`} to={'/settings/profile'}>
          <p className='text-lg'>🙂 Profile</p>
        </Link>

        <Link className={`flex items-center hover:bg-indigo-400/30 hover:text-indigo-700 dark:hover:text-indigo-500 gap-1 p-1 rounded duration-150 ${pathname === '/settings/customization' ? 'bg-indigo-200/50 dark:bg-indigo-200/10' : ''}`} to={'/settings/customization'}>
          <FcSettings />
          <p className='text-lg'>Customization</p>
        </Link>
      </div>
    </div>
  )
}
