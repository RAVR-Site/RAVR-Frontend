import { ApiResponseData } from '@/shared/model/types'

import { englishLevelList } from './englishLevelList'

export type EnglishLevelVariant = (typeof englishLevelList)[number]


// API
export type EnglishLevelApiResponseData = {
  changeLevel: EnglishLevelVariant
}

export type EnglishLevelApiResponse = ApiResponseData<EnglishLevelApiResponseData>
