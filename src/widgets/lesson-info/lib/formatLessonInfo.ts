import { FormattedLessonInfo, FormattedTime, LessonInfo } from '@/entities/lesson';

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

const formatTime = (seconds: number): FormattedTime => {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');

  return `${mins}:${secs} sec` as FormattedTime;
}