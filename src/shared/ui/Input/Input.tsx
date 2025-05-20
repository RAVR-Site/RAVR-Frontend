import { InputHTMLAttributes, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import cn from 'classnames'

import { EyeIcon, LoupeIcon } from '../icons'
import { P } from '../P/P'

import s from './Input.module.scss'

export const Input = ({
  label,
  error,
  register,
  labelClass = '',
  inputClass,
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
      <div
        className={cn(
          s.inputBlock,
          s[`${inputClass}Block`]
        )}
      >
        {inputClass === 'search' && <LoupeIcon />}
        <input
          {...(withEyeIcon && {
            type: showPassword ? 'text' : 'password',
          })}
          className={cn(s.input, s[`${inputClass}`])}
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
  inputClass?: 'search'
  error?: string
  register?: UseFormRegisterReturn
  withEyeIcon?: boolean
}
