import { observer } from 'mobx-react-lite'

import { P } from '@/shared/ui'
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
    const { setPickEnglishWord, setPickRussianWord, lessonIsCompleted } =
      vocabularyLessonStore

    const isPick = isSelected || isCorrect || isWrong

    const handlePick = () => {
      if (isPick || lessonIsCompleted) return

      if (type === 'english') {
        setPickEnglishWord(word)
      } else {
        setPickRussianWord(word)
      }
    }

    return (
      <div
        className={cn(s.word, {
          [s.wordSelected]: isSelected,
          [s.wordRight]: isCorrect,
          [s.wordWrong]: isWrong,
        })}
        onClick={handlePick}
      >
        <P color={isPick ? 'white' : 'black'} fontSize={24}>
          {word}
        </P>
      </div>
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
