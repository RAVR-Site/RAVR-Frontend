import { LessonType } from '@/entities/lesson'

export interface NavItem {
  id: number
  title: string
  description: string
  color: string
  link: string
  image?: boolean
  lessonType?: LessonType
}

export const navList: NavItem[] = [
  {
    id: 1,
    title: 'Grammar',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: 'pink',
    link: '/grammar',
    lessonType: 'grammar',
  },
  {
    id: 2,
    title: 'Vocabulary',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: 'purple',
    link: '/vocabulary',
    lessonType: 'vocabulary',
  },
  {
    id: 3,
    title: 'Practice',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: 'blue',
    link: '/practice',
    lessonType: 'practice',
  },
  {
    id: 4,
    title: 'FPS RATING',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: 'white',
    link: '/rating',
    image: true,
  },
]
