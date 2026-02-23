"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { Typography } from "@/components/ui/custom/Typography";
import { ROUTE_MAP } from "@/shared/lib/helpers";
import { PlusIcon } from "lucide-react";
import { useTicketManagementStore } from "../../feature/ticketMenagement/stories/useTicketManagementStore";
import { Button } from "../ui/button";

export const Header = () => {
  const pathname = usePathname();
  const t = useTranslations("HeaderLayout");
  const { openCreateTicketModal } = useTicketManagementStore();
  const isTicketsManagement = pathname === "/ticketsManagement";

  return (
    <header className="w-full z-10 flex h-16 xl:h-20 2xl:h-22 items-center justify-between bg-app-dark-blue-500 px-6 pl-[140px] 2xl:pl-[190px] absolute">
      <Typography
        fontFamily="montserrat"
        fontWeight="semibold"
        fontColor="surface-solid"
        className="text-[1.25rem]"
      >
        {t(ROUTE_MAP[pathname] || "dashboard")}
      </Typography>

      {isTicketsManagement && (
        <Button
          onClick={openCreateTicketModal}
          className="sidebar-link-active rounded-full"
        >
          <PlusIcon />
          Novo Ticket
        </Button>
      )}
    </header>
  );
};
