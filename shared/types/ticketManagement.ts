export interface TicketMetric {
  valor: number;
  variacao: number;
}

export interface Ticket {
  id: string;
  titulo: string;
  descricao: string;
  status: string;
  prioridade: string;
  criadoEm: string;
  atualizadoEm: string;
  responsavel: string;
  cliente: string;
  categoria: string;
}

export interface TicketFilters {
  status: string[];
  prioridade: string[];
  categoria: string[];
  responsavel: string[];
}

export interface TicketsList {
  filters: TicketFilters;
  data: Ticket[];
}

export interface TicketMetrics {
  ticketsAbertos: TicketMetric;
  ticketsEmProgresso: TicketMetric;
  ticketsConcluidos: TicketMetric;
  tempoMedioConclusao: TicketMetric;
}

export interface TicketManagementData {
  metrics: TicketMetrics;
  tickets: TicketsList;
}

export interface TicketManagementFilters {
  status: string;
  prioridade: string;
  categoria: string;
  responsavel: string;
}

