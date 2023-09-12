import { ContentContainer } from '../components/ui/ContentContainer'

export function Podcasts () {
  return (
    <ContentContainer styles={'ml-4'}>
      <h2 className='text-3xl font-bold mb-4'>Podcasts</h2>
      <p className='text-2xl font-bold'>Latest episodes</p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 w-[95%] m-auto gap-4 mt-6 pb-4'>

        <div className='bg-white rounded  shadow hover:text-indigo-800 hover:shadow-md cursor-pointer '>
          <img src="/podcast-background.jpg" className='rounded w-full h-auto ' alt="" />
          <p className='font-semibold text-sm mt-1 mx-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. as quis dolore soluta ducimus. Sequi!</p>
          <small className='mx-3 text-gray-500' >Lorem ipsum dolor sit amet.</small>
        </div>

        <div className='bg-white rounded  shadow hover:text-indigo-800 hover:shadow-md cursor-pointer'>
          <img src="/podcast-background.jpg" className='rounded w-full h-auto ' alt="" />
          <p className='font-semibold text-sm mt-1 mx-3'>Lorem ipsum dolor sit amet consectetur adipisicing s voluptate eius atque vitae ratione.</p>
          <small className='mx-3 text-gray-500'>Lorem ipsum dolor sit amet.</small>
        </div>

        <div className='bg-white rounded  shadow hover:text-indigo-800 hover:shadow-md cursor-pointer'>
          <img src="/podcast-background.jpg" className='rounded w-full h-auto ' alt="" />
          <p className='font-semibold text-sm mt-1 mx-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, ue dolore ab dolorem.</p>
          <small className='mx-3 text-gray-500'>Lorem, ipsum.</small>
        </div>

        <div className='bg-white rounded  shadow hover:text-indigo-800 hover:shadow-md cursor-pointer'>
          <img src="/podcast-background.jpg" className='rounded w-full h-auto ' alt="" />
          <p className='font-semibold text-sm mt-1 mx-3'>Lorem, ipsum dolor sit amet consectetur adipisicingcessitatibus.</p>
          <small className='mx-3 text-gray-500'>Lorem ipsum dolor sit amet.</small>
        </div>

      </div>
    </ContentContainer>
  )
}
