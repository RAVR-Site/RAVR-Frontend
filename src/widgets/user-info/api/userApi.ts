import { api } from '@/shared/api/axios-instanse';

export const userApi = {
  getUser: async () => (await api.get('/auth/user')).data
}