import { LevelData } from '@/features/levels-nav';

export const mockLessonInfo: LevelData = {
  level: 1,
  hardId: 4,
  easyId: 1,
  hardIsDone: false,
  easy: {
    id: 1,
    fpsRecord: 100,
    userRecord: 100,
  },
  hard: {
    id: 4,
    fpsRecord: 150,
  },
}