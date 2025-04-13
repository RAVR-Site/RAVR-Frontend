import axios, { CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
  baseURL: '/api',
  withCredentials: true
}

export const axiosBase = axios.create(options)
