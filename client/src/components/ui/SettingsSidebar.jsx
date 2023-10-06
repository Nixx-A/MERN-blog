import { Link } from 'react-router-dom'
import { FcSettings } from 'react-icons/fc'

export function SettingsSidebar () {
  return (
    <div className="hidden md:flex flex-col divide-y-0 mt-12">

      <Link className='flex items-center hover:bg-indigo-400/30 hover:text-indigo-700 dark:hover:text-indigo-500 gap-1 p-0.5 rounded ' to={'/settings/profile'}>
        <p>🙂</p>
        <p>Profile</p>
      </Link>

      <Link className='flex items-center hover:bg-indigo-400/30 hover:text-indigo-700 dark:hover:text-indigo-500 gap-1 p-0.5 rounded ' to={'/settings/customization'}>
        <FcSettings />
        <p>Customization</p>
      </Link>
    </div>
  )
}
