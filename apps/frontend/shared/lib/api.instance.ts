import axios from 'axios';
import { getSession } from 'next-auth/react';
import axiosConfig from './api.config';

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url?.includes('login') || config.url?.includes('refresh-token')) {
      return config;
    }

    if (typeof window !== 'undefined') {
      const session = await getSession();
      const accessToken = session?.user?.accessToken;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      
      } else {
        console.warn('[API Interceptor] AccessToken não encontrado na sessão');
      }
    }

    return config;
  },
  (error) => {
    console.error('[API Interceptor] Erro:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
