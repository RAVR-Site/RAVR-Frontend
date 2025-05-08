import { Size } from '@/shared/model/types'

import { Loader } from '../AnimationComponent/Loader'

import s from './LoaderPage.module.scss'

export const LoaderPage = ({
  loaderSize,
}: LoaderPageProps) => {
  return (
    <div className={s.loaderPage}>
      <Loader loaderSize={loaderSize} color={'white'} />
    </div>
  )
}

interface LoaderPageProps {
  loaderSize?: Size
}
