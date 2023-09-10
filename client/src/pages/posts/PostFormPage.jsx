import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { ContentContainer } from '../../components/ui/ContentContainer'
import { usePosts } from '../../context/PostsContext'
import { Link, useNavigate} from 'react-router-dom'
import { CustomSelect } from '../../components/ui/CustomContainer'

export function PostFormPage () {
  const [isModalOpen, setisModalOpen] = useState(false)
  const { getTags, createPost } = usePosts()
  const [selectedOptions, setSelectedOptions] = useState([])

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  // const iconsStyle = 'w-10 h-10 hover:bg-indigo-400/30  hover:text-indigo-700 p-2 rounded cursor-pointer'

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
  }, [])

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

          <textarea className='outline-none text-3xl font-bold placeholder:text-gray-600' name="title" id="title" placeholder='New post title here...' {...register('title')} />

          <CustomSelect selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />

          <textarea name="content" id="content" placeholder='Write your post content here...' {...register('content')}></textarea>

          <button type='submit'>Create post</button>
        </form>
      </ContentContainer>
    </>
  )
}

// eslint-disable-next-line no-lone-blocks
{ /*   <div className='flex items-center gap-x-3 bg-gray-100/70 -ml-4'>  next update :) because idk how to do it now and i'm a little tired of this project, i'm working on it about 3 weeks, so i want to finish it as soon as possible
  <markdown-toolbar for="content">
    <md-bold><AiOutlineBold className={`${iconsStyle} ml-2`} /></md-bold>
    <md-italic><AiOutlineItalic className={iconsStyle} /></md-italic>
    <md-code><AiOutlineCode className={iconsStyle} /></md-code>
    <md-link><AiOutlineLink className={iconsStyle} /></md-link>
    <md-image><BiSolidImage className={iconsStyle} /></md-image>
    <md-unordered-list><AiOutlineUnorderedList className={iconsStyle} /></md-unordered-list>
    <md-ordered-list><AiOutlineOrderedList className={iconsStyle} /></md-ordered-list>
  </markdown-toolbar>
</div> */ }
