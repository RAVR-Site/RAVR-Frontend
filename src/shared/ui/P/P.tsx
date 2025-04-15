import { CSSProperties, ReactNode } from 'react'

import cn from 'classnames'

import s from './P.module.scss'

export const P = ({
  fontSize,
  fontWeight,
  fontFamily,
  className = 'base',
  color = 'white',
  textAlign = 'left',
  children,
}: ParagraphProps) => {
  return (
    <p
      className={cn(
        s[className],
        s[`fontFamily-${fontFamily}`],
        s[color],
        s[`fontWeight-${fontWeight}`],
        s[`fontSize-${fontSize}`]
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
  fontFamily?: 'Anton' | 'DaysOne' | 'Assistant'
  fontSize?: 16 | 20 | 24 | 32 | 40 | 48
  fontWeight?: 400 | 700
  className?: 'base' | 'title' | 'bigTitle'
  textAlign?: 'left' | 'center'
  children: ReactNode
}
