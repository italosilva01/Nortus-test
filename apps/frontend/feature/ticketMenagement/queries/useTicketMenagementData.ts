import axiosInstance from "@lib/api.instance";
import { useQuery } from "@tanstack/react-query";
import { TicketManagementData } from "../types/ticketManagement";
import { ticketsManagementKeys } from "./keys";

const getTicketManagementData = async (): Promise<TicketManagementData> => {
  const response = await axiosInstance.get<TicketManagementData>("/tickets");
  return response.data;
};

export const useTicketManagementData = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ticketsManagementKeys.allTickets,
    queryFn: getTicketManagementData,
  });

  return { data, isPending, error };
};
