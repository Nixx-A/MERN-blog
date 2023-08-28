import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Label } from '../components/ui/Label'
import { Input } from '../components/ui/Input'
import { useAuth } from '../context/AuthContext'
export function RegisterForm () {
  const { signup } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit(async values => {
    try {
      console.log(values)
      await signup(values)
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <div className=' bg-[#f5f5f5] mt-5'>
      <div className='bg-white max-w-lg w-full py-5 px-10 h-auto m-auto rounded-md shadow-md'>
        <h2 className='font-bold text-xl'>Create your account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>

          <Label htmlFor="profile-image">Profile image</Label>
          <input className='file:rounded file:outline-none file:border-0 file:p-1.5 file:bg-gray-200 file:hover:bg-gray-300 duration-150 border rounded p-2' type="file" name="profile-image" {...register('profile-image')} />

          <Label htmlFor="username">Username</Label>
          <Input type='text' name='username' placeholder='Write your username' {...register('username')} />
          {errors.username && (
            <span className='text-red-500'>This field is required</span>
          )}

          <Label htmlFor="email">Email</Label>
          <Input type='email' name='email' placeholder='Write your email' {...register('email')} />
          {errors.email && (
            <span className='text-red-500'>This field is required</span>
          )}

          <Label htmlFor="password">Password</Label>
          <Input type='password' name='password' placeholder='********' {...register('password')} />
          {errors.password && (
            <span className='text-red-500'>This field is required</span>
          )}

          <Label htmlFor="password-confirmation">Password confirmation</Label>
          <Input type='password' name='password-confirmation' placeholder='********' {...register('password-confirmation')} />
          {errors.password_confirmation && (
            <span className='text-red-500'>This field is required</span>
          )}

          <div>
            <button className='my-4 px-2 py-1 inline-block text-white rounded bg-blue-600 hover:bg-blue-700 duration-150 ' type='submit'>Sign up</button>
          </div>
        </form>

        <p>
          Already have an account?
          <Link to={'/login'} className='text-blue-500 ml-1 hover:underline'>
            Log in.
          </Link>
        </p>
      </div>
    </div>
  )
}
