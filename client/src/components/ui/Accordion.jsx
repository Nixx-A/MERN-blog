import { useEffect, useRef, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

export function Accordion ({ question, answer }) {
  const [active, setActive] = useState(false)

  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : '0px'
  }, [contentRef, active])

  const toggleAccordion = () => {
    setActive(!active)
  }
  return (
    <>
      <div className='mb-[5px] w-full flex justify-center'>
          <button
            className={`p-2 border-gray-100 rounded-md dark:bg-black shadow-md cursor-pointer w-[98%]  md:w-[65%]  ${active}`}
            onClick={toggleAccordion}>
            <div className=''>
              <div className='flex items-center min-h-[20px] text-left  hover:text-indigo-700 dark:hover:text-indigo-500'>
                <h4 className='ml-2'>{question}</h4>
                <FiPlus
                  className={active ? 'question-icon rotate' : 'question-icon'}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? 'answer answer-divider' : 'answer'}>
                <p>{answer}</p>
              </div>
            </div>
          </button>
      </div>
    </>
  )
}
