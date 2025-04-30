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


// ФОРМАТИРОВАНЫЕ ДАННЫЕ
export type FormattedLessonInfo = Omit<LessonInfo, 'easy' | 'hard'> & {
  easy: FormattedLessonComplexity;
  hard?: FormattedLessonComplexity;
};

export type FormattedLessonComplexity = Omit<LessonСomplexity, 'timeToFinish' | 'fpsRecord' | 'userRecord'> & {
  timeToFinish: FormattedTime;
  fpsRecord: FormattedTime;
  userRecord?: FormattedTime;
};

export type FormattedTime = `${string}:${string} sec`;


