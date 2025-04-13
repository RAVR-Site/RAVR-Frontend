import { InputHTMLAttributes, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { EyeIcon } from '../icons/EyeIcon'
import { P } from '../P/P'

import s from './Input.module.scss'

export const Input = ({
  label,
  error,
  register,
  labelClass = '',
  withEyeIcon = false,
  type,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={s.allInput}>
      {label && (
        <label className={s.label}>
          <P color={'black'} fontSize={20}>
            {label}
          </P>
        </label>
      )}
      <div className={s.inputBlock}>
        <input
          {...(withEyeIcon && {
            type: showPassword ? 'text' : 'password',
          })}
          className={s.input}
          {...register}
          {...props}
        />
        {withEyeIcon && (
          <EyeIcon
            onClick={() => setShowPassword(prev => !prev)}
          />
        )}
      </div>
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
}

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelClass?: string
  error?: string
  register?: UseFormRegisterReturn
  withEyeIcon?: boolean
}
