import { ContentContainer } from '../../components/ui/ContentContainer'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Label } from '../../components/ui/Label'
import { Input } from '../../components/ui/Input'

export function SettingsPage () {
  const { user } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit(async values => {
    try {
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  })

  console.log(user);

  const handleOptionChange = (e) => {
    if (e.target.value === 'Customization') navigate('/settings/customization')
    if (e.target.value === 'Profile') navigate('/settings/profile')
  }

  return (
    <ContentContainer styles={'w-[95%] m-auto'}>
      <select onChange={handleOptionChange} className='mb-6 w-[95%] rounded-md focus:border-blue-500 py-2 border-gray-300 border'>
        <option value="Profile">Profile</option>
        <option value="Customization">Customization</option>
      </select>

      <Link to={`/${user.username}`} className='text-indigo-700 font-semibold text-lg '>@{user.username}</Link>

      {/* Form section */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-white rounded'>

          <h3 className='font-bold text-2xl p-1'>User</h3>

          <div className='w-[95%] m-auto mt-6'>
            <Label htmlFor="username">Username</Label>
            <input type='text' name='username' placeholder='Write your username' value={user.username} className='mt-1 block border px-2 py-1.5 rounded focus:border-blue-500 outline-none' {...register('username')} />

            <Label htmlFor="email">email</Label>
            <input type='text' name='email' placeholder='Write your email' value={user.email} className='mt-1 block border px-2 py-1.5 rounded focus:border-blue-500 outline-none' />

            <Label htmlFor={'profile-image'}>Profile Image</Label>
            <input className='file:rounded file:outline-none file:border-0 file:p-1.5 file:bg-gray-200 file:hover:bg-gray-300 duration-150 border rounded p-2' type="file" name="profile-image" {...register('profile-image')} />

          </div>
        </div>
      </form>

    </ContentContainer>

  )
}
