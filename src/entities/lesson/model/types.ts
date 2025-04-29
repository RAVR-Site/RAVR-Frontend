export type LessonInfo = {
  lessonNumber: number
  easy: LessonСomplexity
  hard: LessonСomplexity
}

type LessonСomplexity = {
  timeToFinish: number
  userRecord?: number
  fpsRecord: number
  xp: number
}

export type LessonType = 'grammar' | 'vocabulary' | 'practice'