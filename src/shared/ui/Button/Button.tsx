import {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from 'react'

import { LessonType } from '@/entities/lesson'
import { TextParagraphColors } from '@/shared/model/types'
import cn from 'classnames'

import { P } from '../P/P'

import s from './Button.module.scss'

export const Button = ({
  onClick,
  borderColor = 'none',
  backgroundColor,
  textColor = 'white',
  children,
  fontSize = 24,
  width,
  padding,
  textAlign,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        s.button,
        s[`backgroundColor-${backgroundColor}`],
        s[`borderColor-${borderColor}`]
      )}
      onClick={onClick}
      style={
        {
          width,
          padding,
        } as CSSProperties
      }
      {...props}
    >
      <P
        fontFamily={'DaysOne'}
        fontSize={fontSize}
        color={textColor}
        textAlign={textAlign}
      >
        {children}
      </P>
    </button>
  )
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  children: ReactNode
  backgroundColor:
    | 'black'
    | 'white'
    | 'purple'
    | 'pink'
    | 'blue'
    | 'yellow'
    | 'none'
  borderColor?:
    | 'black'
    | 'white'
    | 'purple'
    | 'blue'
    | 'pink'
    | 'yellow'
    | 'none'
  textColor?: TextParagraphColors
  textAlign?: 'left' | 'center'
  width?: string
  padding?: string
  fontSize?: 20 | 24
}
