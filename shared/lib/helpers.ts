import CalcIcon from "@/public/icons/sideBar/calcIcon.svg";
import DashboardIcon from "@/public/icons/sideBar/dashboard.svg";
import MessageIcon from "@/public/icons/sideBar/message.svg";
import PersonIcon from "@/public/icons/sideBar/person.svg";
import TicketsIcon from "@/public/icons/sideBar/tickets.svg";
import TicketSolvedIcon from '@/public/icons/ticketManegement/doneTodayIcon.svg';
import TicketInProgressIcon from '@/public/icons/ticketManegement/inProgress.svg';
import TicketIcon from '@/public/icons/ticketManegement/ticketOpenIcon.svg';
import TicketTimeAverageIcon from '@/public/icons/ticketManegement/timeMedian.svg';
import { TicketResume } from "@/shared/types/ticketManagement";
interface MenuItem {
    icon: { src: string };
    label: string;
    href: string;
  }
  
  interface KpiButton {
    id: string
    label: string
    value: string
}

export const MENU_ITEMS: MenuItem[] = [
    {
      icon: DashboardIcon as { src: string },
      label: "dashboard",
      href: "/",
    },
    {
      icon: TicketsIcon as { src: string },
      label: "ticketsManagement",
      href: "/ticketsManagement",
    },
    {
      icon: MessageIcon as { src: string },
      label: "reports",
      href: "/reports",
    },
    {
      icon: PersonIcon as { src: string },
      label: "users",
      href: "/chat",
    },
   
    
    {
      icon: CalcIcon as { src: string },
      label: "calculator",
      href: "/calculator",
    },
  ];

  export  const ROUTE_MAP: Record<string, string> = {
    "/": "dashboard",
    "/ticketsManagement": "ticketsManagement",
    "/chat": "chat",

  };

  export const KPI_BUTTONS: KpiButton[] = [
    { id: 'retention', label: 'Retenção', value: 'retention' },
    { id: 'conversion', label: 'Conversão', value: 'conversion' },
    { id: 'churn', label: 'Churn', value: 'churn' },
    { id: 'arpu', label: 'ARPU', value: 'arpu' }
]

  export const HTTP_STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  }

  export const MAP_SEGMENTS_COLORS = {
    primary: '#006EF9',
    light: '#77DFFD',
    medium: '#0E81A5',
    dark: '#00449A',
    accent: '#53A9F9',
} as const;

export const PANELS_MAP: { key: keyof TicketResume;  icon: string }[] = [
  {
    key: 'open',
    icon: TicketIcon as string
  },
  {
    key: 'inProgress',
    icon: TicketInProgressIcon as string
  },
  {
    key: 'solved',
    icon: TicketSolvedIcon as string
  },
  {
    key: 'timeAverageHours',
    icon: TicketTimeAverageIcon as string
  }
];