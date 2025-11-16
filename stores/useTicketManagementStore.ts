import { endpoints } from "@/shared/lib/endpoints";
import { HTTP_STATUS_CODES } from "@/shared/lib/helpers";
import { convertTicketPrioritiesAndStatus } from "@/shared/lib/utils";
import { Ticket, TicketManagementData } from "@/shared/types/ticketManagement";
import { create } from "zustand";

interface TicketManagementStore {
    data: TicketManagementData | null;
    uniqueResponsibles: string[];
    isLoading: boolean;
    error: string | null;
  
    setDataTicketManagement: (data: TicketManagementData) => void;
    setLoading: (loading: boolean) => void;
    fetchTicketManagementData: () => Promise<void>;
    getUniqueResponsibles: () => string[];
  }

  export const useTicketManagementStore = create<TicketManagementStore>((set, get) => ({
    data: null,
    uniqueResponsibles: [],
    isLoading: false,
    error: null,
  
    setDataTicketManagement: (data) => set({ data, error: null }),
    setLoading: (isLoading) => set({ isLoading }),

    getUniqueResponsibles: () => {
      const tickets = get().data?.tickets;
      if (!tickets) return [];
      return [...new Set(tickets.map((ticket: Ticket) => ticket.responsible))];
    },
    
    fetchTicketManagementData: async () => {
      set({ isLoading: true, error: null });
      try {
        const response = await endpoints.auth.getTicketManagementData();
        if (response.status === HTTP_STATUS_CODES.OK && response?.data) {
          console.log("response.data", response.data);
          const responseData = response.data as TicketManagementData;
          set({ 
            data: {
              ...responseData, 
              tickets: convertTicketPrioritiesAndStatus(responseData.tickets)
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

  }));