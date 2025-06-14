import axios, { CreateAxiosDefaults } from 'axios';

import { getAccessToken, removeAccessToken } from '../lib/utils/token-utils/tokenUtils';

const BASE_URL = import.meta.env.VITE_API_URL;

const options: CreateAxiosDefaults = {
  baseURL: `${BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const createInstance = () => {
  const instance = axios.create(options)

  instance.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config

      if (
        error.response?.status === 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        try {
          originalRequest._isRetry = true
        } catch (refreshError: any) {
          if (
            refreshError.message === 'invalid token'
          ) {
            removeAccessToken()
          }
        }
      }

      return Promise.reject(error)
    }
  )

  instance.interceptors.request.use(config => {
    const accessToken = getAccessToken()

    if (config?.headers && accessToken)
      config.headers.Authorization = `Bearer ${accessToken}`

    return config
  })

  return instance
}

export const api = createInstance()
export const authApi = axios.create(options)
