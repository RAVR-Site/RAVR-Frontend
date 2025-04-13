export interface RegisterRequest {
  name: string
  surname?: string
  email: string
  password: string
}

export interface RegisterResponse {
  status: string
  message: string
  error?: string
}