import { useForm } from 'react-hook-form'
import { Label } from '../../components/ui/Label'
import { Input } from '../../components/ui/Input'
import { Methods } from './Methods'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../../../../src/schemas/authSchema'
import { ContentContainer } from '../../components/ui/ContentContainer'

export function LoginPage () {
  const { signin } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(loginSchema) })

  const onSubmit = handleSubmit(async values => {
    try {
      signin(values)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <ContentContainer >
      <div className='bg-white max-w-lg px-10 py-5 h-auto m-auto rounded-md shadow-md'>
        <Methods />

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>

          <Label htmlFor="email">Email</Label>
          <Input type='email' name='email' placeholder='Write your email' {...register('email')} />
          {errors.email && (
            <span className='text-red-500'>{errors.email.message}</span>
          )}

          <Label htmlFor="password">Password</Label>
          <Input type='password' name='password' placeholder='********' {...register('password')} />
          {errors.password && (
            <span className='text-red-500'>{errors.password.message}</span>
          )}

          <button className='my-4 px-2 py-2 inline-block text-white rounded bg-blue-600 hover:bg-blue-700 duration-150 ' type='submit'>Continue</button>
        </form>

        <Link to={'/users/password/new'} className='text-indigo-500 text-center mt-5 '>I forgot my password</Link>

      </div>
    </ContentContainer>
  )
}