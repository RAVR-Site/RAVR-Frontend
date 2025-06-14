import { ApiResponseData } from '@/shared/model/types'

// LOGIN
interface LoginResponseData {
  token: string
}

export type LoginResponse = ApiResponseData<LoginResponseData>

export interface LoginRequestData {
  username: string
  password: string
}