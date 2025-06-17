import { ApiResponseData } from '@/shared/model/types';

export type RatingGetApiResponse = {
  user_id: number;
  username: string;
  position: number;
  experience: number;
  trend: 'stable' | 'up' | 'down';
}
  
export type RatingGetResponse = ApiResponseData<RatingGetApiResponse[]>