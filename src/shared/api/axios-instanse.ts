import axios, { CreateAxiosDefaults } from 'axios'
import Cookies from 'js-cookie'

import {
  getAccessToken,
  removeAccessToken,
  saveTokenToStorage,
} from '../lib/utils/token-utils'
import { RefreshResponse } from '../model/types'

const options: CreateAxiosDefaults = {
  baseURL: 'http://localhost:8080/api',
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

          const result =
            await instance.post<RefreshResponse>(
              '/auth/refresh',
              {
                refreshToken: Cookies.get('refresh_token'),
              }
            )

          if (result.data && error.config) {
            saveTokenToStorage(result.data.data.accessToken)

            return instance.request({ ...error.config })
          }
        } catch (refreshError) {
          // const errorCode = errorHandler(refreshError)
          // if (
          //   errorCode === 'TOKEN_EXPIRED' ||
          //   errorCode === 'INVALID_TOKEN'
          // ) {
          //   removeAccessToken()
          // }
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
