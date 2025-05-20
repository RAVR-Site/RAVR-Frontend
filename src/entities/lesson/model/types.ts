import { FormattedTime } from '@/shared/lib/utils/format-time/formatTime'
import { ApiResponseData } from '@/shared/model/types'

export type LessonInfo = {
  lessonNumber: number
  easy: LessonСomplexity
  hard?: LessonСomplexity
}

type LessonСomplexity = {
  timeToFinish: number
  userRecord?: number
  fpsRecord: number
  xp: number
}

export type LessonType = 'grammar' | 'vocabulary' | 'practice'

// FORMATTED DATA
export type FormattedLessonInfo = {
  lessonNumber: number
  easy: FormattedLessonComplexity;
  hard?: FormattedLessonComplexity;
};

export type FormattedLessonComplexity = {
  timeToFinish: FormattedTime;
  fpsRecord: FormattedTime;
  userRecord?: FormattedTime;
  xp: number
};


//  LESSON INFO API
type LessonInfoApiResponseData = LessonInfo & {
  id: number
}

export type LessonInfoApiResponse = ApiResponseData<LessonInfoApiResponseData>

export type LessonInfoApiRequestData = {
  lessonType: LessonType
  levelNumber: number
}

// SELECTED LESSON
export type SelectedLesson = {
  lessonMode: 'easy' | 'hard'
  lessonNumber: number
  modeData: LessonСomplexity
}
