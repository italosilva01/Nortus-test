import DashboardIcon from "@/public/icons/dashboard.svg";
import PersonIcon from "@/public/icons/person.svg";
import MessageIcon from "@/public/icons/message.svg";
import TicketsIcon from "@/public/icons/tickets.svg";
import CalcIcon from "@/public/icons/calcIcon.svg";
interface MenuItem {
    icon: { src: string };
    label: string;
    href: string;
  }
  
export const menuItems: MenuItem[] = [
    {
      icon: DashboardIcon as { src: string },
      label: "dashboard",
      href: "/",
    },
    {
      icon: PersonIcon as { src: string },
      label: "users",
      href: "/users",
    },
    {
      icon: MessageIcon as { src: string },
      label: "reports",
      href: "/reports",
    },
    {
      icon: TicketsIcon as { src: string },
      label: "settings",
      href: "/settings",
    },
    {
      icon: CalcIcon as { src: string },
      label: "calculator",
      href: "/calculator",
    },
  ];

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