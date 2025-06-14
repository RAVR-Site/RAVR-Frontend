import { authApi } from '@/shared/api/axios-instanse'

import {
  LoginRequestData,
  LoginResponse,
} from '../model/types'

export const login = async (data: LoginRequestData) =>
  (await authApi.post<LoginResponse>('/login', data)).data
