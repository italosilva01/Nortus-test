import { DashboardData } from "../../types/dashboard";
import axiosInstance from "../api.instance";

export const resourcesEndpoints = {
  getDashboardData:  async (): Promise<DashboardData> => {
   const response = await axiosInstance.get<DashboardData>('/dashboard');
    return response.data;
   },
  getMapClientsData:  () => axiosInstance.get('/map'),
  getTicketManagementData:  () => axiosInstance.get('/tickets'),
};