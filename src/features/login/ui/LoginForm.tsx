import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Input } from '@/shared/ui'

import { loginApi } from '../api/loginApi'
import { loginValidation } from '../model/loginValidation'
import { LoginRequest } from '../model/types'

import s from './LoginForm.module.scss'

export const LoginForm = ({}: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginRequest>()

  const handleSubmitLoginForm: SubmitHandler<
    LoginRequest
  > = async data => {
    try {
      const response = await loginApi.login(data)

      reset()
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitLoginForm)}
      className={s.form}
    >
      <div className={s.inputs}>
        <Input
          key={'email'}
          label={'Email'}
          placeholder={'Enter your email'}
          register={register('email', loginValidation.email)}
          error={errors.email?.message}
          size={40}
        />
        <Input
          label={'Password'}
          placeholder={'Enter password'}
          register={register('password', loginValidation.password,)}
          error={errors.password?.message}
          size={40}
          withEyeIcon
        />
      </div>
      <Button
        type={'submit'}
        backgroundColor={'blue'}
        padding={'0.5rem 0'}
        width={'calc(100% / 3)'}
        fontSize={20}
      >
        Continue
      </Button>
    </form>
  )
}

interface LoginFormProps {}
