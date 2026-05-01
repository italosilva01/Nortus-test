import axiosInstance from "@lib/api.instance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { mapStatusToTagVariant } from "../../../shared/lib/utils";
import { mapPriorityToTagVariant } from "../helpers";
import { Ticket, TicketManagementData } from "../types/ticketManagement";
import { ticketsManagementKeys } from "./keys";

const getTicketManagementData = async (): Promise<TicketManagementData> => {
  const response = await axiosInstance.get<TicketManagementData>("/tickets");
  if (response.data && Array.isArray(response.data.tickets)) {
    response.data.tickets = response.data.tickets.map((ticket) => ({
      ...ticket,
      priority: mapPriorityToTagVariant(ticket.priority),
      status: mapStatusToTagVariant(ticket.status),
    }));
  }
  return response.data;
};

const createTicket = async (newTicket: Ticket): Promise<Ticket> => {
  const response = await axiosInstance.post<Ticket>("/tickets", newTicket);
  return response.data;
};

const updateTicket = async (ticket: Ticket): Promise<Ticket> => {
  const response = await axiosInstance.put<Ticket>(
    `/tickets/${ticket.id}`,
    ticket,
  );
  return response.data;
};

const deleteTicket = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/tickets/${id}`);
};

export const useTicketManagementData = (
  select?: (data: TicketManagementData) => TicketManagementData,
) => {
  const queryClient = useQueryClient();

  const { data, isPending, error } = useQuery({
    queryKey: ticketsManagementKeys.allTickets,
    queryFn: getTicketManagementData,
    select,
  });

  const updateTicketMutation = useMutation({
    mutationFn: updateTicket,
    onSuccess: () => {
      toast.success("Ticket updated successfully");
      queryClient.invalidateQueries({
        queryKey: ticketsManagementKeys.allTickets,
      });
    },
  });

  const createTicketMutation = useMutation({
    mutationFn: createTicket,
    onSuccess: () => {
      toast.success("Ticket created successfully");
      queryClient.invalidateQueries({
        queryKey: ticketsManagementKeys.allTickets,
      });
    },
  });

  const deleteTicketMutation = useMutation({
    mutationFn: deleteTicket,
    onSuccess: () => {
      toast.success("Ticket deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ticketsManagementKeys.allTickets,
      });
    },
  });

  return {
    data,
    isPending,
    error,
    updateTicketMutation,
    createTicketMutation,
    deleteTicketMutation,
  };
};
