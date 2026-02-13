import {
  Ticket,
  TicketManagementData,
} from "@/feature/ticketMenagement/types/ticketManagement";
import { create } from "zustand";

interface TicketManagementStore {
  data: TicketManagementData | null;
  isOpenModalCreateTicket: boolean;
  openCreateTicketModal: () => void;
  closeCreateTicketModal: () => void;
  setDataTicketManagement: (data: TicketManagementData) => void;
  getUniqueResponsibles: () => string[];
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
  }),
);
