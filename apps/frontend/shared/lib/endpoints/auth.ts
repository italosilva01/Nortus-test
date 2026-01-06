import api from '@/shared/lib/api';

export const authEndpoints = {
  login: async (username: string, password: string) => {
    try {
      return await api.post('/login', { username, password });
    } catch {
      throw new Error('Login request failed');
    }
  },
  getDashboardData: async () => {
    try {
      console.log('getDashboardData');
      return await api.get('/dashboard');
    } catch {
      throw new Error('Dashboard data request failed');
    }
  },
  getCustomerMapData: async () => {
    try {
      return await api.get('/map.json');
    } catch {
      throw new Error('Customer map data request failed');
    }
  },
  getTicketManagementData: async () => {
    try {
      return await api.get('/ticket-management.json');
    } catch {
      throw new Error('Ticket management data request failed');
    }
  },
};
