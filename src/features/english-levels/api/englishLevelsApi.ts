import { api } from '@/shared/api/axios-instanse'

import { EnglishLevelApiRequestData, EnglishLevelApiResponse } from '../model/types'

export const englishLevelsApi = {
  changeLevel: async (body: EnglishLevelApiRequestData) => (await
    api.post<EnglishLevelApiResponse>('/levels/change-level', body)).data,
}
