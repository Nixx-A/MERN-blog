import { Link } from 'react-router-dom'
import { ContentContainer } from '../components/ui/ContentContainer'
export function Error404 () {
  return (
    <ContentContainer>
      <div className="text-white flex items-center justify-center flex-col gap-2">
        <img className='w-[40%] mt-8' src='/404.svg' alt='404 page'/>
        <p className="text-2xl ">Not Found Page</p>
        <Link className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500" to='/'>Go home</Link>
      </div>
    </ContentContainer>
  )
}
