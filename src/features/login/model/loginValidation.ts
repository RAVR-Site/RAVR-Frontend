import { RegisterOptions } from 'react-hook-form'

import { LoginRequestData } from '@/shared/model/types'

export const loginValidation: Partial<
  Record<
    keyof LoginRequestData,
    RegisterOptions<LoginRequestData>
  >
> = {
  username: {
    required: 'Username is required',
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 8,
      message:
        'The minimum password length is 8 characters',
    },
  },
}
