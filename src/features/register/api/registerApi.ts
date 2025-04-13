import { axiosBase } from '@/shared/api/axios-instanse'

import {
  RegisterRequest,
  RegisterResponse,
} from '../model/types'

export const registerApi = {
  register: async (data: RegisterRequest) =>
    axiosBase.post<RegisterResponse>('/register', data),
}
