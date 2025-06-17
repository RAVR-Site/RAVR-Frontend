import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'
import {
  Link,
  Navigate,
  useLocation,
  useParams,
} from 'react-router-dom'

import {
  lessonApiStore,
  LessonType,
  selectedLessonStore,
} from '@/entities/lesson'
import { LessonResults } from '@/features/lesson-results'
import { P } from '@/shared/ui'
import { Timer } from '@/shared/ui/Timer/ui/Timer'
import { AnimatePresence, motion } from 'framer-motion'

import s from './WrapperLesson.module.scss'

export const WrapperLesson = observer(
  ({ children, lessonType }: WrapperLessonProps) => {
    const { lessonNumber } = useParams()
    const { pathname } = useLocation()

    const {
      selectedLessonState: { selectedLesson },
    } = selectedLessonStore

    const {
      setLessonResultResponse: { data: lessonResultData },
      saveLessonResultState: { saveLessonResult },
    } = lessonApiStore

    const redirectUrl = pathname.split('/')[1]

    if (!selectedLesson) {
      return <Navigate to={`/${redirectUrl}`} />
    }

    // FORMATTED DATA
    const data = selectedLesson

    const lessonMode =
      data.lessonMode.charAt(0).toUpperCase() +
      data.lessonMode.slice(1)

    console.log(
      lessonResultData || saveLessonResult ? '' : 'gjgf'
    )

    return (
      <div className={s[lessonType]}>
        <div className={s.header}>
          <div className={s[`lessonNumber-${lessonType}`]}>
            <P
              fontFamily={'DaysOne'}
              fontSize={32}
              color={'black'}
            >
              {selectedLesson.lessonNumber}
            </P>
          </div>
          <P color={'black'}>
            Lesson #{selectedLesson.lessonNumber}
          </P>
          <div className={s.lessonMode}>
            <P color={'black'} fontSize={24}>
              {lessonMode}
            </P>
          </div>
          {!lessonResultData && (
            <Timer
              textColor={'black'}
              timeToFinish={lessonMode === 'Easy' ? 90 : 60}
            />
          )}
        </div>

        <AnimatePresence mode={'wait'}>
          {lessonResultData || saveLessonResult ? (
            <motion.div
              key={'results'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className={s.lessonContent}
            >
              <LessonResults />
            </motion.div>
          ) : (
            <motion.div
              key={'content'}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className={s.lessonContent}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        {!(lessonResultData || saveLessonResult) && (
          <div className={s.tips}>
            <Link 
              to={`/${redirectUrl}/lesson/${lessonNumber}/info`}
            >
              <P color={'black'} fontSize={16}>
                Go back
              </P>
            </Link>
          </div>
        )}
      </div>
    )
  }
)

interface WrapperLessonProps {
  children: ReactNode
  lessonType: LessonType
}
