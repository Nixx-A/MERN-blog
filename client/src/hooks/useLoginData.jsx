import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../context/AuthContext'
import { loginSchema } from '../schemas/auth'
import { useForm } from 'react-hook-form'

export function useLoginData () {
  const { signin, errors: registerErrors } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(loginSchema) })

  const onSubmit = handleSubmit(async (values) => {
    try {
      signin(values)
    } catch (error) {
      console.log(error)
    }
  })

  return {
    register,
    onSubmit,
    errors,
    registerErrors
  }
}
