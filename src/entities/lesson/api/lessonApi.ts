import { api } from '@/shared/api/axios-instanse';

import { LessonInfoApiRequestData, LessonInfoApiResponse, LessonResultApiRequestData, LessonResultApiResponse } from '../model/types';

export const lessonApi = {
  getLessonInfo: async ({ id }: LessonInfoApiRequestData) =>
    (await api.get<LessonInfoApiResponse>(`/lessons/${id}`)).data,

  setLessonResult: async (body: LessonResultApiRequestData) =>
    (await api.post<LessonResultApiResponse>('/results/save', body)).data
}