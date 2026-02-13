import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { useTicketManagementStore } from "@/feature/ticketMenagement/stories/useTicketManagementStore";
import { mapStatusToTagVariant } from "@/shared/lib/utils";
import { useMemo } from "react";
import { mapPriorityToTagVariant } from "../helpers";

interface FiltersTicketsProps {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  selectedPriority: string;
  onPriorityChange: (value: string) => void;
  selectedStatus?: string;
  onStatusChange?: (value: string) => void;
  selectedResponsible?: string;
  onResponsibleChange?: (value: string) => void;
}

const FiltersTickets = ({
  searchTerm,
  onSearchTermChange,
  selectedPriority,
  selectedStatus,
  onPriorityChange,
  onStatusChange,
  selectedResponsible,
  onResponsibleChange,
}: FiltersTicketsProps) => {
  const t = useTranslations();
  const priorities = useTicketManagementStore(
    (state) => state.data?.priorities,
  );
  const status = useTicketManagementStore((state) => state.data?.status);
  const tickets = useTicketManagementStore((state) => state.data?.tickets);

  const uniqueResponsibles = useMemo(() => {
    if (!tickets) return [];
    return [...new Set(tickets.map((ticket) => ticket.responsible))];
  }, [tickets]);

  const priorityOptions = useMemo(
    () =>
      priorities?.map((priority: string) => {
        const convertPriority = mapPriorityToTagVariant(priority);
        return {
          value: convertPriority,
          label: t(`Filters.priority.${convertPriority}`),
        };
      }),
    [priorities, t],
  );

  const statusOptions = useMemo(
    () =>
      status?.map((statusItem: string) => {
        const convertStatus = mapStatusToTagVariant(statusItem);
        return {
          value: convertStatus,
          label: t(`Filters.status.${convertStatus}`),
        };
      }),
    [status, t],
  );

  const responsibleOptions = useMemo(
    () =>
      uniqueResponsibles.map((responsible: string) => {
        return {
          value: responsible,
          label: responsible,
        };
      }),
    [uniqueResponsibles],
  );

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t("Filters.searchPlaceholder")}
            type="search"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            className="pl-10 max-h-9 border-none bg-app-bg-dark"
          />
        </div>
        <Combobox
          options={statusOptions ?? []}
          value={selectedStatus}
          onValueChange={onStatusChange}
          placeholder={t("Filters.status.selectStatus")}
          searchPlaceholder={t("Filters.status.searchStatus")}
          emptyMessage={t("Filters.status.noStatus")}
          className="w-full sm:w-[200px] border-none bg-app-bg-dark max-h-9"
        />
        <Combobox
          options={priorityOptions ?? []}
          value={selectedPriority}
          onValueChange={onPriorityChange}
          placeholder={t("Filters.priority.selectPriority")}
          searchPlaceholder={t("Filters.priority.searchPriority")}
          emptyMessage={t("TicketsManagementPage.listTickets.noPriority")}
          className="w-full sm:w-50 border-none bg-app-bg-dark max-h-9"
        />
        <Combobox
          options={responsibleOptions ?? []}
          value={selectedResponsible}
          onValueChange={onResponsibleChange}
          placeholder={t("Filters.responsible.selectResponsible")}
          searchPlaceholder={t("Filters.responsible.searchResponsible")}
          emptyMessage={t("TicketsManagementPage.listTickets.noResponsible")}
          className="w-full sm:w-[200px] border-none bg-app-bg-dark max-h-9"
        />
      </div>
    </div>
  );
};

export default FiltersTickets;
