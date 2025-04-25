import { api } from '@/shared/api/axios-instanse'

export const englishLevelsApi = {
  changeLevel: (level: string) =>
    api.post('/levels/change-level', level),
}
