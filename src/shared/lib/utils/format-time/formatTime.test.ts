import { describe, expect, it } from 'vitest'

import { formatTime } from './formatTime'

describe('formatTime', () => {
  it('should format time with seconds text', () => {
    expect(formatTime(1, 'withSecondsText')).toBe('00:01 sec')
    expect(formatTime(61, 'withSecondsText')).toBe('01:01 sec')
  })

  it('should format time without seconds text', () => {
    expect(formatTime(1, 'withoutSecondsText')).toBe('00:01')
    expect(formatTime(125, 'withoutSecondsText')).toBe('02:05')
  })

  it('should default to "withSecondsText" if mode is not provided', () => {
    expect(formatTime(30)).toBe('00:30 sec')
  })

  it('should return with time over 1 hour', () => {
    expect(formatTime(3660, 'withSecondsText')).toBe('61:00 sec')
    expect(formatTime(3600, 'withoutSecondsText')).toBe('60:00')
  })
})

describe('formatTime incorrect values guard', () => {
  it('should not return "00:01 sec" for input 2', () => {
    expect(formatTime(2)).not.toBe('00:01 sec')
  })

  it('should not return "00:01" for input 2 in "withoutSecondsText" mode', () => {
    expect(formatTime(2, 'withoutSecondsText')).not.toBe('00:01')
  })
})