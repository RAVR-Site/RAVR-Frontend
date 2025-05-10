import { useEffect, useState } from 'react'

import { formatTime } from '@/shared/lib/utils/formatTime'
import { TextParagraphColors } from '@/shared/model/types'

import { P } from '..'

import s from './Timer.module.scss'

export const Timer = ({
  textColor,
  timeToFinish,
}: TimerProps) => {
  const [seconds, setSeconds] = useState(timeToFinish || 0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const time = formatTime(seconds, 'withoutSeconds')

  return (
    <div className={s.timer}>
      <P color={textColor}>
        {time}
      </P>
    </div>
  )
}

interface TimerProps {
  textColor: TextParagraphColors
  timeToFinish: number | undefined
}
