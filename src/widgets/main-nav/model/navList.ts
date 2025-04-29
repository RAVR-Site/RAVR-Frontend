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
    color: '#FF5F92',
    link: '/grammar',
    lessonType: 'grammar',
  },
  {
    title: 'Vocabulary',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: '#9A5FFF',
    link: '/vocabulary',
    lessonType: 'vocabulary',
  },
  {
    title: 'Practice',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: '#FFDD45',
    link: '/practice',
    lessonType: 'practice',
  },
  {
    title: 'FPS RATING',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: '#FFFFFF',
    link: '/rating',
    image: true,
  },
]
