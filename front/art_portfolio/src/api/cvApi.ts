import { AppLink } from '../AppLink';
import type { ApiResponse, CV } from '../types';
import api from './api';

export const getCV = async (): Promise<CV> => {
  const response = await api.get<ApiResponse<CV>>(AppLink.get_cv);
  return response.data.data;
};