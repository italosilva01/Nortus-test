import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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



export function mapStatusToTagVariant(status: string): 'open' | 'inProgress' | 'solved' | 'default' {
  const mapping: Record<string, 'open' | 'inProgress' | 'solved' | 'default'> = {
    'Aberto': 'open',
    'Em andamento': 'inProgress',
    'Resolvido': 'solved',
    'Fechado': 'solved',
  };
  return mapping[status] || 'default';
}
 


export function convertTicketPrioritiesAndStatus<
  T extends { priority: string; status: string }
>(
  tickets: T[]
): (T & {
  priority: 'medium' | 'low' | 'urgent' | 'default';
  status: 'open' | 'inProgress' | 'solved' | 'default';
})[] {
  return tickets.map((ticket) => ({
    ...ticket,
    priority: mapPriorityToTagVariant(ticket.priority),
    status: mapStatusToTagVariant(ticket.status),
  }));
}
