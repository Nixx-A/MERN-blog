/* eslint-disable indent */
import React, { useState } from 'react'
import { usePosts } from '../../context/PostsContext'

export const CustomSelect = ({ selectedOptions, setSelectedOptions }) => {
  const { tags } = usePosts()
  const [isOpen, setIsOpen] = useState(false)
  const maxSelections = 4

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleOptionClick = (tagName) => {
    if (selectedOptions.includes(tagName)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== tagName))
    } else if (selectedOptions.length < maxSelections) {
      setSelectedOptions([...selectedOptions, tagName])
    }
  }

  return (
    <div className="relative inline-block w-[98%] m-auto text-left">
      <div>
        <span
          className="rounded-md shadow-sm cursor-pointer gap-x-2 bg-white dark:bg-black dark:border dark:text-white dark:border-white text-gray-700  px-4 py-2 inline-flex items-center"
          onClick={toggleDropdown}
        >
          {selectedOptions.length > 0
            ? (
              selectedOptions.map((tag, index) => (
                <span key={index} className="bg-gray-100 dark:bg-[#171717] rounded px-1.5 py-0.5]">
                  #{tag}
                </span>
              ))
            )
            : (
              'Add up to 4 tags'
            )}
        </span>
        {selectedOptions.length === 4 && <p className='dark:text-white'>You have reached the limit</p>}
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-[95%] m-auto left-0 rounded-md shadow-lg bg-white dark:bg-black first-letter: ring-1 ring-black ring-opacity-5">
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
                  ? 'bg-indigo-200 dark:bg-[#171717] dark:text-indigo-500 text-blue-800'
                  : ''
                  }`}
                role="menuitem"
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
