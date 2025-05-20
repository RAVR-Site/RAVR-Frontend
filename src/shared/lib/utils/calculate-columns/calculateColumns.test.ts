import { describe, expect, it } from 'vitest'

import { calculateColumns } from './calculateColumns'

describe('calculateColumns', () => {
  it('should not return 9 columns', () => {
    const columns = calculateColumns(1200)

    expect(columns).toBe(9)
  })
  it('should not return 8 columns', () => {
    const columns = calculateColumns(1100)

    expect(columns).toBe(8)
  })
  it('should not return 7 columns', () => {
    const columns = calculateColumns(1000)

    expect(columns).toBe(7)
  })
  it('should not return 6 columns', () => {
    const columns = calculateColumns(800)

    expect(columns).toBe(6)
  })
  it('should return 5 columns', () => {
    const columns = calculateColumns(700)

    expect(columns).toBe(5)
  })
  it('should return 4 columns', () => {
    const columns = calculateColumns(600)

    expect(columns).toBe(4)
    expect(columns).not.toBe(3)
  })
})

