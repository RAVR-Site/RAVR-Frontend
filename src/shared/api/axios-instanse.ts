import axios, { CreateAxiosDefaults } from 'axios';
import Cookies from 'js-cookie';

import { getAccessToken, saveAccessToken } from '../lib/utils/token-utils/tokenUtils';
import { RefreshResponse } from '../model/types';

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
