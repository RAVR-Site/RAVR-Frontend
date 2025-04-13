import { axiosBase } from '@/shared/api/axios-instanse'

export const englishLevelsApi = {
  changeLevel: (level: string) =>
    axiosBase.post('/levels/change-level', level),
}
