import { BiSearch } from 'react-icons/bi'
import { ContentContainer } from '../components/ui/ContentContainer'

export function SearchPage () {
  return (
    <ContentContainer>
      <form className='flex items-center justify-center w-[80%] m-auto'>
        <input type="text" autoComplete='false' className=' w-full border py-1.5 px-2 text-black border-gray-300  rounded-md focus:border-gray-600 outline-none placeholder:text-gray-700' placeholder='Search...' />
        <button className='w-6 h-6'><BiSearch className='relative right-[calc(100%-(-8px))] w-6 h-6' /></button>
      </form>

<p className='text-center font-semibold mt-8'>No feature of search yet :(</p>
    </ContentContainer>
  )
}
