import { api } from '@/shared/api/axios-instanse';

import { LessonInfoApiRequestData, LessonInfoApiResponse } from '../model/types';

export const lessonApi = {
  getLessonInfo: async ({ id }: LessonInfoApiRequestData) =>
    (await api.get<LessonInfoApiResponse>(`/lessons/${id}`)).data
}