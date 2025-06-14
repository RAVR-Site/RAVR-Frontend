import { GrammarLessonData, LessonInfoApiResponseData, LessonType, PracticeLessonData, VocabularyLessonDataEasy, VocabularyLessonDataHard } from '../model/types';

type LessonDataMap = {
  vocabulary: VocabularyLessonDataEasy | VocabularyLessonDataHard;
  grammar: GrammarLessonData;
  practice: PracticeLessonData;
};

export const useGetLessonData = <T extends LessonType>(
  data: LessonInfoApiResponseData | null | undefined,
  needType: T
): LessonDataMap[T] | undefined => {
  if (!data || data.type !== needType) return undefined;


  return data.lesson_data as LessonDataMap[T];
};