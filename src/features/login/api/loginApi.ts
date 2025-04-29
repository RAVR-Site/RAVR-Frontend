import { api } from '@/shared/api/axios-instanse'

import {
  LoginRequestData,
  LoginResponse,
} from '../model/types'

export const login = async (data: LoginRequestData) =>
  (await api.post<LoginResponse>('/auth/login', data)).data
