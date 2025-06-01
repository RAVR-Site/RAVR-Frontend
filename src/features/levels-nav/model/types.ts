import { LessonType } from '@/entities/lesson';
import { ApiResponseData } from '@/shared/model/types';

export type LevelData = {
  level: number
  hardIsDone: boolean
  easy: number
  hard: number
}

//  LEVELS NAV API
type LevelsNavApiResponseData = {
  levels: LevelData[]
}

export type LevelsNavApiResponse = ApiResponseData<LevelsNavApiResponseData>

export type LevelsNavApiRequestData = {
  lessonType: LessonType
}
