export interface Size {
  width: number
  height: number
}

export type NotificationType = 'success' | 'error' | 'warning' | 'loading'

export interface NotificationColors {
  success: 'green'
  error: 'red'
  warning: 'yellow'
  loading: 'black'
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


// COLORS
export type MainColors = 'blue' | 'purple' | 'yellow' | 'white' | 'black'

export type LessonColors = 'blue' | 'purple' | 'pink'

export type TextParagraphColors = 'black'
  | 'white'
  | 'purple'
  | 'pink'
  | 'yellow'
  | 'blue'
  | 'green'
  | 'red'
