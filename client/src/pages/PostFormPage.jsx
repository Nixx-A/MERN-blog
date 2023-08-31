import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { ContentContainer } from '../components/ui/ContentContainer'

export function PostFormPage () {
  const [isModalOpen, setisModalOpen] = useState(false)

  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <>
      <div className='z-20 bg-[#f5f5f5] h-14 shadow-sm fixed w-full  duration-150 border-b'>
        <div className='flex justify-between items-center h-full w-[95%] m-auto'>
          <p className='font-semibold'>Create Post</p>
          <div className='flex gap-x-4 items-center'>
            <button className='indigo-hover focus:text-black focus:font-semibold text-gray-600 hover:text-indigo-700 duration-150'>Edit</button>
            <button className='indigo-hover focus:text-black focus:font-semibold text-gray-600 hover:text-indigo-700 duration-150'>Preview</button>
            <AiOutlineClose onClick={() => setisModalOpen(!isModalOpen)} className='relative bottom-1 indigo-hover w-auto h-auto font-semibold' />
          </div>
        </div>
      </div>

      <ContentContainer styles={'pl-4 bg-white w-screen h-screen pt-[80px] mt-0 '}>
        <form className='flex flex-col gap-y-5' onSubmit={handleSubmit(onSubmit)}>

          <div>
            <label className='font-semibold border-2  rounded-md cursor-pointer p-2 relative'>
              Add a cover image
              <input type='file' name='cover-image' className='absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer' />
            </label>
          </div>

          <textarea className='outline-none text-3xl font-bold placeholder:text-gray-600' name="title" id="title" placeholder='New post title here...' />

          <ul>
            <li>
              <select>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
              </select>
            </li>
          </ul>

        </form>
      </ContentContainer>
    </>
  )
}
