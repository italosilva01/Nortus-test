
import { MapData } from "@/shared/types/mapCustomer";
import { create } from "zustand";
import { endpoints } from "@/shared/lib/endpoints";
import { HTTP_STATUS_CODES } from "@/shared/lib/helpers";

interface MapCustomerStore {
    data: MapData | null;
    isLoading: boolean;
    error: string | null;
  
    setDataMapCustomer: (data: MapData) => void;
    setLoading: (loading: boolean) => void;
    fetchCustomerMapData: () => Promise<void>;
  }

  export const useMapCustomerStore = create<MapCustomerStore>((set, get) => ({
    data: null,
    isLoading: false,
    error: null,
  
    setDataMapCustomer: (data) => set({ data, error: null }),
    setLoading: (isLoading) => set({ isLoading }),
    
    fetchCustomerMapData: async () => {
      set({ isLoading: true, error: null });
      try {
        const response = await endpoints.auth.getCustomerMapData();
        console.log('response', response?.data)
        if (
          response.status === HTTP_STATUS_CODES.OK &&
          response.data !== undefined &&
          response.data !== null
        ) {
          set({ data: response.data.data as MapData, isLoading: false });
        } else {
          set({ error: 'Falha ao buscar dados do mapa de clientes', isLoading: false });
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
        set({ error: errorMessage, isLoading: false });
      }
    },

  }));