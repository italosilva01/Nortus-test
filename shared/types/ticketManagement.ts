export interface TicketResume {
  open: number;
  inProgress: number;
  solved: number;
  timeAverageHours: number;
}

export interface Ticket {
  id: string;
  priority: "Urgente" | "Média" | "Baixa";
  client: string;
  email: string;
  subject: string;
}

export interface TicketManagementData {
  resumo: TicketResume;
  status: string[]; 
  priorities: string[];
  tickets: Ticket[];
}