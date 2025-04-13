import { levelList } from '../../model/levelList'

import s from './EnglishLevels.module.scss'

export const EnglishLevels = ({}: EnglishLevelsProps) => {
  const handleChangeLevel = (level: string) => {
    console.log(level)
  }

  return (
    <ul className={s.levelList}>
      {levelList.map((level: string) => (
        <li
          onClick={() => handleChangeLevel(level)}
          className={s.level}
        >
          {level}
        </li>
      ))}
    </ul>
  )
}

interface EnglishLevelsProps {}
