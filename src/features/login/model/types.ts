export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  status: string
  message: string 
  error?: string
  token?: string
}