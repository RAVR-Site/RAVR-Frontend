import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Input } from '@/shared/ui'

import { registerApi } from '../api/registerApi'
import { registerValidation } from '../model/registerValidation'
import { RegisterRequest } from '../model/types'

import s from './RegisterForm.module.scss'

export const RegisterForm = ({}: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterRequest>()

  const handleSubmitRegisterForm: SubmitHandler<
    RegisterRequest
  > = async data => {
    try {
      const response = await registerApi.register(data)

      reset()
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitRegisterForm)}
      className={s.form}
    >
      <div className={s.inputs}>
        <div className={s.verticalInput}>
          <Input
            label={'Name'}
            placeholder={'Enter your name'}
            register={register('name', {
              ...registerValidation.name,
            })}
            error={errors.name?.message}
            key={'name'}
          />
          <Input
            label={'Surname'}
            placeholder={'Enter your surname'}
            register={register('surname', {
              ...registerValidation.surname,
            })}
            error={errors.surname?.message}
            key={'surname'}
          />
        </div>
        <Input
          key={'email'}
          label={'Email'}
          placeholder={'Enter your email'}
          register={register('email', {
            ...registerValidation.email,
          })}
          error={errors.email?.message}
          size={40}
        />
        <Input
          label={'Password'}
          placeholder={'Enter password'}
          register={register('password', {
            ...registerValidation.password,
          })}
          error={errors.password?.message}
          size={40}
          withEyeIcon
        />
      </div>
      <Button
        type={'submit'}
        backgroundColor={'purple'}
        padding={'0.5rem 0'}
        width={'calc(100% / 3)'}
        fontSize={20}
      >
        Continue
      </Button>
    </form>
  )
}

interface RegisterFormProps {}
