/* eslint-disable react/prop-types */
import { useAuth } from '../../context/AuthContext'
import { ListImgSidebar } from './ListImgSidebar'

export default function ImgSidebar ({ setIsOpen }) {
  const { user } = useAuth()

  return (
    <>
      <ul
        className={
          'absolute top-16 w-[95%] m-auto right-0 left-0 shadow-md md:right-8  h-auto md:w-auto md:left-[70%] lg:left-[80%] break-before-avoid-page  bg-white rounded-md p-4'
        }>
        <ListImgSidebar link={`/profile/${user?.id}`} text={user?.username} styles={'border-b p-1 font-semibold'} setIsOpen={setIsOpen} />
        <ListImgSidebar link={'new'} text={'Create Post'} setIsOpen={setIsOpen} />
        <ListImgSidebar link={'settings/profile'} text={'Settings'} setIsOpen={setIsOpen} />
        <ListImgSidebar link={'signout-confirm'} text={'Sign out'} setIsOpen={setIsOpen} />
      </ul >
    </>
  )
}
