import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const formatVariation = (variation: number, t: (key: string) => string) => {
  const sign = variation > 0 ? '+' : '';
  return `${sign}${variation}% ${t("DashboardPage.kpis.variation")}`;
};