import { AppLink } from '../AppLink';
import type { ApiResponse, ContactInfo } from '../types';
import api from './api';

export const getContactInfo = async (): Promise<ContactInfo> => {
  const response = await api.get<ApiResponse<ContactInfo[]>>(AppLink.get_contacts);
  return response.data.data[0];
};