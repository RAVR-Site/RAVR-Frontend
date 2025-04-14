export type TUser = {
  id: number
  name: string
  email: string
  englishLevel: string
  avatar?: string
} & UserStats;

export type UserStats = {
  activity: number,
  glf: number,
  xp: number,
  plf: number,
  glft: number,
  vlf: number
  fps: number,
  gla: number,
}
