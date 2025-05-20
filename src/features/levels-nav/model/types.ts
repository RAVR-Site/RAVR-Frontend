import { LessonType } from '@/entities/lesson';
import { ApiResponseData } from '@/shared/model/types';

export type LevelData = {
  levelNumber: string
  hardIsDone: boolean
}

//  LEVELS NAV API
type LevelsNavApiResponseData = {
  levels: LevelData[]
}

export type LevelsNavApiResponse = ApiResponseData<LevelsNavApiResponseData>

export type LevelsNavApiRequestData = {
  lessonType: LessonType
}
