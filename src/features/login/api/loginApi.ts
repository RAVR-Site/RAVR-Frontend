import { axiosBase } from '@/shared/api/axios-instanse'

import { LoginRequest, LoginResponse } from '../model/types'

export const loginApi = {
  login: async (data: LoginRequest) =>
    axiosBase.post<LoginResponse>('/login', data),
}
