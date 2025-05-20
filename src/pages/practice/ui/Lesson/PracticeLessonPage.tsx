import { Layout } from '@/widgets/layout'
import { WrapperLesson } from '@/widgets/wrapper-lesson'

export default function PracticeLessonPage() {
  return (
    <Layout type={'lesson'} height={'100vh'}>
      <WrapperLesson lessonType={'practice'}>
        <></>
      </WrapperLesson>
    </Layout>
  )
}
