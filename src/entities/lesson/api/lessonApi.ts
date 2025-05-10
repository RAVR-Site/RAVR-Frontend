import { api } from '@/shared/api/axios-instanse';

import { LessonInfoApiRequestData, LessonInfoApiResponse } from '../model/types';

export const lessonApi = {
  getLessonInfo: async ({ lessonType, levelNumber }: LessonInfoApiRequestData) =>
    (await api.get<LessonInfoApiResponse>(`/lesson/${lessonType}/${levelNumber}`)).data
}