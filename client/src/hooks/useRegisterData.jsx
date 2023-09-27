import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../schemas/auth'
import { useEffect } from 'react'
export function useRegisterData () {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: zodResolver(registerSchema) })

  const onSubmit = handleSubmit(async (values) => {
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

  return {
    register,
    onSubmit,
    control,
    registerErrors,
    errors
  }
}
