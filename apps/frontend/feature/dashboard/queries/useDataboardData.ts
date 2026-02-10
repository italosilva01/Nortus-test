import { DashboardData } from "@/feature/dashboard/types";
import axiosInstance from "@lib/api.instance";
import { useQuery } from "@tanstack/react-query";
import { dashboardDataKey } from "./keys";

const getDashboardData = async (): Promise<DashboardData> => {
  const response = await axiosInstance.get<DashboardData>("/dashboard");
  return response.data;
};

export const useDashboardData = () => {
  const { data, isPending, error } = useQuery({
    queryKey: dashboardDataKey.all,
    queryFn: getDashboardData,
  });

  return { data, isPending, error };
};
