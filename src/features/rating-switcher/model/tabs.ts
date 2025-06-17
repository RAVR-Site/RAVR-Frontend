
export type Tab = {
  key: string,
  label: string,
  color: string,
}

export type SubTab = Omit<Tab, 'color'>

export const mainTabs: Tab[] = [
  { key: 'grammar', label: 'GRAMMAR', color: '#ff5f92' },
  { key: 'vocabulary', label: 'VOCABULARY', color: '#9a5fff' },
  { key: 'practice', label: 'PRACTICE', color: '#575affe6' },
] as const

export const subTabs: SubTab[] = [
  { key: 'easy', label: 'EASY' },
  { key: 'hard', label: 'HARD' },
] as const


export const colors = {
  '#ff5f92': 'pink',
  '#9a5fff': 'purple',
  '#575affe6': 'blue',
}

