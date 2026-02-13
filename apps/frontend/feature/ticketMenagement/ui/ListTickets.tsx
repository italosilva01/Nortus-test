"use client";

import { useTranslations } from "next-intl";

import { PanelBig } from "@/components/ui/custom/PanelBig";
import { useTicketFilters } from "../../../hooks/useTicketFilters";
import { useTicketManagementData } from "../queries/useTicketMenagementData";
import FiltersTickets from "./FiltersTickets";
import TableTickets from "./TableTickets";

const ListTickets = () => {
  const t = useTranslations("TicketsManagementPage");
  const { data: tickets } = useTicketManagementData((data) => data.tickets);
  console.log("tickets", tickets);

  const {
    searchTerm,
    setSearchTerm,
    selectedPriority,
    setSelectedPriority,
    selectedStatus,
    setSelectedStatus,
    selectedResponsible,
    setSelectedResponsible,
    filteredTickets,
  } = useTicketFilters({ tickets });
  return (
    <PanelBig
      title={t("listTickets.title")}
      className="size-full max-w-full xl:max-w-full 2xl:max-w-full flex flex-col gap-4"
      contentClassName="flex flex-col gap-4"
    >
      <FiltersTickets
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        selectedPriority={selectedPriority}
        onPriorityChange={setSelectedPriority}
        selectedResponsible={selectedResponsible}
        onResponsibleChange={setSelectedResponsible}
      />

      <TableTickets tickets={tickets ?? []} />
    </PanelBig>
  );
};

export default ListTickets;
