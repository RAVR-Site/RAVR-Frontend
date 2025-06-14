import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import { LessonMode } from '@/entities/lesson'
import { showNotification } from '@/features/notifications'
import { Button, P } from '@/shared/ui'
import cn from 'classnames'

import { grammarLessonStore } from '../model/grammarLessonInputStore'

import s from './GrammarInput.module.scss'

export const GrammarInput = observer(
  ({
    words: coupleOfWords,
    sentence,
    type,
  }: GrammarInputProps) => {
    const {
      indexCoupleOfWordsState: {
        setIndexCoupleOfWords,
        indexCoupleOfWords,
      },
    } = grammarLessonStore

    const [activeLever, setActiveLever] =
      useState<boolean>(false)
    const [animationWord, setAnimationWord] =
      useState<boolean>(false)

    const handleLeverClick = () => {
      setIndexCoupleOfWords(prev => {
        if (prev < coupleOfWords.length - 1) return prev + 1
        else {
          if (type === 'easy') return 0

          showNotification(
            'error',
            'Вы больше не можете выбрать предложение, это правила режима hard',
            2000
          )

          return coupleOfWords.length - 1
        }
      })

      if (type === 'easy' && indexCoupleOfWords !== 4) {
        setActiveLever(true)
        setAnimationWord(true)

        const wordCount = coupleOfWords[0].split(' ').length

        setTimeout(() => setActiveLever(false), 300)
        setTimeout(
          () => setAnimationWord(false),
          wordCount * 230
        )
      }
    }

    return (
      <div className={s.grammarInput}>
        <div className={s.top}>
          <P
            fontSize={24}
            fontFamily={'DaysOne'}
            color={'black'}
            textAlign={'center'}
          >
            {sentence}
          </P>
        </div>
        <div className={s.bottom}>
          <div className={s.words}>
            {coupleOfWords[indexCoupleOfWords]
              .split(' ')
              .map((word, index) => (
                <div key={index + word} className={s.word}>
                  <P
                    fontSize={24}
                    fontFamily={'DaysOne'}
                    color={'black'}
                    className={cn(
                      s.wordText,
                      animationWord && s.wordAnimation
                    )}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {word}
                  </P>
                </div>
              ))}
          </div>
          <Button
            onClick={handleLeverClick}
            disabled={activeLever || animationWord}
            withText={false}
          >
            <div className={s.lever}>
              <div
                className={cn(
                  s.stick,
                  activeLever && s.stickActive
                )}
              ></div>
            </div>
          </Button>
        </div>
      </div>
    )
  }
)

interface GrammarInputProps {
  sentence: string
  words: string[]
  type?: LessonMode
}
