export interface NavItem {
  title: string
  description: string
  color: string
  link: string
  image?: boolean
}

export const navList: NavItem[] = [
  {
    title: 'Grammar',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: '#FF5F92',
    link: '/grammar',
  },
  {
    title: 'Vocabulary',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: '#9A5FFF',
    link: '/vocabulary',
  },
  {
    title: 'Practice',
    description:
      'Et et nisi ipsum dui leo, libero, sapien accumsan et. Vulputate ornare arcu efficitur adipiscing fau',
    color: '#FFDD45',
    link: '/practice',
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
