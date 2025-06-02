import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const GrammarLessonPage = lazy(
  () => import('@/pages/grammar/ui/Lesson/GrammarLessonPage')
)
const PracticeLessonPage = lazy(
  () => import('@/pages/practice/ui/Lesson/PracticeLessonPage')
)
const VocabularyLessonPage = lazy(
  () =>
    import('@/pages/vocabulary/ui/Lesson/VocabularyLessonPage')
)
const Achievements = lazy(
  () => import('@/pages/achievements')
)
const Home = lazy(() => import('@/pages/home'))
const User = lazy(() => import('@/pages/user'))
const Grammar = lazy(() => import('@/pages/grammar'))
const Vocabulary = lazy(() => import('@/pages/vocabulary'))
const Practice = lazy(() => import('@/pages/practice'))
const Rating = lazy(() => import('@/pages/rating'))
const Register = lazy(() => import('@/pages/register'))
const Login = lazy(() => import('@/pages/login'))

import { LessonInfo } from '@/widgets/lesson-info'
import { LevelsNavigation } from '@/widgets/levels-nav'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/grammar',
    element: (
      <Grammar>
        <LevelsNavigation lessonType={'grammar'} />
      </Grammar>
    ),
  },
  {
    path: '/grammar/lesson/:lessonNumber/info',
    element: (
      <Grammar>
        <LessonInfo lessonType={'grammar'} />
      </Grammar>
    ),
  },
  {
    path: '/grammar/lesson/:lessonNumber',
    element: <GrammarLessonPage />,
  },
  {
    path: '/vocabulary',
    element: <Vocabulary />,
    children: [
      {
        path: '',
        element: (
          <LevelsNavigation lessonType={'vocabulary'} />
        ),
      },
      {
        path: '/vocabulary/lesson/:lessonNumber/info',
        element: <LessonInfo lessonType={'vocabulary'} />,
      },
    ],
  },
  {
    path: '/vocabulary/lesson/:lessonNumber',
    element: <VocabularyLessonPage />,
  },
  {
    path: '/practice',
    element: <Practice />,
    children: [
      {
        path: '',
        element: (
          <LevelsNavigation lessonType={'practice'} />
        ),
      },
      {
        path: '/practice/lesson/:lessonNumber/info',
        element: <LessonInfo lessonType={'practice'} />,
      },
    ],
  },
  {
    path: '/practice/lesson/:lessonNumber',
    element: <PracticeLessonPage />,
  },
  {
    path: '/rating',
    element: <Rating />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/user',
    children: [
      {
        path: '',
        element: <User />,
      },
      {
        path: 'achievements',
        element: <Achievements />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
