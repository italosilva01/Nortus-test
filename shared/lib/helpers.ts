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
      href: "/settings",
    },
  ];