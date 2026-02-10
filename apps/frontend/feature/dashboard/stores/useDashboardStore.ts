import {
  Client,
  DashboardData,
  DashboardFilters,
} from "@/feature/dashboard/types";
import { create } from "zustand";

interface DashboardStore {
  data: DashboardData | null;
  selectedFilters: DashboardFilters;
  setFilter: (filterType: keyof DashboardFilters, value: string) => void;
  resetFilters: () => void;
  getFilteredClients: () => Client[];
}

const initialFilters: DashboardFilters = {
  status: "Todos",
  secureType: "Todos",
  location: "Todos",
};

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  data: null,
  selectedFilters: initialFilters,

  setFilter: (filterType, value) =>
    set((state) => ({
      selectedFilters: { ...state.selectedFilters, [filterType]: value },
    })),

  resetFilters: () => set({ selectedFilters: initialFilters }),

  getFilteredClients: () => {
    const { data, selectedFilters } = get();
    if (!data?.activeClients?.data) return [];

    return data.activeClients.data.filter((client) => {
      const matchStatus =
        selectedFilters.status === "Todos" ||
        client.status === selectedFilters.status;
      const matchSecureType =
        selectedFilters.secureType === "Todos" ||
        client.secureType === selectedFilters.secureType;
      const matchLocation =
        selectedFilters.location === "Todos" ||
        client.location === selectedFilters.location;

      return matchStatus && matchSecureType && matchLocation;
    });
  },
}));
