import axios from 'axios';
import { AppLink } from '../AppLink';

const api = axios.create({
  baseURL: AppLink.server,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default api;