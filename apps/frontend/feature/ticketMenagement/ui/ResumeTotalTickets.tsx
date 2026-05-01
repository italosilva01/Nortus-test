import Image from "next/image";

import { useTicketManagementStore } from "@/feature/ticketMenagement/stories/useTicketManagementStore";
import { TicketResume } from "@/feature/ticketMenagement/types/ticketManagement";
import { PANELS_MAP } from "@/shared/lib/helpers";

import { useTranslations } from "next-intl";
import PanelTotal from "./PanelTotal";

export default function ResumeTotalTickets() {
  const resumo = useTicketManagementStore((state) => state.data?.resumo);
  const t = useTranslations();
  return (
    <div className="flex gap-6 w-full">
      {PANELS_MAP.map((panel, index) => {
        const title = t(
          `TicketsManagementPage.resumeTotalTickets.${panel.key}`,
        ) as string;
        const value =
          index === PANELS_MAP.length - 1
            ? `${resumo?.timeAverageHours?.toString()}h`
            : (resumo?.[panel.key as keyof TicketResume]?.toString() ?? "0");
        return (
          <PanelTotal
            key={panel.key}
            title={title}
            value={value}
            icon={<Image src={panel.icon} alt={title} width={24} height={24} />}
          />
        );
      })}
    </div>
  );
}
