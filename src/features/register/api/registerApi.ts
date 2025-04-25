import { api } from '@/shared/api/axios-instanse'
import {
  RegisterRequestData,
  RegisterResponse,
} from '@/shared/model/types'

export const registerApi = async (data: RegisterRequestData) =>
  (await api.post<RegisterResponse>('/auth/register', data)).data
