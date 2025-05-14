import { api } from '@/shared/api/axios-instanse';

import { LevelsNavApiRequestData, LevelsNavApiResponse } from '../model/types';

export const levelsNavApi = {
  getLevelsNav: async ({ lessonType }: LevelsNavApiRequestData) =>
    (await api.get<LevelsNavApiResponse>(`/levels-nav/${lessonType}`)).data,
}

