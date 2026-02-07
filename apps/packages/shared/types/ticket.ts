export interface TicketResume {
  open: number;
  inProgress: number;
  solved: number;
  timeAverageHours: number;
}

export interface Ticket {
  id: string;
  priority: "Urgente" | "Média" | "Baixa";
  status: string;
  client: string;
  email: string;
  subject: string;
  responsible: string;
  createdAt: string;
}

export interface TicketManagementData {
  resumo: TicketResume;
  status: string[];
  priorities: string[];
  tickets: Ticket[];
}
