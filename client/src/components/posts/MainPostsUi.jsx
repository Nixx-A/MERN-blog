import { TagSidebar } from '../tags/TagSidebar'
import Sidebar from '../ui/Sidebar'

export function MainPostsUi ({ children }) {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        {children}
      </div>
        <TagSidebar />
    </div>
  )
}
