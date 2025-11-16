'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { PanelBig } from '@/components/ui/custom/PanelBig';
import FiltersTickets from '@/feature/ticketMenagement/ui/FiltersTickets';
import { useTicketManagementStore } from '@/stores/useTicketManagementStore';
import TableTickets from './TableTickets';

const ListTickets = () => {
  const t = useTranslations('TicketsManagementPage');
  const { data } = useTicketManagementStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');

  const priorityOptions = [
    { value: '', label: t('listTickets.allPriorities') || 'Todas' },
    ...(data?.priorities.map((priority) => ({
      value: priority,
      label: priority,
    })) ?? []),
  ];

  // Filtrar tickets
  const filteredTickets =
    data?.tickets.filter((ticket) => {
      const matchesSearch =
        ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPriority = selectedPriority === '' || ticket.priority === selectedPriority;

      return matchesSearch && matchesPriority;
    }) ?? [];

  return (
    <PanelBig
      title={t('listTickets.title')}
      className="size-full max-w-full xl:max-w-full 2xl:max-w-full flex flex-col gap-4"
      contentClassName="flex flex-col gap-4"
    >
      <FiltersTickets
        priorityOptions={priorityOptions}
        statusOptions={priorityOptions}
        responsibleOptions={priorityOptions}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        selectedPriority={selectedPriority}
        onPriorityChange={setSelectedPriority} selectedStatus={''} onStatusChange={function (value: string): void {
          throw new Error('Function not implemented.');
        } } selectedResponsible={''} onResponsibleChange={function (value: string): void {
          throw new Error('Function not implemented.');
        } }      
      />
      {/* TODO: adicionar o filtro de status e responsável  e remover o slice*/}
      <TableTickets tickets={filteredTickets.slice(0, 5)} />
     </PanelBig>
  );
};

export default ListTickets;
