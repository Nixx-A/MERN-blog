import { ContentContainer } from '../../components/ui/ContentContainer'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Label } from '../../components/ui/Label'
import ControlledInput from '../../components/ui/ControlledInput'
import ControlledTextarea from '../../components/ui/ControlledTextarea'
import { useUser } from '../../context/UserContext'
import { useEffect } from 'react'
import { SettingsSidebar } from '../../components/ui/SettingsSidebar'
import { ProfileNavigation } from '../../components/user/ProfileNavigation'

export function SettingsPage () {
  const { user } = useAuth()
  const { changeSettings, getUserSettings, userSettings } = useUser()
  const navigate = useNavigate()
  const { register, handleSubmit, control } = useForm()

  const onSubmit = handleSubmit(async values => {
    try {
      console.log(values)
      await changeSettings(values, user.id)
    } catch (error) {
      console.log(error)
    }
  })

  const handleOptionChange = e => {
    e.target.value === 'Profile'
      ? console.log('/settings/profile')
      : navigate('/settings/customization')
  }

  useEffect(() => {
    getUserSettings(user.id)
  }, [])

  return (
    <ContentContainer styles={'w-[95%] m-auto flex  gap-4'}>
      <SettingsSidebar />

      <div >
        <ProfileNavigation handleOptionChange={handleOptionChange} username={user.username} />

        {/* Form section */}
        <form className='flex flex-col gap-4 mt-4' onSubmit={handleSubmit(onSubmit)}>
          <div className='bg-white rounded dark:bg-[#171717] '>
            <h3 className='font-bold text-2xl p-3'>User</h3>

            <div className='w-[95%] m-auto mt-6 pb-2'>
              <ControlledInput
                name='username'
                placeholder='Write your username'
                label={'username'}
                control={control}
                defaultValue={user.username}
              />
              <ControlledInput
                name={'email'}
                placeholder='Write your email'
                label={'email'}
                control={control}
                defaultValue={user.email}
              />

              <Label htmlFor={'profile_image'}>Profile Image</Label>
              <input
                className='file:rounded file:outline-none file:border-0 file:p-1.5 file:bg-gray-200 file:hover:bg-gray-300  border hover:border-gray-600 duration-150 rounded p-2'
                type='file'
                name='profile_image'
                {...register('profile_image')}
              />
            </div>
          </div>

          <div className='bg-white rounded dark:bg-[#171717]'>
            <h3 className='font-bold text-2xl p-3'>Basic</h3>

            <div className='w-[95%] m-auto mt-6 pb-2'>
              <ControlledInput
                name={'website_url'}
                placeholder='https://yourwebsite.com'
                label={'website URL'}
                control={control}
                defaultValue={userSettings.website_url}
                type='url'
              />

              <ControlledInput
                name={'github'}
                placeholder='https://github.com'
                label={'github'}
                control={control}
                defaultValue={userSettings.github}
              />
              <ControlledInput
                control={control}
                name={'location'}
                placeholder='Write your location'
                label={'location'}
                defaultValue={userSettings.location}
              />
              <ControlledTextarea
                name={'bio'}
                placeholder='A short bio'
                label={'bio'}
                defaultValue={userSettings.bio}
                control={control}
              />
            </div>
          </div>

          <div className='bg-white dark:bg-[#171717] rounded'>
            <h3 className='font-bold text-2xl p-3'>Coding</h3>

            <div className='w-[95%] m-auto mt-6 pb-2'>
              <ControlledTextarea
                name={'currently_learning'}
                defaultValue={userSettings.currently_learning}
                label={'Currently learning'}
                control={control}
                text='What are you learning right now? What are the new tools and languages you are picking up right now?'
              />
              <ControlledTextarea
                name={'available_for'}
                defaultValue={userSettings.available_for}
                label={'Available for'}
                control={control}
                text='What are you available for? What is a good reason to say Hey! to you these days?'
              />
              <ControlledTextarea
                name={'skills'}
                defaultValue={userSettings.skills}
                label={'Skills/Languages'}
                control={control}
                text='What tools and languages are you most experienced with? Are you specialized or more of a generalist?'
              />
            </div>
          </div>

          <div className='bg-white dark:bg-[#171717] flex justify-center'>
            <button
              className='w-[80%] my-4 px-2 py-1 inline-block text-white rounded bg-indigo-600 hover:bg-indigo-700 duration-150 '
              type='submit'>
              Save Profile information
            </button>
          </div>
        </form>
      </div>
    </ContentContainer>
  )
}
