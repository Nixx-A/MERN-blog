import { useEffect } from 'react'
import { usePosts } from '../context/PostsContext'
import { Link, useLocation } from 'react-router-dom'
import { ContentContainer } from '../components/ui/ContentContainer'

export function Posts () {
  const { posts, getPosts } = usePosts()
  const location = useLocation()

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <ContentContainer>
      <div>
        {posts.length === 0 && <h1>No posts</h1>}
      </div>
      <div>
        <ul className='flex gap-x-4 ml-2 mb-2 '>
          <li><Link className='hover:bg-gray-50 focus:font-semibold hover:text-indigo-800 p-2 rounded' autoFocus to='/'>Relevant</Link></li>
          <li><Link className='hover:bg-gray-50 focus:font-semibold hover:text-indigo-800 p-2 rounded' to='/latest'>Latest</Link></li>
          <li><Link className='hover:bg-gray-50 focus:font-semibold hover:text-indigo-800 p-2 rounded' to='/top-week'>Top</Link></li>
        </ul>
        {
          location.pathname === '/' &&
          posts.map((post) => (
            console.log(post)
          ))
        }
        {location.pathname === '/latest' && <p>Lates</p>}
        {location.pathname === '/top-week' && <p>Top</p>}

      </div>
    </ContentContainer>
  )
}
