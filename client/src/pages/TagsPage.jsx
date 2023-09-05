import { useEffect } from 'react'
import { ContentContainer } from '../components/ui/ContentContainer'
import { usePosts } from '../context/PostsContext'
import { TagCard } from '../components/tags/TagCard'

export function TagsPage () {
  const { getTags, tags } = usePosts()

  useEffect(() => {
    getTags()
  }, [])

  return (
    <ContentContainer>
      <div className=' w-[80%] m-auto'>
        <h1 className='text-3xl font-bold'>Tags</h1>
        <div className='grid gap-4 mt-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-1'>

          {tags.map((tag) => (
            <TagCard tag={tag} key={tag._id} />
          ))}
        </div>
      </div>
    </ContentContainer>
  )
}
