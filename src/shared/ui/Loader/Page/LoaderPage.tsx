import { MainColors, Size } from '@/shared/model/types'

import { P } from '../..'
import { Loader } from '../AnimationComponent/Loader'

import s from './LoaderPage.module.scss'

export const LoaderPage = ({
  loaderSize,
  colorText = 'white',
  colorLoader = 'white',
}: LoaderPageProps) => {
  return (
    <div className={s.loaderPage}>
      <Loader loaderSize={loaderSize} color={colorLoader} />
      <div className={s.loaderPageText}>
        <P fontSize={32} fontFamily={'DaysOne'} color={colorText}>
          Loading
        </P>
        <P color={colorText}>Please don't close this page</P>
      </div>
    </div>
  )
}

interface LoaderPageProps {
  loaderSize?: Size
  colorText?: MainColors
  colorLoader?: MainColors
}
