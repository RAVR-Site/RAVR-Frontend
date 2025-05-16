import { useState } from 'react'

import { P } from '@/shared/ui'
import cn from 'classnames'

import s from './GrammarInput.module.scss'

export const GrammarInput = ({
  words,
}: GrammarInputProps) => {
  const [activeLever, setActiveLever] =
    useState<boolean>(false)

  const [animationWord, setAnimationWord] =
    useState<boolean>(false)

  const handleLeverClick = () => {
    if (activeLever || animationWord) return

    setActiveLever(true)
    setAnimationWord(true)

    setTimeout(() => setActiveLever(false), 300)
    setTimeout(() => setAnimationWord(false), 2000)
  }

  return (
    <div className={s.grammarInput}>
      <div className={s.top}>
        <P
          fontSize={32}
          fontFamily={'DaysOne'}
          color={'black'}
        >
          Предложение которое надо подобрать
        </P>
      </div>
      <div className={s.bottom}>
        <div className={s.words}>
          {words.map((word, index) => (
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
        <div className={s.lever} onClick={handleLeverClick}>
          <div
            className={cn(
              s.stick,
              activeLever && s.stickActive
            )}
          />
        </div>
      </div>
    </div>
  )
}

interface GrammarInputProps {
  words: string[]
}
