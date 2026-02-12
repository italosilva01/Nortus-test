import {
  Ticket,
  TicketManagementData,
} from "@/feature/ticketMenagement/types/ticketManagement";
import { convertTicketPrioritiesAndStatus } from "@/shared/lib/utils";
import { create } from "zustand";

interface TicketManagementStore {
  data: TicketManagementData | null;
  isOpenModalCreateTicket: boolean;
  openCreateTicketModal: () => void;
  closeCreateTicketModal: () => void;
  setDataTicketManagement: (data: TicketManagementData) => void;
  getUniqueResponsibles: () => string[];
  addTicket: (newTicket: Ticket) => void;
  updateTicket: (updatedTicket: Ticket) => void;
}

export const useTicketManagementStore = create<TicketManagementStore>(
  (set, get) => ({
    data: null,
    isOpenModalCreateTicket: false,
    openCreateTicketModal: () => set({ isOpenModalCreateTicket: true }),
    closeCreateTicketModal: () => set({ isOpenModalCreateTicket: false }),
    setDataTicketManagement: (data) => set({ data }),

    getUniqueResponsibles: () => {
      const tickets = get().data?.tickets;
      if (!tickets) return [];
      return [...new Set(tickets.map((ticket: Ticket) => ticket.responsible))];
    },
    // TODO: Fazer refatoração para usar react-query

    addTicket: (newTicket: Ticket) => {
      const currentTickets = get().data?.tickets ?? [];
      const convertedTicket = convertTicketPrioritiesAndStatus([newTicket])[0];
      const updatedTickets = [convertedTicket, ...currentTickets];

      set((state) => ({
        data: state.data
          ? {
              ...state.data,
              tickets: updatedTickets,
            }
          : null,
      }));
    },

    updateTicket: (updatedTicket: Ticket) => {
      const currentTickets = get().data?.tickets ?? [];
      const updatedTickets = currentTickets.map((ticket) =>
        ticket.id === updatedTicket.id ? { ...updatedTicket } : ticket,
      );
      const convertedTickets = convertTicketPrioritiesAndStatus(updatedTickets);

      set((state) => ({
        data: state.data
          ? {
              ...state.data,
              tickets: convertedTickets,
            }
          : null,
      }));
    },
  }),
);
