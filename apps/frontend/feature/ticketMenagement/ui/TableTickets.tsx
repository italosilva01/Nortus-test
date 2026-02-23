import { useTranslations } from "next-intl";

import { Ticket } from "@/feature/ticketMenagement/types/ticketManagement";
import TableTicketsRow from "@/feature/ticketMenagement/ui/TableTicketsRow";

interface TableTicketsProps {
  tickets: Ticket[];
}

const TableTickets = ({ tickets }: TableTicketsProps) => {
  const t = useTranslations("TicketsManagementPage");

  if (!tickets || tickets.length === 0) {
    return (
      <div className="w-full text-center py-8 h-96 flex items-center justify-center text-white">
        {t("listTickets.noTickets")}
      </div>
    );
  }

  return (
    <div className="rounded-2xl shadow bg-app-dark-blue-300 text-white h-96 mb-4 overflow-hidden">
      <div className="table-scroll overflow-y-auto h-full">
        <table className="table-auto min-w-full border-separate border-spacing-y-2 text-left">
          <thead className="sticky top-0 z-10 bg-app-dark-blue-300">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">
                {t("listTickets.priority") || "Prioridade"}
              </th>
              <th className="px-4 py-2">
                {t("listTickets.client") || "Cliente"}
              </th>
              <th className="px-4 py-2">
                {t("listTickets.subject") || "Assunto"}
              </th>
              <th className="px-4 py-2">
                {t("listTickets.status") || "Status"}
              </th>
              <th className="px-4 py-2">
                {t("listTickets.createdAt") || "Criado em"}
              </th>
              <th className="px-4 py-2">
                {t("listTickets.responsible") || "Responsável"}
              </th>
              <th className="px-4 py-2">
                {t("listTickets.actions") || "Ações"}
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <TableTicketsRow key={ticket.id} ticket={ticket} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTickets;
