import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { lessonApiStore } from '@/entities/lesson'
import { formatTime } from '@/shared/lib/utils/format-time/formatTime'
import { getAccessToken } from '@/shared/lib/utils/token-utils/tokenUtils'
import { Button, P } from '@/shared/ui'

import { resetStore } from '../model/resetStore'

import s from './LessonResults.module.scss'

export const LessonResults = observer(() => {
  const { pathname } = useLocation()

  const { reset } = resetStore

  const {
    setLessonResultResponse: { data: lessonResultData },
    saveLessonResultState: { saveLessonResult },
  } = lessonApiStore

  const data =
    lessonResultData?.data ?? saveLessonResult?.data

  if (!data) {
    return null
  }

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  const completedTime =
    'completedTime' in data
      ? data.completedTime
      : data.completionTime

  const earnedXP =
    'earnedXP' in data
      ? data.earnedXP
      : data.earnedExperience

  const url = pathname.split('/')[1]

  return (
    <div className={s.lessonResults}>
      <div className={s.lessonResultsContent}>
        <P
          fontSize={64}
          fontFamily={'DaysOne'}
          color={'black'}
        >
          Lesson Results
        </P>
        <P
          fontSize={48}
          fontFamily={'DaysOne'}
          color={'black'}
        >
          {formatTime(
            Number(completedTime),
            'withoutSecondsText'
          )}
        </P>
        <P fontSize={32} color={'black'}>
          {earnedXP !== 0
            ? 'You are a genius!'
            : 'Try harder next time!'}
        </P>
        <P
          color={'black'}
          fontSize={40}
          fontFamily={'DaysOne'}
        >
          You gainded {earnedXP} points
        </P>
        {!getAccessToken() && (
          <Link to={'/login'} className={s.loginLink}>
            <P color={'blue'}>
              Login to save your results
            </P>
          </Link>
        )}
      </div>

      <div className={s.buttons}>
        <Link to={`/${url}`} onClick={() => reset()}>
          <Button
            borderColor={'black'}
            textColor={'black'}
            padding={'6px 2rem'}
            fontSize={20}
          >
            Back
          </Button>
        </Link>
        <Link to={`/${url}`} onClick={() => reset()}>
          <Button
            borderColor={'black'}
            textColor={'black'}
            padding={'6px 2rem'}
            fontSize={20}
          >
            Next Lesson
          </Button>
        </Link>
      </div>
    </div>
  )
})
