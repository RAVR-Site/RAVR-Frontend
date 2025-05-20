export const formatTime = (
  seconds: number,
  format: 'withSecondsText' | 'withoutSecondsText' = 'withSecondsText'
): FormattedTime => {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');

  if (format === 'withSecondsText') {
    return `${mins}:${secs} sec`;
  }

  return `${mins}:${secs}`;
}

export type FormattedTime = `${string}:${string} sec` | `${string}:${string}`