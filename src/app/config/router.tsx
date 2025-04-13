import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/widgets/layout'

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
