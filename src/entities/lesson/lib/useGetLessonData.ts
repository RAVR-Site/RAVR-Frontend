import { useMemo } from 'react';

import { GrammarLesson, LessonType, PracticeLesson, SelectedLesson, VocabularyLesson } from '../model/types'

export const useGetLessonData = <T extends LessonType>(
  selectedLesson: (Partial<SelectedLesson> & { lessonType: T }) | null
): (T extends 'vocabulary' ? VocabularyLesson :
  T extends 'grammar' ? GrammarLesson :
  T extends 'practice' ? PracticeLesson :
  never) | null => {

  return useMemo(() => {
    if (!selectedLesson || !selectedLesson.lessonData) {
      return null;
    }

    return selectedLesson.lessonData as any;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLesson?.lessonData]);
};