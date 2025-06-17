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

export type VocabularyLessonDataBase = {
  answer_index: [];
  condition: null;
  sentences: [];
};

export type VocabularyLessonDataEasy = VocabularyLessonDataBase & {
  variants: Record<string, string>;
};

export type VocabularyLessonDataHard = VocabularyLessonDataBase & {
  variants: Record<string, [string, string]>;
};

export type VocabularyLessonData = VocabularyLessonDataEasy | VocabularyLessonDataHard

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
} & (
    | {
      type: 'grammar';
      mode: LessonMode;
      lesson_data: GrammarLessonData;
    }
    | {
      type: 'vocabulary';
      mode: 'easy';
      lesson_data: VocabularyLessonDataEasy;
    }
    | {
      type: 'vocabulary';
      mode: 'hard';
      lesson_data: VocabularyLessonDataHard;
    }
    | {
      type: 'practice';
      mode: LessonMode;
      lesson_data: PracticeLessonData;
    }
  );

export type LessonInfoApiResponse = ApiResponseData<LessonInfoApiResponseData>

export type LessonInfoApiRequestData = {
  id: number
}

// LESSON RESULT API

interface LeaderboardEntry {
  user_id: number;
  username: string;
  position: number;
  completion_time: number;
  score: number;
  experience: number;
  trend: 'stable' | 'up' | 'down'; // или string, если возможны другие значения
}

interface Leaderboard {
  entries: LeaderboardEntry[];
  userPosition: number;
  totalUsers: number;
}

export type LessonResultApiResponseData = {
  success: boolean;
  experience: number;
  earnedXP: number;
  completedTime: number;
  leaderboard: Leaderboard;
}

export type LessonResultApiResponse = ApiResponseData<LessonResultApiResponseData>

export type LessonResultApiRequestData = {
  lessonId: string | number
  completionTime: string | number
  earnedExperience: string | number
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
