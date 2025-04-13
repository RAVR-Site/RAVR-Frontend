import { useState } from 'react'

import { P } from '@/shared/ui'
import cn from 'classnames'

import { levelList } from '../../model/levelList'

import s from './EnglishLevels.module.scss'

export const EnglishLevels = ({
  initialActiveLevel,
}: EnglishLevelsProps) => {
  const [activeLevel, setActiveLevel] = useState<string>(
    initialActiveLevel
  )

  const handleChangeLevel = (level: string) => {
    setActiveLevel(level)
  }

  return (
    <ul className={s.levelList}>
      {levelList.map((level: string) => (
        <li
          onClick={() => handleChangeLevel(level)}
          className={cn(
            s.level,
            activeLevel === level && s.levelActive
          )}
        >
          <P
            fontFamily={'DaysOne'}
            fontSize={24}
            color={
              activeLevel === level && s.levelActive
                ? 'white'
                : 'black'
            }
          >
            {level}
          </P>
        </li>
      ))}
    </ul>
  )
}

interface EnglishLevelsProps {
  initialActiveLevel: string
}
