import type { ApiResponse, Award } from '../types';
import api from './api';
import { AppLink } from '../AppLink';

export const getAwards = async (): Promise<Award[]> => {
  const response = await api.get<ApiResponse<Award[]>>(AppLink.get_awards);
  return response.data.data;
};

export const showAward = async (): Promise<Award[]> => {
  const response = await api.post<ApiResponse<Award[]>>(AppLink.award_show);
  return response.data.data;
};