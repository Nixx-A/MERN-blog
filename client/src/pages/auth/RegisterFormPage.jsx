import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Label } from '../../components/ui/Label'
import { Input } from '../../components/ui/Input'
import { useAuth } from '../../context/AuthContext'
import { registerSchema } from '../../schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { ContentContainer } from '../../components/ui/ContentContainer'

export function RegisterForm () {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth()
  console.log(registerErrors)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(registerSchema) })
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async values => {
    try {
      console.log(values)
      await signup(values)
    } catch (error) {
      console.log(error)
    }
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  return (
    <ContentContainer>
      <div className='bg-white max-w-lg w-full py-5 px-10 h-auto m-auto rounded-md shadow-md '>
        <h2 className='font-bold text-xl'>Create your account</h2>

        {registerErrors.map((error, index) => (
          <p key={index} className='text-red-600 bg-red-100 m-1 p-1 rounded'>{error}</p>
        ))}

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>

          <Label htmlFor="profile-image">Profile image</Label>
          <input className='file:rounded file:outline-none file:border-0 file:p-1.5 file:bg-gray-200 file:hover:bg-gray-300 duration-150 border rounded p-2' type="file" name="profile-image" {...register('profile-image')} />

          <Label htmlFor="username">Username</Label>
          <Input type='text' name='username' placeholder='Write your username' {...register('username')} />
          {errors.username && (
            <p className="text-red-500">{errors.username?.message}</p>
          )}

          <Label htmlFor="email">Email</Label>
          <Input type='email' name='email' placeholder='Write your email' {...register('email')} />
          {errors.email && (
            <span className='text-red-500'>{errors.email?.message}</span>
          )}

          <Label htmlFor="password">Password</Label>
          <Input type='password' name='password' placeholder='********' {...register('password')} />
          {errors.password && (
            <span className='text-red-500'>{errors.password?.message}</span>
          )}

          <Label htmlFor="confirmPassword">Password confirmation</Label>
          <Input type='password' name='confirmPassword' placeholder='********' {...register('confirmPassword')} />
          {errors.confirmPassword && (
            <span className='text-red-500'>{errors.confirmPassword?.message}</span>
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
    </ContentContainer>
  )
}
