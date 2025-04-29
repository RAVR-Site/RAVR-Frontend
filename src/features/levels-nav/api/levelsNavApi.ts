import { api } from '@/shared/api/axios-instanse'

import { LessonInfoApiRequestData, LessonInfoApiResponse, LevelsNavApiRequestData, LevelsNavApiResponse } from '../model/types'

export const levelsNavApi = {
  getLevelsNav: async ({ lessonType }: LevelsNavApiRequestData) =>
    (await api.get<LevelsNavApiResponse>(`/levels-nav/${lessonType}`)).data,

  getLessonInfo: async ({ lessonType, levelNumber }: LessonInfoApiRequestData) =>
    (await api.get<LessonInfoApiResponse>(`/lesson/${lessonType}/${levelNumber}`)).data
}
