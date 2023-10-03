import { useEffect } from 'react'
import { usePosts } from '../../context/PostsContext'
import { Link } from 'react-router-dom'

export function TagSidebar () {
  const { getTags, tags } = usePosts()

  useEffect(() => {
    getTags()
  }, [])

  return (
    <div className='hidden md:flex justify-center mt-4 w-[40%]' >
      <div className='p-2 m-1 w-full rounded'>
        <div className='bg-white dark:bg-[#171717] p-2 rounded w-full  duration-100'>

          <h3 className='text-2xl font-semibold mb-2'>Tags</h3>
          {tags.map(tag => (
            <div key={tag._id} className='flex gap-x-1 flex-wrap items-center border-b p-2 hover:text-indigo-600 duration-150 last:border-none'>
              <Link to={`/tag/${tag._id}/${tag.name}`}>#{tag.name}</Link>
              <p>({tag.postIds.length}) </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
