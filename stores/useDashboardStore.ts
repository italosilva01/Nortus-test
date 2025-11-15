import { create } from 'zustand';
import { DashboardData, DashboardFilters, Client } from '@/shared/types/dashboard';
import { endpoints } from '@/shared/lib/endpoints';
import { HTTP_STATUS_CODES } from '@/shared/lib/helpers';

interface DashboardStore {
  data: DashboardData | null;
  isLoading: boolean;
  error: string | null;
  selectedFilters: DashboardFilters;

  setData: (data: DashboardData) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilter: (filterType: keyof DashboardFilters, value: string) => void;
  resetFilters: () => void;
  fetchDashboardData: () => Promise<void>;
  
  getFilteredClients: () => Client[];
}

const initialFilters: DashboardFilters = {
  status: 'Todos',
  secureType: 'Todos',
  location: 'Todos',
};

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  data: null,
  isLoading: false,
  error: null,
  selectedFilters: initialFilters,

  setData: (data) => set({ data, error: null }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),

  setFilter: (filterType, value) =>
    set((state) => ({
      selectedFilters: { ...state.selectedFilters, [filterType]: value },
    })),

  resetFilters: () => set({ selectedFilters: initialFilters }),

  fetchDashboardData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await endpoints.auth.getDashboardData();
      console.log('response', response?.data);
      if (response.status === HTTP_STATUS_CODES.OK && response?.data) {
        set({ data: response.data, isLoading: false });
      } else {
        set({ error: 'Falha ao buscar dados do dashboard', isLoading: false });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      set({ error: errorMessage, isLoading: false });
    }
  },

  getFilteredClients: () => {
    const { data, selectedFilters } = get();
    if (!data?.activeClients?.data) return [];

    return data.activeClients.data.filter((client) => {
      const matchStatus =
        selectedFilters.status === 'Todos' || client.status === selectedFilters.status;
      const matchSecureType =
        selectedFilters.secureType === 'Todos' || client.secureType === selectedFilters.secureType;
      const matchLocation =
        selectedFilters.location === 'Todos' || client.location === selectedFilters.location;

      return matchStatus && matchSecureType && matchLocation;
    });
  },
}));

