import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { ContentContainer } from '../../components/ui/ContentContainer'
import { usePosts } from '../../context/PostsContext'
import { Link, useNavigate } from 'react-router-dom'
import { CustomSelect } from '../../components/ui/CustomContainer'
import { zodResolver } from '@hookform/resolvers/zod'
import { postSchema } from '../../schemas/post'

export function PostFormPage () {
  const [isModalOpen, setisModalOpen] = useState(false)
  const { getTags, createPost } = usePosts()
  const [selectedOptions, setSelectedOptions] = useState([])

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(postSchema) })
  const navigate = useNavigate()

  const onSubmit = async data => {
    try {
      const alteredData = { ...data, tags: selectedOptions }
      console.log(alteredData)
      createPost(alteredData)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTags()
    console.log(errors)
  }, [errors])

  return (
    <>
      <div className='z-20 bg-[#f5f5f5] h-14 shadow-sm fixed w-full  duration-150 border-b'>
        <div className='flex justify-between items-center h-full w-[95%] m-auto'>
          <p className='font-semibold'>Create Post</p>
          <div className='flex gap-x-4 items-center'>
            <button className='indigo-hover focus:text-black focus:font-semibold text-gray-600 hover:text-indigo-700 duration-150'>Edit</button>
            <button className='indigo-hover focus:text-black focus:font-semibold text-gray-600 hover:text-indigo-700 duration-150'>Preview</button>
            <Link to='/'><AiOutlineClose onClick={() => setisModalOpen(!isModalOpen)} className='relative bottom-1 indigo-hover w-auto h-auto font-semibold' /></Link>
          </div>
        </div>
      </div>

      <ContentContainer styles={'pl-4 bg-white w-[98%]  h-full rounded-md shadow pt-[80px] mt-0 '}>
        <form className='flex flex-col gap-y-5' onSubmit={handleSubmit(onSubmit)}>

          <div>
            <label className='font-semibold border-2  rounded-md cursor-pointer p-2 relative'>
              Add a cover image
              <input type='file' name='cover-image' className='absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer' />
            </label>
          </div>

          {errors.title && <p className="text-red-500">{errors.title?.message}</p>}
          <textarea className='outline-none text-3xl font-bold placeholder:text-gray-600 focus:border-none' autoFocus name="title" id="title" placeholder='New post title here...' {...register('title')} />

          <CustomSelect selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />

          {errors.content && <p className="text-red-500">{errors.content?.message}</p>}
          <textarea name="content" id="content" placeholder='Write your post content here...' {...register('content')}></textarea>

          <div>
            <button className='text-start bg-[#2f3ab2] text-white hover:bg-blue-900 duration-100 px-2 py-1 rounded' type='submit'>Publish</button>
          </div>
        </form>
      </ContentContainer>
    </>
  )
}
