export const formatTime = (
  seconds: number,
  format: 'withSeconds' | 'withoutSeconds' = 'withSeconds'
): FormattedTime => {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');

  if (format === 'withSeconds') {
    return `${mins}:${secs} sec` as FormattedTime;
  }

  return `${mins}:${secs}` as FormattedTime;
}

export type FormattedTime = `${string}:${string} sec`;