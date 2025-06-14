import { observer } from 'mobx-react-lite'

import { toJS } from 'mobx'

import { vocabularyLessonStore } from '../../model/vocabularyLessonStore'
import { WordTile } from '../WordTile/WordTile'

import s from './WordGroup.module.scss'

export const WordGroup = observer(
  ({ words, type }: WordGroupProps) => {
    const { pickWords, selectedEnglish, selectedRussian } =
      vocabularyLessonStore

    const isWordSelected = (
      word: string,
      wordType: 'english' | 'russian'
    ) => {
      if (wordType === 'english') {
        return selectedEnglish === word
      }

      return selectedRussian.includes(word)
    }

    const isWordInCorrectPair = (
      word: string,
      wordType: 'english' | 'russian'
    ) => {
      return pickWords.some(
        ([eng, rusArr, isCorrect]) =>
          isCorrect &&
          (wordType === 'english'
            ? eng === word
            : rusArr.includes(word))
      )
    }

    const isWordInWrongPair = (
      word: string,
      wordType: 'english' | 'russian'
    ) => {
      return pickWords.some(
        ([eng, rusArr, isCorrect]) =>
          !isCorrect &&
          (wordType === 'english'
            ? eng === word
            : rusArr.includes(word))
      )
    }

    const isWordCheckOptions = (
      word: string,
      wordType: 'english' | 'russian'
    ) => {

      return {
        isSelected: isWordSelected(word, wordType),
        isCorrect: isWordInCorrectPair(word, wordType),
        isWrong: isWordInWrongPair(word, wordType),
      }
    }

    return (
      <div className={s.wordGroup}>
        {words.map((word, index) => (
          <WordTile
            key={`${word}-${index}`}
            type={type}
            word={word}
            {...isWordCheckOptions(word, type)}
          />
        ))}
      </div>
    )
  }
)

interface WordGroupProps {
  words: string[]
  type: 'english' | 'russian'
}
