import { ApiResponseData } from '@/shared/model/types'

// LOGIN
interface LoginResponseData {
  accessToken: string
  refreshToken: string
  tokenType: string
  id: number
  username: string
  email: string
}

export type LoginResponse = ApiResponseData<LoginResponseData>

export interface LoginRequestData {
  username: string
  password: string
}