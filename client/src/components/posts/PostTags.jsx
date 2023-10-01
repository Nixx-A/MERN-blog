import React from 'react'
import { Link } from 'react-router-dom'

export default function PostTags ({ tags }) {
  const isTag = tags[0]?.name
  if (!isTag) return null

  return (
    <div className='flex flex-wrap min-h'>
      {tags.map(tag => (
        <Link
          className='hover:text-black text-gray-800   hover:bg-gray-100  px-1.5 py-0.5 hover:border-gray-300 border duration-150 border-transparent rounded'
          to={`/tag/${tag._id}/${tag.name}`}
          key={tag._id}>
          #{tag.name}
        </Link>
      ))}
    </div>
  )
}
