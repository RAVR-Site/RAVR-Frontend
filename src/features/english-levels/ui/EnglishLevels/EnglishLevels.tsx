import { useEffect } from 'react'

import { P } from '@/shared/ui'
import cn from 'classnames'

import { englishLevelList } from '../../model/englishLevelList'
import { englishLevelStore } from '../../model/englishLevelStore'
import { EnglishLevelVariant } from '../../model/types'

import s from './EnglishLevels.module.scss'

export const EnglishLevels = ({
  initialActiveLevel,
}: EnglishLevelsProps) => {
  const {
    currentEnglishLevel: {
      setCurrentEnglishLevel,
      currentEnglishLevel,
    },
    switchEnglishLevelRequest,
  } = englishLevelStore

  const handleChangeLevel = (
    level: EnglishLevelVariant
  ) => {
    switchEnglishLevelRequest(level)
  }

  useEffect(() => {
    setCurrentEnglishLevel(initialActiveLevel)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialActiveLevel])

  return (
    <ul className={s.levelList}>
      {englishLevelList.map(
        (level: EnglishLevelVariant) => (
          <li
            key={level}
            onClick={() => handleChangeLevel(level)}
            className={cn(
              s.level,
              currentEnglishLevel === level && s.levelActive
            )}
          >
            <P
              fontFamily={'DaysOne'}
              fontSize={24}
              color={
                currentEnglishLevel === level &&
                s.levelActive
                  ? 'white'
                  : 'black'
              }
            >
              {level}
            </P>
          </li>
        )
      )}
    </ul>
  )
}

interface EnglishLevelsProps {
  initialActiveLevel: EnglishLevelVariant
}
