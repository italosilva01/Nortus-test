import { KPI_BUTTONS } from "@/shared/lib/helpers";
import { KpisTrend } from "../types/dashboard";

export const getTrendData = (kpisTrend: KpisTrend, selectedKpi: string) => {
  if (!kpisTrend) return [];
  const trendMap: { [key: string]: number[] | undefined } = {
    retention: kpisTrend.retentionTrend?.data,
    conversion: kpisTrend.conversionTrend?.data,
    churn: kpisTrend.churnTrend?.data,
    arpu: kpisTrend.arpuTrend?.data,
  };

  return trendMap[selectedKpi] || [];
};

export const getTrendName = (selectedKpi: string) => {
  const kpiLabel = KPI_BUTTONS.find((kpi) => kpi.value === selectedKpi)?.label;
  return kpiLabel || "KPI";
};
