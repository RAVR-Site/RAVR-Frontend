
import { ApiResponseData } from '@/shared/model/types'

// REGISTER

interface RegisterResponseData {
  id: number
  username: string
  email: string
}

export type RegisterResponse = ApiResponseData<RegisterResponseData>

export interface RegisterRequestData {
  username: string
  surname?: string
  email: string
  password: string
}