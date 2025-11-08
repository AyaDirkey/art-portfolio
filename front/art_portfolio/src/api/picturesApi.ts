import type { ApiResponse, Picture } from '../types';
import api from './api';
import { AppLink } from '../AppLink';

export const getPictures = async (): Promise<Picture[]> => {
  const response = await api.get<ApiResponse<Picture[]>>(AppLink.get_pictures);
  return response.data.data;
};

export const showPicture = async (): Promise<Picture> => {
  const response = await api.post<ApiResponse<Picture>>(AppLink.picture_show);
  return response.data.data;
};