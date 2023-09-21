import { ContentContainer } from '../../components/ui/ContentContainer'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Label } from '../../components/ui/Label'

export function SettingsPage () {
  const { user } = useAuth()
  const navigate = useNavigate()
  const {
    register, handleSubmit, formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  })

  console.log(user)

  const handleOptionChange = (e) => {
    e.target.value === 'Profile' ? navigate(`/${user.username}`) : navigate('/settings/customization')
  }

  return (
    <ContentContainer styles={'w-[95%] m-auto'}>
      <select onChange={handleOptionChange} className='mb-6 w-[95%] rounded-md focus:border-blue-500 py-2 border-gray-300 border'>
        <option value="Profile">Profile</option>
        <option value="Customization">Customization</option>
      </select>

      <Link to={`/${user.username}`} className='text-indigo-700 font-semibold text-lg '>@{user.username}</Link>

      {/* Form section */}
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-white rounded '>

          <h3 className='font-bold text-2xl p-1'>User</h3>

          <div className='w-[95%] m-auto mt-6 pb-2'>
            <Label htmlFor="username">Username</Label>
            <input type='text' name='username' placeholder='Write your username' value={user.username} className='mt-1 block border hover:border-gray-600 duration-150 px-2 py-1.5 rounded focus:border-blue-500 outline-none' {...register('username')} />

            <Label htmlFor="email">email</Label>
            <input type='text' name='email' placeholder='Write your email' value={user.email} className='mt-1 block border hover:border-gray-600 duration-150 px-2 py-1.5 rounded focus:border-blue-500 outline-none' />

            <Label htmlFor={'profile-image'}>Profile Image</Label>
            <input className='file:rounded file:outline-none file:border-0 file:p-1.5 file:bg-gray-200 file:hover:bg-gray-300  border hover:border-gray-600 duration-150 rounded p-2' type="file" name="profile-image" {...register('profile-image')} />
          </div>
        </div>

        <div className="bg-white rounded">
          <h3 className='font-bold text-2xl p-1'>Basic</h3>

          <div className='w-[95%] m-auto mt-6 pb-2'>
            <Label htmlFor='website-url'>Website URL</Label>
            <input type='text' name='website-url' placeholder='https://yourwebsite.com' className='mt-1 block border hover:border-gray-600 duration-150 px-2 py-1.5 rounded focus:border-blue-500 outline-none' {...register('website_url')} />

            <Label htmlFor='location'>Location</Label>
            <input type='text' name='location' placeholder='Location' className='mt-1 block border hover:border-gray-600 duration-150 px-2 py-1.5 rounded focus:border-blue-500 outline-none' {...register('location')} />

            <Label htmlFor='bio'>Bio</Label>
            <input type='text' name='bio' placeholder='A short bio...' className='mt-1 block border hover:border-gray-600 duration-150 px-2 py-1.5 rounded focus:border-blue-500 outline-none' {...register('bio')} />
          </div>
        </div>

        <div className="bg-white rounded">
          <h3 className='font-bold text-2xl p-1'>Coding</h3>

          <div className='w-[95%] m-auto mt-6 pb-2'>

            <Label htmlFor='currently-learning'>Currently learning</Label>
            <p className='text-sm font-thin'>What are you learning right now? What are the new tools and languages you are picking up right now?</p>
            <textarea name='currently-learning' className='mt-1 block border hover:border-gray-600 duration-150 px-2 py-1.5 rounded focus:border-blue-500 outline-none' rows={1} {...register('currently_learning')} />

            <Label htmlFor={'available-for'}>Available for</Label>
            <p className="What kinds of collaborations or discussions are you available for? What's a good reason to say Hey! to you these days?">What kinds of collaborations or discussions are you available for? What is a good reason to say Hey! to you these days?</p>
            <textarea name='available-for' className='mt-1 block border hover:border-gray-600 duration-150 px-2 py-1.5 rounded focus:border-blue-500 outline-none' rows={1} {...register('available_for')} />

            <Label htmlFor={'skills-languages'}>Skills/Languages</Label>
            <p className='text-sm font-thin'>What tools and languages are you most experienced with? Are you specialized or more of a generalist?</p>
            <textarea name='skills-languages' className='mt-1 block border hover:border-gray-600 duration-150 px-2 py-1.5 rounded focus:border-blue-500 outline-none' rows={1} {...register('skills_languages')} placeholder='Any skills or languages you want to highlight' />
          </div>
        </div>
      </form>

    </ContentContainer>

  )
}
