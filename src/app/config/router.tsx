import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { LevelInfo } from '@/widgets/lesson-info'
import { LevelsNavigation } from '@/widgets/levels-nav'

const Home = lazy(() => import('@/pages/home'))
const Achievements = lazy(
  () => import('@/pages/achievements')
)
const User = lazy(() => import('@/pages/user'))
const Grammar = lazy(() => import('@/pages/grammar'))
const Vocabulary = lazy(() => import('@/pages/vocabulary'))
const Practice = lazy(() => import('@/pages/practice'))
const Rating = lazy(() => import('@/pages/rating'))
const Register = lazy(() => import('@/pages/register'))
const Login = lazy(() => import('@/pages/login'))

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/grammar',
    element: <Grammar />,
    children: [
      {
        path: '',
        element: (
          <LevelsNavigation lessonType={'grammar'} />
        ),
      },
      {
        path: '/grammar/lesson/:lessonNumber',
        element: <LevelInfo lessonType={'grammar'} />,
      },
    ],
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
        path: '/vocabulary/lesson/:lessonNumber',
        element: <LevelInfo lessonType={'vocabulary'} />,
      },
    ],
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
        path: '/practice/lesson/:lessonNumber',
        element: <LevelInfo lessonType={'practice'} />,
      },
    ],
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
