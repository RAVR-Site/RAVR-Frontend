import { LessonType } from '@/entities/lesson'

export interface NavItem {
  title: string
  description: string
  color: string
  link: string
  image?: boolean
  lessonType?: LessonType
}

export const navList: NavItem[] = [
  {
    title: 'Grammar',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: 'pink',
    link: '/grammar',
    lessonType: 'grammar',
  },
  {
    title: 'Vocabulary',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: 'purple',
    link: '/vocabulary',
    lessonType: 'vocabulary',
  },
  {
    title: 'Practice',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: 'blue',
    link: '/practice',
    lessonType: 'practice',
  },
  {
    title: 'FPS RATING',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: 'white',
    link: '/rating',
    image: true,
  },
]
