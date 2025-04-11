import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '@/shared/ui'

import { SearchFormInputs } from '../../model/types'

import s from './Search.module.scss'

export const Search = ({}: SearchProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormInputs>()

  const onSubmit: SubmitHandler<
    SearchFormInputs
  > = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={'search'}
        placeholder={
          'Search by key word or by lesson number'
        }
        register={register('input')}
        error={errors.input?.message}
      />
    </form>
  )
}

interface SearchProps {}
