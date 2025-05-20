import { Size } from '@/shared/model/types'
import cn from 'classnames'

import { Logo, LogoProps } from '../../Logo/Logo'
import { LoadingSvg } from './assets/LoadingSvg'

import s from './Loader.module.scss'

export const Loader = ({
  className,
  size: logoSize,
  hasMargin,
  loaderSize,
  color = 'blue',
}: LoaderProps) => {
  const logoSizeFilter = logoSize || {
    width: loaderSize?.width
      ? loaderSize?.width / 3.33
      : 100,
    height: loaderSize?.width
      ? loaderSize?.width / 3.33
      : 100,
  }

  return (
    <div
      className={cn(s.loaderContainer, className)}
      style={{
        width: loaderSize?.width ?? '100%',
        height: loaderSize?.height ?? '100%',
      }}
    >
      <div className={s.loader}>
        <LoadingSvg color={color} />
        <Logo
          size={logoSizeFilter}
          color={color}
          hasMargin={hasMargin}
          isInLoader
        />
      </div>
    </div>
  )
}

interface LoaderProps extends LogoProps {
  className?: string
  loaderSize?: Size
}
