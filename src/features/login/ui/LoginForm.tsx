import { observer } from 'mobx-react-lite'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { LoginRequestData } from '@/shared/model/types'
import { Button, Input } from '@/shared/ui'

import { login } from '../api/loginApi'
import { loginStore } from '../model/loginStore'
import { loginValidation } from '../model/loginValidation'

import s from './LoginForm.module.scss'

export const LoginForm = observer(() => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginRequestData>()

  const { loginRequest } = loginStore

  const handleSubmitLoginForm: SubmitHandler<
    LoginRequestData
  > = data => {
    loginRequest(data, reset, navigate)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitLoginForm)}
      className={s.form}
    >
      <div className={s.inputs}>
        <Input
          key={'name'}
          label={'Name'}
          placeholder={'Enter your name'}
          register={register(
            'username',
            loginValidation.username
          )}
          error={errors.username?.message}
          size={40}
        />
        <Input
          label={'Password'}
          placeholder={'Enter password'}
          register={register(
            'password',
            loginValidation.password
          )}
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
})
