import { CSSProperties } from 'react'

import { Size } from '@/shared/model/types'

export const Logo = ({
  color,
  hasMargin = false,
  size,
}: LogoProps) => {
  const colors: Record<LogoProps['color'], string> = {
    yellow: '#FFDD45',
    purple: '#9A5FFF',
    blue: '#577CFF',
  }

  return (
    <svg
      width={size?.width || '106'}
      height={size?.height || '108'}
      viewBox={'0 0 106 108'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      style={
        {
          marginLeft: hasMargin ? '40px' : '',
        } as CSSProperties
      }
    >
      <g clip-path={'url(#clip0_39_4995)'}>
        <path
          d={
            'M106 0.0178223H21.9699L0 108L9.6985 107.872L17.6032 69.0217L74.8256 43.5702H22.7809L106 0.0178223Z'
          }
          fill={colors[color]}
          fill-opacity={'0.9'}
        />
        <path
          d={'M26.2854 0.0178223L4.09766 107.945'}
          stroke={'white'}
          stroke-miterlimit={'10'}
        />
      </g>
      <defs>
        <clipPath id={'clip0_39_4995'}>
          <rect
            width={'106'}
            height={'108'}
            fill={'white'}
          />
        </clipPath>
      </defs>
    </svg>
  )
}

interface LogoProps {
  color: 'purple' | 'blue' | 'yellow'
  hasMargin?: boolean
  size?: Size
}
