import { Label } from '../../components/ui/Label'
import { Input } from '../../components/ui/Input'
import { Methods } from './Methods'
import { Link, useNavigate } from 'react-router-dom'
import { ContentContainer } from '../../components/ui/ContentContainer'
import { useLoginData } from '../../hooks/useLoginData'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext'

export function LoginPage () {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { handleSubmit } = useForm()
  const { errors, onSubmit, register, registerErrors } = useLoginData()

  if (user) {
    navigate('/')
    return null
  }

  const handleFormSubmit = async (values) => await onSubmit(values)

  return (
    <ContentContainer >
      <div className='bg-white max-w-lg px-10 py-5 h-auto m-auto rounded-md shadow-md'>
        <Methods />

        <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col mt-4'>
          {registerErrors.map((error, index) => (
            <p key={index} className='text-red-600 bg-red-100 mt-2 p-1 rounded text-center'>{error}</p>
          ))}

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

          <button className='indigo-btn' type='submit'>Continue</button>
        </form>

        <Link to={'/users/password/new'} className='text-indigo-500 text-center mt-5 '>I forgot my password</Link>

      </div>
    </ContentContainer>
  )
}
