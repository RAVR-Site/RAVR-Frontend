import { useEffect, useState } from 'react'

import { formatTime } from '@/shared/lib/utils/format-time/formatTime'
import { TextParagraphColors } from '@/shared/model/types'

import { P } from '..'

export const Timer = ({
  textColor,
  timeToFinish,
}: TimerProps) => {
  const [seconds, setSeconds] = useState(timeToFinish ?? 0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const isTimeEnd = seconds > 0
  const time = isTimeEnd
    ? formatTime(seconds, 'withSecondsText')
    : 'Time is up!'

  return (
    <div>
      <P color={isTimeEnd ? textColor : 'red'}>{time}</P>
    </div>
  )
}

interface TimerProps {
  textColor: TextParagraphColors
  timeToFinish: number | undefined
}
