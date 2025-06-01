import { IconProps } from '../../model/types'

export const NormalIcon = ({ size, active }: IconProps) => {
  return (
    <svg
      width={size?.width ?? 72}
      height={size?.height ?? 72}
      viewBox={'0 0 72 72'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <g clip-path={'url(#clip0_23_1517)'}>
        <path
          d={
            'M36 0C16.149 0 0 16.149 0 36C0 55.851 16.149 72 36 72C55.851 72 72 55.851 72 36C72 16.149 55.851 0 36 0ZM36 66C19.458 66 6 52.542 6 36C6 19.458 19.458 6 36 6C52.542 6 66 19.458 66 36C66 52.542 52.542 66 36 66ZM18 33C16.344 33 15 31.659 15 30C15 28.341 16.344 27 18 27H27C28.656 27 30 28.341 30 30C30 31.659 28.656 33 27 33H18ZM57 30C57 31.659 55.656 33 54 33H45C43.344 33 42 31.659 42 30C42 28.341 43.344 27 45 27H54C55.656 27 57 28.341 57 30ZM54 48C54 49.659 52.656 51 51 51H21C19.344 51 18 49.659 18 48C18 46.341 19.344 45 21 45H51C52.656 45 54 46.341 54 48Z'
          }
          fill={active ? '#FFDD45' : 'black'}
          fill-opacity={active ? '1' : '0.2'}
        />
      </g>
      <defs>
        <clipPath id={'clip0_23_1517'}>
          <rect width={'72'} height={'72'} fill={'white'} />
        </clipPath>
      </defs>
    </svg>
  )
}
