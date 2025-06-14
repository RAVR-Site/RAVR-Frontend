import { observer } from 'mobx-react-lite'

import { showNotification } from '@/features/notifications'
import { Button, P } from '@/shared/ui'
import { timerStore } from '@/shared/ui/Timer'
import cn from 'classnames'

import { vocabularyLessonStore } from '../../model/vocabularyLessonStore'

import s from './WordTile.module.scss'

export const WordTile = observer(
  ({
    word,
    type,
    isSelected,
    isCorrect,
    isWrong,
  }: WordTileProps) => {
    const {
      setPickEnglishWord,
      setPickRussianWord,
      lessonIsCompleted,
    } = vocabularyLessonStore

    const {
      isTimeEndStore: { isTimeEnd },
    } = timerStore

    const isPick = isSelected || isCorrect || isWrong

    const handlePick = () => {
      if (isPick || lessonIsCompleted) return

      if (isTimeEnd) {
        showNotification('error', 'Время закончилось')

        return
      }

      if (type === 'english') {
        setPickEnglishWord(word)
      } else {
        setPickRussianWord(word)
      }
    }

    return (
      <Button
        className={cn(s.word, {
          [s.wordSelected]: isSelected,
          [s.wordRight]: isCorrect,
          [s.wordWrong]: isWrong,
        })}
        onClick={handlePick}
        withText={false}
      >
        <P color={isPick ? 'white' : 'black'} fontSize={24}>
          {word}
        </P>
      </Button>
    )
  }
)

interface WordTileProps {
  word: string
  type: 'english' | 'russian'
  isSelected?: boolean
  isCorrect?: boolean
  isWrong?: boolean
}
