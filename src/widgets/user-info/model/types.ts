import { ApiResponseData } from '@/shared/model/types';

interface UserStats {
  average_completion: number;
  average_experience: number;
  fastest_completion: number;
  max_experience: number;
  total_experience: number;
  total_lessons: number;
}

export type UserResponseData = {
  id: number;
  experience: number;
  first_name: string;
  last_name: string;
  username: string;
  stats: UserStats;
}


export type UserResponse = ApiResponseData<UserResponseData>