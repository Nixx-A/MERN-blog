import { ContentContainer } from '../../components/ui/ContentContainer'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Label } from '../../components/ui/Label'
import ControlledInput from '../../components/ui/ControlledInput'
import ControlledTextarea from '../../components/ui/ControlledTextarea'

export function SettingsPage () {
  const { user } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    control
  } = useForm()

  const onSubmit = handleSubmit(async values => {
    try {
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  })

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
            <ControlledInput name='username' placeholder='Write your username' label={'username'} value={user.username} control={control} defaultValue={user.username} />

            <ControlledInput name={'email'} placeholder='Write your email' label={'email'} value={user.email} control={control} defaultValue={user.email} />

            <Label htmlFor={'profile-image'}>Profile Image</Label>
            <input className='file:rounded file:outline-none file:border-0 file:p-1.5 file:bg-gray-200 file:hover:bg-gray-300  border hover:border-gray-600 duration-150 rounded p-2' type="file" name="profile-image" {...register('profile-image')} />
          </div>
        </div>

        <div className="bg-white rounded">
          <h3 className='font-bold text-2xl p-1'>Basic</h3>

          <div className='w-[95%] m-auto mt-6 pb-2'>
            <ControlledInput name={'website-url'} placeholder='https://yourwebsite.com' label={'website-url'} value={user.website_url} control={control} defaultValue={user.website_url} />

            <ControlledInput control={control} name={'location'} placeholder='Write your location' label={'location'} value={user.location} />

            <ControlledInput name={'bio'} placeholder='A short bio' label={'bio'} value={user.bio} control={control} />
          </div>
        </div>

        <div className="bg-white rounded">
          <h3 className='font-bold text-2xl p-1'>Coding</h3>

          <div className='w-[95%] m-auto mt-6 pb-2'>

            <ControlledTextarea name={'currently-learning'} defaultValue={user.currently_learning} label={'Currently learning'} control={control} text='What are you learning right now? What are the new tools and languages you are picking up right now?' />

            <ControlledTextarea name={'available-for'} defaultValue={user.available_for} label={'Available for'} control={control} text='What are you available for? What is a good reason to say Hey! to you these days?' />

            <ControlledTextarea name={'skills-languages'} defaultValue={user.skills_languages} label={'Skills/Languages'} control={control} text='What tools and languages are you most experienced with? Are you specialized or more of a generalist?' />
          </div>
        </div>

        <div className='bg-white flex justify-center'>
          <button className='w-[80%] my-4 px-2 py-1 inline-block text-white rounded bg-indigo-600 hover:bg-indigo-700 duration-150 ' type='submit'>Save Profile information</button>
        </div>
      </form>

    </ContentContainer>

  )
}
