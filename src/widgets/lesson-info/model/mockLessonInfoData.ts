import { LessonInfoApiResponse } from '@/entities/lesson';

export const mockLessonInfo: LessonInfoApiResponse = {
  success: true,
  message: 'success',
  timestamp: '2021-01-01T00:00:00.000Z',
  data: {
    id: 1,
    lessonNumber: 1,
    easy: {
      timeToFinish: 100,
      fpsRecord: 100,
      xp: 100,
      userRecord: 100,
    },
    hard: {
      timeToFinish: 150,
      fpsRecord: 150,
      xp: 150,
    },
  },
}