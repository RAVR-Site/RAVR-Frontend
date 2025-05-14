import { FormattedLessonInfo, LessonInfo } from '@/entities/lesson';
import { formatTime } from '@/shared/lib/utils/formatTime';

export const formatLessonInfo = (data: LessonInfo): FormattedLessonInfo => {
  return {
    ...data,
    easy: {
      ...data.easy,
      timeToFinish: formatTime(data.easy.timeToFinish),
      fpsRecord: formatTime(data.easy.fpsRecord),
      userRecord: data.easy.userRecord ? formatTime(data.easy.userRecord) : undefined,
    },
    hard: data.hard ? {
      ...data.hard,
      timeToFinish: formatTime(data.hard.timeToFinish),
      fpsRecord: formatTime(data.hard.fpsRecord),
      userRecord: data.hard.userRecord ? formatTime(data.hard.userRecord) : undefined,
    } : undefined,
  };
}
