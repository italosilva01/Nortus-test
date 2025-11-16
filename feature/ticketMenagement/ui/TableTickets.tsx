
import TableTicketsRow from '@/feature/ticketMenagement/ui/TableTicketsRow';
import { useTranslations } from 'next-intl';

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

interface TableTicketsProps {
  tickets: Ticket[];
}

const TableTickets = ({ tickets }: TableTicketsProps) => {
  const t = useTranslations('TicketsManagementPage');

  if (!tickets || tickets.length === 0) {
    return (
      <div className="w-full text-center text-muted-foreground py-8">
        {t('listTickets.noTickets')}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl shadow bg-app-dark-blue-300 text-white min-h-75">
      <table className="table-auto min-w-full border-separate border-spacing-y-2 text-left">
        <thead>
          <tr className="">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">{t('listTickets.priority') || 'Prioridade'}</th>
            <th className="px-4 py-2">{t('listTickets.client') || 'Cliente'}</th>
            <th className="px-4 py-2">{t('listTickets.subject') || 'Assunto'}</th>
            <th className="px-4 py-2">{t('listTickets.status') || 'Status'}</th>
            <th className="px-4 py-2">{t('listTickets.createdAt') || 'Criado em'}</th>
            <th className="px-4 py-2">{t('listTickets.responsible') || 'Responsável'}</th>
            <th className="px-4 py-2">{t('listTickets.actions') || 'Ações'}</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <TableTicketsRow key={ticket.id} ticket={ticket} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTickets;
