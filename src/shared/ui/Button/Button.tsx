import {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from 'react'

import { TextParagraphColors } from '@/shared/model/types'
import cn from 'classnames'

import { P } from '../P/P'

import s from './Button.module.scss'

export const Button = ({
  withText = true,
  onClick,
  borderColor = 'none',
  backgroundColor = 'none',
  textColor = 'white',
  children,
  fontSize = 24,
  width,
  padding,
  textAlign,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        s.button,
        s[`backgroundColor-${backgroundColor}`],
        s[`borderColor-${borderColor}`],
        className
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
      {withText ? (
        <P
          fontFamily={'DaysOne'}
          fontSize={fontSize}
          color={textColor}
          textAlign={textAlign}
        >
          {children}
        </P>
      ) : (
        children
      )}
    </button>
  )
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  withText?: boolean
  onClick?: () => void
  children: ReactNode
  backgroundColor?:
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
