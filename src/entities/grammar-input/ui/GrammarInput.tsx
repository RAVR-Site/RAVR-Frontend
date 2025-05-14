import { P } from '@/shared/ui'

import s from './GrammarInput.module.scss'

export const GrammarInput = ({
  words,
}: GrammarInputProps) => {
  console.log(words)

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
          {words.map(word => (
            <div key={word} className={s.word}>
              <P
                fontSize={24}
                fontFamily={'DaysOne'}
                color={'black'}
              >
                {word}
              </P>
            </div>
          ))}
        </div>
        <div className={s.lever}></div>
      </div>
    </div>
  )
}

interface GrammarInputProps {
  words: string[]
}
