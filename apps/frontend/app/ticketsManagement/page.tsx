"use client";

import { useTicketManagementData } from "@/feature/ticketMenagement/queries/useTicketMenagementData";
import CreateTicketModal from "@/feature/ticketMenagement/ui/CreateTicketModal";
import ListTickets from "@/feature/ticketMenagement/ui/ListTickets";
import ResumeTotalTickets from "@/feature/ticketMenagement/ui/ResumeTotalTickets";
import { SkeletonTicketManagement } from "@/feature/ticketMenagement/ui/SkeletonTicketMenagement";

export default function TicketsManagementPage() {
  const { data, isPending } = useTicketManagementData();

  if (isPending) {
    return <SkeletonTicketManagement />;
  }
  if (!data) {
    return <div>Nenhum dado encontrado</div>;
  }
  return (
    <div className="flex flex-col w-full gap-y-5 2xl:gap-y-10">
      <CreateTicketModal />
      <ResumeTotalTickets />
      <ListTickets />
    </div>
  );
}
