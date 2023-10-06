import { ContentContainer } from '../components/ui/ContentContainer'
import { PodcastCard } from '../components/ui/PodcastCard'

export function Podcasts () {
  return (
    <ContentContainer styles={'ml-4'}>
      <h2 className='text-3xl font-bold mb-4'>Podcasts</h2>
      <p className='text-2xl font-bold'>Latest episodes</p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 w-[95%] m-auto gap-4 mt-6 pb-4'>

        <PodcastCard title={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} subtitle={'Lorem ipsum dolor sit amet'} />
        <PodcastCard title={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, ue dolore ab dolorem.'} subtitle={'Lorem, ipsum.'} />
        <PodcastCard title={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, ue dolore ab dolorem.'} subtitle={'Lorem, ipsum.'} />
        <PodcastCard title={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, ue dolore ab dolorem.'} subtitle={'Lorem, ipsum.'}/>

      </div>
    </ContentContainer>
  )
}
