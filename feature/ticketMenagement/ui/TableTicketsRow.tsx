import { Tag, TagVariants } from "@/components/ui/custom/Tag";
import React from "react";

interface Ticket {
  id: string;
  subject: string;
  client: string;
  email: string;
  status: string;
  priority: string;
  responsible: string;
  createdAt: string;
}

interface TableTicketsRowProps {
  ticket: Ticket;
  onActionClick?: (ticket: Ticket) => void;
}

const TableTicketsRow: React.FC<TableTicketsRowProps> = ({
  ticket,
  onActionClick,
}) => {
  return (
    <tr key={ticket.id} className="bg-app-bg border-b last:border-b-0">
              <td className="px-4 py-2">{ticket.id}</td>
              <td className="px-4 py-2"><Tag variant={ticket.priority as TagVariants} /></td>
              <td className="px-4 py-2">{ticket.client}</td>
              <td className="px-4 py-2">{ticket.subject}</td>
              <td className="px-4 py-2"><Tag variant={ticket.status as TagVariants} /></td>
              <td className="px-4 py-2">{ticket.createdAt}</td>
              <td className="px-4 py-2">{ticket.responsible}</td>
              <td className="px-4 py-2">
                <button className="text-blue-400 hover:text-blue-300">
                  Ver detalhes
                </button>
              </td>
            </tr>
  );
};

export default TableTicketsRow;
