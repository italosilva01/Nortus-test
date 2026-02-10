import axiosInstance from "../api.instance";

export const resourcesEndpoints = {
  getMapClientsData: () => axiosInstance.get("/map"),
  getTicketManagementData: () => axiosInstance.get("/tickets"),
};
