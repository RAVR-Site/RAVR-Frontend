import { LessonType } from '@/entities/lesson';
import { ApiResponseData } from '@/shared/model/types';

export type ModeData = {
  id: number,
  userRecord?: number,
  fpsRecord: number,
}

export type LevelData = {
  level: number
  hardIsDone: boolean
  easy: ModeData
  hard: ModeData
  hardId: number
  easyId: number
}

//  LEVELS NAV API
export type LevelsNavApiResponse = ApiResponseData<LevelData[]>

export type LevelsNavApiRequestData = {
  lessonType: LessonType
}
