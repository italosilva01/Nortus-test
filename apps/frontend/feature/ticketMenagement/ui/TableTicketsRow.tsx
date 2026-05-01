import React from "react";
import { ActionsButton } from "../../../components/ui/custom/ActionsButton";
import { Tag, TagVariants } from "../../../components/ui/custom/Tag";

interface Ticket {
  id: string;
  subject: string;
  client: string;
  email: string;
  status: TagVariants;
  priority: TagVariants;
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
  console.log("ticket item", ticket);
  return (
    <tr key={ticket.id} className="bg-app-bg border-b last:border-b-0">
      <td className="px-4 py-2">{ticket.id.slice(0, 8)}</td>
      <td className="px-4 py-2">
        <Tag variant={ticket.priority} />
      </td>
      <td className="px-4 py-2">{ticket.client}</td>
      <td className="px-4 py-2">{ticket.subject}</td>
      <td className="px-4 py-2">
        <Tag variant={ticket.status} />
      </td>
      <td className="px-4 py-2">{ticket.createdAt}</td>
      <td className="px-4 py-2">{ticket.responsible}</td>
      <td className="px-4 py-2">
        <ActionsButton
          onView={() => onActionClick?.(ticket)}
          onEdit={() => onActionClick?.(ticket)}
        />
      </td>
    </tr>
  );
};

export default TableTicketsRow;
