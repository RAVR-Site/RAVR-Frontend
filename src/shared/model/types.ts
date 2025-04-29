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


// REFRESH

type RefreshResponseData = {
  accessToken: string
  refreshToken: string
  tokenType: string
  id: number
  username: string
  email: string
}

export type RefreshResponse = ApiResponseData<RefreshResponseData>

export interface RefreshRequestData {
  refreshToken: string
}


// LESSON TYPES
export type LessonType = 'grammar' | 'vocabulary' | 'practice'
