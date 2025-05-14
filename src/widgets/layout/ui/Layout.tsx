import { CSSProperties, ReactNode } from 'react'

import { Header } from '@/widgets/header'

import s from './Layout.module.scss'

export const Layout = ({
  children,
  height,
  padding,
  hasHeader = false,
  type,
}: LayoutProps) => {
  const calcHasHeader = () => {
    if (type === 'lesson') {
      return false
    } else {
      return hasHeader
    }
  }

  const calcPadding = () => {
    if (type === 'lesson') {
      return '3rem 5rem'
    } else {
      return padding
    }
  }

  return (
    <div
      className={s.layout}
      style={
        {
          height,
          padding: calcPadding(),
        } as CSSProperties
      }
    >
      {calcHasHeader() && <Header />}
      {children}
    </div>
  )
}

interface LayoutProps {
  children: ReactNode
  height?: string
  padding?: string
  hasHeader?: boolean
  type?: 'lesson'
}
