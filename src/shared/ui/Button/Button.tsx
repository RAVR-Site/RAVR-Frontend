import {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from 'react'

import { P } from '../P/P'

import s from './Button.module.scss'

export const Button = ({
  onClick,
  borderColor = 'none',
  backgroundColor,
  children,
  fontSize = 24,
  width,
  padding,
  ...props
}: ButtonProps) => {
  const colors: Record<
    ButtonProps['backgroundColor'],
    string
  > = {
    yellow: '#FFDD45',
    purple: '#9A5FFF',
    pink: '#FF5F92',
    blue: '#577CFF',
    white: '#FFFFFF',
    black: '#000000',
    none: 'none',
  }

  return (
    <button
      className={s.button}
      onClick={onClick}
      style={
        {
          background: colors[backgroundColor]
            ? colors[backgroundColor]
            : 'none',
          border:
            borderColor !== 'none'
              ? `2px solid ${colors[borderColor]}`
              : 'none',
          width,
          padding,
        } as CSSProperties
      }
      {...props}
    >
      <P fontFamily={'DaysOne'} fontSize={fontSize}>
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
  width?: string
  padding?: string
  fontSize?: 20 | 24
}
