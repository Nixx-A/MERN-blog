import React, { useState } from 'react'
import { usePosts } from '../context/PostsContext'

export const CustomSelect = ({ selectedOptions, setSelectedOptions}) => {
  const { tags } = usePosts()

  const [isOpen, setIsOpen] = useState(false)

  const maxSelections = 4

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (tag) => {
    if (selectedOptions.includes(tag)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== tag))
    } else if (selectedOptions.length < maxSelections) {
      setSelectedOptions([...selectedOptions, tag])
    }
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <span
          className="rounded-md shadow-sm cursor-pointer gap-x-2 bg-white text-gray-700 border border-none px-4 py-2 inline-flex items-center"
          onClick={toggleDropdown}
        >
          {selectedOptions.length > 0
            ? selectedOptions.map((tag, index) => (
              <span key={index} className='bg-gray-100 rounded px-1.5 py-0.5'>
                #{tag}
                {index < selectedOptions.length - 1 && ' '}
              </span>
            ))
            : 'Add up to 4 tags'}

        </span>
        {selectedOptions.length > 4 && <p>You can only select 4 tags</p>}

      </div>
      {
        isOpen && (
          <div className="absolute  mt-2 w-[95%] m-auto  left-0  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {tags.map((tag) => (
                <p
                  key={tag._id}
                  onClick={() => handleOptionClick(tag.name)}
                  className={`block px-4 py-2 text-sm cursor-pointer ${selectedOptions.includes(tag.name)
                    ? 'bg-indigo-200 text-blue-800'
                    : ''
                    }`}
                  role="menuitem"
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        )
      }
    </div >
  )
}
