import axiosInstance from "../api.instance";

export const authEndpoints = {
  login: async (username: string, password: string) => {
    try {
      return await axiosInstance.post('/login', { username, password });
    } catch {
      throw new Error('Login request failed');
    }
  },
  refreshToken: async (refreshToken: string) => {
    try {
      return await axiosInstance.post('/refresh-token', { refreshToken });
    } catch (error) {
      throw new Error('Refresh token request failed error: ' + error);
    }
  },
  getDashboardData: async () => {
    try {
      return await axiosInstance.get('/dashboard');
    } catch {
      throw new Error('Dashboard data request failed');
    }
  },
  getCustomerMapData: async () => {
    try {
      return await axiosInstance.get('/map');
    } catch {
      throw new Error('Customer map data request failed');
    }
  },
  getTicketManagementData: async () => {
    try {
      return await axiosInstance.get('/tickets');
    } catch {
      throw new Error('Ticket management data request failed');
    }
  },
};
