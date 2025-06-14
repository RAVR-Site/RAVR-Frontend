import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'

import { formatTime } from '@/shared/lib/utils/format-time/formatTime'
import { TextParagraphColors } from '@/shared/model/types'

import { P } from '../..'
import { timerStore } from '../model/timerStore'

export const Timer = observer(
  ({ textColor, timeToFinish }: TimerProps) => {
    const {
      secondsStore: { seconds, setSeconds },
      allSecondsStore: { setAllSeconds },
      isTimeEndStore: { setIsTimeEnd },
    } = timerStore

    useEffect(() => {
      setSeconds(timeToFinish ?? 0)
      setAllSeconds(timeToFinish ?? 0)
    }, [setSeconds, timeToFinish, setAllSeconds])

    const checkIsTimeEnd = seconds <= 0

    useEffect(() => {
      if (checkIsTimeEnd) {
        setIsTimeEnd(true)

        return
      }

      const interval = setInterval(() => {
        setSeconds(prev => prev - 1)
      }, 1000)

      return () => clearInterval(interval)
    }, [setSeconds, timeToFinish, seconds, checkIsTimeEnd, setIsTimeEnd])

    const time = checkIsTimeEnd
      ? 'Time is up!'
      : formatTime(seconds, 'withSecondsText')

    return (
      <div>
        <P color={checkIsTimeEnd ? 'red' : textColor}>{time}</P>
      </div>
    )
  }
)

interface TimerProps {
  textColor: TextParagraphColors
  timeToFinish: number | undefined
}
