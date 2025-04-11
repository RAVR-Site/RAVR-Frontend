import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Home = lazy(() => import('@/pages/home'))
const Achievements = lazy(
  () => import('@/pages/achievements')
)
const AchievementById = lazy(
  () => import('@/pages/achievementById')
)
const User = lazy(() => import('@/pages/user'))
const Grammar = lazy(() => import('@/pages/grammar'))
const Vocabulary = lazy(() => import('@/pages/vocabulary'))
const Practice = lazy(() => import('@/pages/practice'))
const Rating = lazy(() => import('@/pages/rating'))

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/grammar',
    element: <Grammar />,
  },
  {
    path: '/vocabulary',
    element: <Vocabulary />,
  },
  {
    path: '/practice',
    element: <Practice />,
  },
  {
    path: '/rating',
    element: <Rating />,
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
        children: [
          {
            path: '',
            element: <Achievements />,
          },
          {
            path: ':id',
            element: <AchievementById />,
          },
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
