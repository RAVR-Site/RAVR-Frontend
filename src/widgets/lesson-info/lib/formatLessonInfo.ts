import { FormattedLessonInfo } from '@/entities/lesson';
import { LevelData } from '@/features/levels-nav';
import { formatTime } from '@/shared/lib/utils/format-time/formatTime';

export const formatLessonInfo = (data: LevelData): FormattedLessonInfo  => {
  console.log(data.easy, data.hard)

  return {
    ...data,
    easy: {
      ...data.easy,
      fpsRecord: formatTime(data.easy.fpsRecord ?? 30),
      userRecord: data.easy.userRecord ? formatTime(data.easy.userRecord) : undefined,
    },
    hard: data.hard ? {
      ...data.hard,
      fpsRecord: formatTime(data.hard.fpsRecord ?? 45),
      userRecord: data.hard.userRecord ? formatTime(data.hard.userRecord) : undefined,
    } : undefined,
  };
}
