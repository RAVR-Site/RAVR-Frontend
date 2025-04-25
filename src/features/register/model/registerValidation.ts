import { RegisterOptions } from 'react-hook-form'

import { RegisterRequestData } from '@/shared/model/types'

export const registerValidation: Partial<
  Record<
    keyof RegisterRequestData,
    RegisterOptions<RegisterRequestData>
  >
> = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Invalid email address',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 8,
      message:
        'The minimum password length is 8 characters',
    },
  },
  username: {
    required: 'Name is required',
  },
}
