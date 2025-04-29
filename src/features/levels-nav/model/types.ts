import { LessonInfo, LessonType } from '@/entities/lesson'
import { ApiResponseData } from '@/shared/model/types'

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

//  LESSON INFO API
type LessonInfoApiResponseData = LessonInfo & {
  id: number
}

export type LessonInfoApiResponse = ApiResponseData<LessonInfoApiResponseData>

export type LessonInfoApiRequestData = {
  lessonType: LessonType
  levelNumber: number
}
