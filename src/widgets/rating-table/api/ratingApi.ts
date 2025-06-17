// import { LessonMode, LessonType } from '@/entities/lesson'
import { api } from '@/shared/api/axios-instanse'

import { RatingGetResponse } from '../model/types'

export const ratingApi = {
  getRating: async ({
    // type,
    // mode,
  }: {
    // type: LessonType
    // mode: LessonMode
  }) => (await api.get<RatingGetResponse>('/leaderboard')).data,
}