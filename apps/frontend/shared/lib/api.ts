import axios from 'axios';
import { getSession } from 'next-auth/react';

const api = axios.create({
  //baseURL: 'https://loomi.s3.us-east-1.amazonaws.com/mock-api-json/v2',
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar o token automaticamente em todas as requisições
api.interceptors.request.use(
  async (config) => {
    if(config.url?.includes('login')) {
      return config;
    }
    const session = await getSession();
    
    if (session?.user?.accessToken) {
      config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    }

    console.log('--------------------------------');
    console.log('config', config);
    console.log('--------------------------------');
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
