import { DownTrendIcon, UpTradeIcon } from '../../icons'

import s from './TrendIcon.module.scss'

const icons = {
  stable: <></>,
  up: <UpTradeIcon />,
  down: <DownTrendIcon />,
}

export const TrendIcon = ({ trend }: TrendIconProps) => {
  return <div className={s.trendIcon}>{icons[trend]}</div>
}

interface TrendIconProps {
  trend: 'stable' | 'up' | 'down'
}
