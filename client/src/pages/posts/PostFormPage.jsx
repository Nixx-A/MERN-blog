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
  const { getTags, createPost } = usePosts()
  const [selectedOptions, setSelectedOptions] = useState([])
  const [selectedImg, setSelectedImg] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = async data => {
    try {
      const coverImage = data.coverImage[0]
      console.log(coverImage)
      const alteredData = { ...data, tags: selectedOptions }
      console.log(data)
      // createPost(alteredData)
      // navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTags()
  }, [])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    console.log(file)
    console.log(selectedImg)
    if (file) {
      const imgUrl = URL.createObjectURL(file)
      console.log(imgUrl)
      setSelectedImg(imgUrl)
    }
  }

  return (
    <>
      <div className='z-50 bg-[#f5f5f5] dark:bg-[#171717] dark:border-black h-14 shadow-sm fixed w-full  duration-150 border-b'>
        <div className='flex justify-between items-center h-full w-[95%] m-auto'>
          <p className='font-semibold'>Create Post</p>
          <div className='flex gap-x-4 items-center'>
            <button className='indigo-hover focus:text-black focus:font-semibold text-gray-600 hover:text-indigo-700 duration-150 dark:text-white dark:hover:text-indigo-600'>
              Edit
            </button>
            <button className='indigo-hover focus:text-black focus:font-semibold text-gray-600 hover:text-indigo-700 duration-150 dark:text-white dark:hover:text-indigo-600'>
              Preview
            </button>
            <Link to='/'>
              <AiOutlineClose
                className='relative bottom-1 indigo-hover w-auto h-auto font-semibold'
              />
            </Link>
          </div>
        </div>
      </div>

      <ContentContainer
        styles={
          'pl-4 bg-white w-[98%] lg:m-auto lg:w-[80%] dark:bg-[#171717] pb-12 rounded-md shadow pt-[80px] lg:mt-20 '
        }>
        <form
          className='flex flex-col gap-y-5'
          onSubmit={handleSubmit(onSubmit)}>

          Add a cover image
          <input
            accept='image/*'
            type='file'
            name='coverImage'
            className=' cursor-pointer'
            onChange={handleImageChange}
            {...register('coverImage')}
          />
          {selectedImg && <img src={selectedImg} />}

          {errors.title && <p className='text-red-500'>{errors.title?.message}</p>}
          <textarea
            className='outline-none text-3xl font-bold placeholder:text-gray-600 w-[98%] m-auto dark:bg-black dark:text-white dark:placeholder:text-gray-300 dark:border-black dark:focus:border-indigo-600dark:focus:border  dark:rounded dark:p-2 '
            autoFocus
            name='title'
            id='title'
            placeholder='New post title here...'
            {...register('title')}
          />

          <CustomSelect
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />

          {errors.content && <p className='text-red-500'>{errors.content?.message}</p>}
          <textarea
            name='content'
            className='outline-none dark:bg-black dark:text-white w-[98%] dark:p-2 m-auto dark:placeholder:text-gray-300 dark:border dark:border-black dark:rounded dark:focus:border-indigo-600'
            id='content'
            placeholder='Write your post content here...'
            {...register('content')}></textarea>

          <div>
            <button
              className='text-start bg-[#2f3ab2] text-white hover:bg-blue-900 duration-100 px-2 py-1 rounded'
              type='submit'>
              Publish
            </button>
          </div>

        </form>
      </ContentContainer>
    </>
  )
}
