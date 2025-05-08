import { CSSProperties, ReactNode } from 'react'

import cn from 'classnames'

import s from './P.module.scss'

export const P = ({
  fontSize,
  fontWeight,
  fontFamily,
  type = 'base',
  color = 'white',
  textAlign = 'left',
  children,
  className
}: ParagraphProps) => {
  return (
    <p
      className={cn(
        s[type],
        s[`fontFamily-${fontFamily}`],
        s[color],
        s[`fontWeight-${fontWeight}`],
        s[`fontSize-${fontSize}`],
        className
      )}
      style={
        {
          textAlign,
        } as CSSProperties
      }
    >
      {children}
    </p>
  )
}

interface ParagraphProps {
  color?:
    | 'black'
    | 'white'
    | 'purple'
    | 'pink'
    | 'yellow'
    | 'blue'
    | 'green'
    | 'red'
  fontFamily?: 'Anton' | 'DaysOne' | 'Assistant'
  fontSize?: 10 | 12 | 14 | 15 | 16 | 20 | 24 | 32 | 40 | 48
  fontWeight?: 300 | 400 | 500 | 600 | 700 | 800
  type?: 'base' | 'title' | 'bigTitle' | 'practice'
  textAlign?: 'left' | 'center'
  children: ReactNode
  className?: string
}
