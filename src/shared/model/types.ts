export interface Size {
  width: number
  height: number
}


// API RESPONSE BASE 
export interface ApiResponseData<T = any> {
  success: boolean;
  message: string;
  timestamp: string;
  data: T;
}

// AUTH TYPES

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

// REFRESH

type RefreshResponseData = LoginResponseData

export type RefreshResponse = ApiResponseData<RefreshResponseData>

export interface RefreshRequestData {
  refreshToken: string
}