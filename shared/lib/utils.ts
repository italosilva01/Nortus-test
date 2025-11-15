import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { KpisTrend } from "../types/dashboard";
import { KPI_BUTTONS } from "./helpers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const formatNumberWithK = (value: number): string => {
  if (value >= 1000) {
    const kValue = value / 1000;
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(kValue);
    return `R$ ${formattedValue}k`;
  }
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const formatVariation = (variation: number, t: (key: string) => string) => {
  const sign = variation > 0 ? '+' : '';
  return `${sign}${variation}% ${t("DashboardPage.kpis.variation")}`;
};

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
  const kpiLabel = KPI_BUTTONS.find(kpi => kpi.value === selectedKpi)?.label;
  return kpiLabel || 'KPI';
};

