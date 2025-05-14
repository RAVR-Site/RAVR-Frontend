import { LessonType } from '@/entities/lesson';
import { LessonColors } from '@/shared/model/types';

export const useGetLessonColor = (lessonType: LessonType): ColorData => {
  const map: LessonTypeMap = {
    grammar: 'pink',
    vocabulary: 'purple' ,
    practice: 'blue' , // если есть третий тип
  };

  const base = map[lessonType]

  return {
    clear: {
      borderColor: base,
      textColor: base,
      backgroundColor: 'none',
    },
    submit: {
      backgroundColor: base,
      textColor: 'white',
    },
  };
}

interface ColorData {
  clear: {
    borderColor: LessonColors
    textColor: LessonColors
    backgroundColor: 'none'
  }
  submit: {
    backgroundColor: LessonColors
    textColor: 'white'
  }
}

interface LessonTypeMap {
  grammar: 'pink'
  vocabulary: 'purple'
  practice: 'blue'
}

