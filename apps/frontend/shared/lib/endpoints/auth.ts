import api from '@/shared/lib/api';

export const authEndpoints = {
  login: async (username: string, password: string) => {
    try {
      return await api.post('/login', { username, password });
    } catch {
      throw new Error('Login request failed');
    }
  },
  refreshToken: async (refreshToken: string) => {
    try {
      return await api.post('/refresh-token', { refreshToken });
    } catch {
      throw new Error('Refresh token request failed');
    }
  },
  getDashboardData: async () => {
    try {
      return await api.get('/dashboard');
    } catch {
      throw new Error('Dashboard data request failed');
    }
  },
  getCustomerMapData: async () => {
    try {
      return await api.get('/map');
    } catch {
      throw new Error('Customer map data request failed');
    }
  },
  getTicketManagementData: async () => {
    try {
      return await api.get('/tickets');
    } catch {
      throw new Error('Ticket management data request failed');
    }
  },
};
