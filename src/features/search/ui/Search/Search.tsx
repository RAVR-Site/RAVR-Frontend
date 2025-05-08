import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '@/shared/ui'

import { SearchFormInputs } from '../../model/types'

import s from './Search.module.scss';

export const Search = () => {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={s.form}
    >
      <Input
        type={'search'}
        inputClass={'search'}
        placeholder={
          'Search by key word or by lesson number'
        }
        register={register('input')}
        error={errors.input?.message}
        size={50}
      />
    </form>
  )
}
