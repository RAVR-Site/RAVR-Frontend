import { authApi } from '@/shared/api/axios-instanse'

import {
  RegisterRequestData,
  RegisterResponse,
} from '../model/types'

export const registerApi = async (data: RegisterRequestData) =>
  (await authApi.post<RegisterResponse>('/auth/register', data)).data
