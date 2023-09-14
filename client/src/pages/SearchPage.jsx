import { BiSearch } from 'react-icons/bi'
import { ContentContainer } from '../components/ui/ContentContainer'
import { Posts } from './posts/Posts'

export function SearchPage () {
  return (
    <ContentContainer>
      <form className='flex items-center justify-center w-[80%] m-auto'>
        <input type="text" autoComplete='false' className=' w-full border py-1.5 px-2  border-gray-300  rounded-md focus:border-gray-600 outline-none placeholder:text-gray-700' placeholder='Search...' />
        <button className='w-6 h-6'><BiSearch className='relative right-[calc(100%-(-8px))] w-6 h-6' /></button>
      </form>

      <Posts />
    </ContentContainer>
  )
}
