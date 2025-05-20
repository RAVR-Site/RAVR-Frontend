import { GrammarInput } from '@/entities/grammar-input'

import s from './GrammarLesson.module.scss'

export const GrammarLesson = () => {
  const wordsArr = [
    ['Is', 'is', 'is', 'is', 'is', 'is', 'is'],
    ['Is', 'is', 'is', 'is', 'is', 'is', 'is'],
    ['Is', 'is', 'is', 'is', 'is', 'is', 'is'],
  ]

  return (
    <div className={s.grammarLesson}>
      <GrammarInput words={wordsArr[0]} />
      <GrammarInput words={wordsArr[1]} />
      <GrammarInput words={wordsArr[2]} />
    </div>
  )
}
