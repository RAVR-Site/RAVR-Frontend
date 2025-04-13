import { RegisterOptions } from 'react-hook-form'

import { RegisterRequest } from './types'

export const registerValidation: Partial<
  Record<
    keyof RegisterRequest,
    RegisterOptions<RegisterRequest>
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
  name: {
    required: 'Name is required',
  },
}
