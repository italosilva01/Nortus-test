import { endpoints } from "@/shared/lib/endpoints";
import { HTTP_STATUS_CODES } from "@/shared/lib/helpers";
import { convertTicketPrioritiesAndStatus } from "@/shared/lib/utils";
import { Ticket, TicketManagementData } from "@/shared/types/ticketManagement";
import { create } from "zustand";

interface TicketManagementStore {
    data: TicketManagementData | null;
    isLoading: boolean;
    error: string | null;
    isOpenModalCreateTicket: boolean;
    openCreateTicketModal: () => void;   
    closeCreateTicketModal: () => void;
    setDataTicketManagement: (data: TicketManagementData) => void;
    setLoading: (loading: boolean) => void;
    fetchTicketManagementData: () => Promise<void>;
    getUniqueResponsibles: () => string[];
    addTicket: (newTicket: Ticket) => void;
    updateTicket: (updatedTicket: Ticket) => void;
  }

  export const useTicketManagementStore = create<TicketManagementStore>((set, get) => ({
    data: null,
    isLoading: false,
    error: null,
    isOpenModalCreateTicket: false,    
    openCreateTicketModal: () => set({ isOpenModalCreateTicket: true }),
    closeCreateTicketModal: () => set({ isOpenModalCreateTicket: false }),
    setDataTicketManagement: (data) => set({ data, error: null }),
    setLoading: (isLoading) => set({ isLoading }),

    fetchTicketManagementData: async () => {
      set({ isLoading: true, error: null });
      try {
        const response = await endpoints.auth.getTicketManagementData();
        if (response.status === HTTP_STATUS_CODES.OK && response?.data) {
          const responseData = response.data as TicketManagementData;
          const convertedTickets = convertTicketPrioritiesAndStatus(responseData.tickets);
          
          set({ 
            data: {
              ...responseData, 
              tickets: convertedTickets
            },
            isLoading: false 
          });
        } else {
          set({ error: 'Falha ao buscar dados de gerenciamento de tickets', isLoading: false });
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
        set({ error: errorMessage, isLoading: false });
      }
    },

    getUniqueResponsibles: () => {
      const tickets = get().data?.tickets;
      if (!tickets) return [];
      return [...new Set(tickets.map((ticket: Ticket) => ticket.responsible))];
    },

    addTicket: (newTicket: Ticket) => {
      const currentTickets = get().data?.tickets ?? [];
      const convertedTicket = convertTicketPrioritiesAndStatus([newTicket])[0];
      const updatedTickets = [convertedTicket, ...currentTickets];
      
      set((state) => ({
        data: state.data ? {
          ...state.data,
          tickets: updatedTickets
        } : null
      }));
    },

    updateTicket: (updatedTicket: Ticket) => {
      const currentTickets = get().data?.tickets ?? [];
      const updatedTickets = currentTickets.map(ticket =>
        ticket.id === updatedTicket.id ? { ...updatedTicket } : ticket
      );
      const convertedTickets = convertTicketPrioritiesAndStatus(updatedTickets);
      
      set((state) => ({
        data: state.data ? { 
          ...state.data, 
          tickets: convertedTickets 
        } : null,
      }));
    },

  }));