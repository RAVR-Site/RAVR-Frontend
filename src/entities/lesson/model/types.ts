import { ModeData } from '@/features/levels-nav'
import { FormattedTime } from '@/shared/lib/utils/format-time/formatTime'
import { ApiResponseData } from '@/shared/model/types'

export type LessonInfo = {
  id: number
  lessonNumber: number
  easy: LessonСomplexity
  hard?: LessonСomplexity
}

type LessonСomplexity = {
  userRecord?: number
  fpsRecord: number
}

export type LessonType = 'grammar' | 'vocabulary' | 'practice'
export type LessonResult = 'good' | 'normal' | 'bad'
export type LessonMode = 'easy' | 'hard'

// LESSON DATA

export type GrammarLessonData = {
  answer_index: number[];
  condition: null;
  sentences: string[];
  variants: string[];
};

export type VocabularyLessonData = {
  answer_index: [];
  condition: null;
  sentences: [];
  variants: Array<Record<string, string>>;
};

export type PracticeLessonData = {
  answer_index: number[];
  condition: string;
  sentences: string[];
  variants: string[];
};


//  LESSON INFO API
export type LessonInfoApiResponseData = {
  id: number;
  level: number;
  mode: LessonMode
} & (
    | {
      type: 'grammar';
      lesson_data: GrammarLessonData;
    }
    | {
      type: 'vocabulary';
      lesson_data: VocabularyLessonData;
    }
    | {
      type: 'practice';
      lesson_data: PracticeLessonData;
    }
  );

export type LessonInfoApiResponse = ApiResponseData<LessonInfoApiResponseData>

export type LessonInfoApiRequestData = {
  id: number
}

// FORMATTED DATA
export type FormattedLessonComplexity = {
  fpsRecord: FormattedTime;
  userRecord?: FormattedTime;
};

export type FormattedLessonInfo = {
  level: number
  easy: FormattedLessonComplexity;
  hard?: FormattedLessonComplexity;
};


// SELECTED LESSON
export type SelectedLesson = {
  lessonMode: LessonMode
  lessonNumber: number
  lessonType: LessonType
  modeData: ModeData
}
