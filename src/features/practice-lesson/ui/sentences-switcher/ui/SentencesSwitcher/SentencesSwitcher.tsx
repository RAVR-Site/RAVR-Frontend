import { ReactNode } from 'react'

import { practiceLessonStore } from '@/features/practice-lesson'
import { P } from '@/shared/ui'
import cn from 'classnames'

import { ArrowIcon } from '../../assets/ArrowIcon'
import { sentencesSwitcherStore } from '../../model/sentencesSwitcherStore'

import s from './SentencesSwitcher.module.scss'

export const SentencesSwitcher = ({
  withText = false,
  clickable = false,
  noSpace = false,
  color = '#9A5FFF',
}: SentencesSwitcherProps) => {
  const {
    answerIndexStore: { answerIndex, setAnswerIndex },
  } = sentencesSwitcherStore

  const {
    sentencesCountStore: { sentencesCount },
  } = practiceLessonStore

  const handlePrevClick = () => {
    if (!clickable) return

    setAnswerIndex(prev => {
      if (prev <= 1) return sentencesCount

      console.log(prev, sentencesCount)

      return prev - sentencesCount / 2
    })
  }

  const handleNextClick = () => {
    if (!clickable) return

    setAnswerIndex(prev => {
      if (prev === sentencesCount) return 1

      console.log(prev, sentencesCount)

      return prev + sentencesCount / 2
    })
  }

  return (
    <div
      className={cn(
        s.switcher,
        clickable && s.clickable,
        noSpace && s.noSpace
      )}
    >
      <div
        onClick={handlePrevClick}
        className={cn(
          s.arrow,
          clickable && s.arrowClickable
        )}
      >
        <ArrowIcon clickable={clickable} color={color} />
      </div>
      {withText && (
        <P
          fontFamily={'DaysOne'}
          color={'black'}
          fontSize={32}
        >
          {answerIndex}
        </P>
      )}
      <div
        onClick={handleNextClick}
        className={cn(
          s.arrow,
          clickable && s.arrowClickable
        )}
      >
        <ArrowIcon
          clickable={clickable}
          color={color}
          rotate
        />
      </div>
    </div>
  )
}

interface SentencesSwitcherProps {
  withText?: boolean
  clickable?: boolean
  noSpace?: boolean
  color?: string
}
