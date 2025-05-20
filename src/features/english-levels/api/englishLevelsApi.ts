import { api } from '@/shared/api/axios-instanse'

import { EnglishLevelApiResponse, EnglishLevelVariant } from '../model/types'

export const englishLevelsApi = {
  changeLevel: async (body: EnglishLevelVariant) => (await
    api.post<EnglishLevelApiResponse>('/levels/change-level', body)).data,
}
