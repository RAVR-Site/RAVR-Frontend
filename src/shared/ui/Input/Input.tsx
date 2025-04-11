import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import s from './Input.module.scss'

export const Input = ({
  label,
  error,
  register,
  ...props
}: InputProps) => {
  return (
    <>
      {label && <label className={s.label}>{label}</label>}
      <input {...register} className={s.input} {...props}/>
      {error && <span className={s.error}>{error}</span>}
    </>
  )
}

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  register?: UseFormRegisterReturn
}
