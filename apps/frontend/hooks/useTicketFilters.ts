import { useMemo, useState } from 'react';

import { Ticket } from '@/shared/types/ticketManagement';

interface UseTicketFiltersProps {
  tickets?: Ticket[];
}

export const useTicketFilters = ({ tickets }: UseTicketFiltersProps) => {
  // fazer refactore para usar o useReducer
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedResponsible, setSelectedResponsible] = useState('');

  const filteredTickets = useMemo(() => {
    if (!tickets) return [];

    return tickets.filter((ticket) => {
      const matchesSearch =
        ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPriority = !selectedPriority || ticket.priority === selectedPriority;
      const matchesStatus = !selectedStatus || ticket.status === selectedStatus;
      const matchesResponsible = !selectedResponsible || ticket.responsible === selectedResponsible;

      return matchesSearch && matchesPriority && matchesStatus && matchesResponsible;
    });
  }, [tickets, searchTerm, selectedPriority, selectedStatus, selectedResponsible]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedPriority('');
    setSelectedStatus('');
    setSelectedResponsible('');
  };

  const hasActiveFilters = Boolean(
    searchTerm || selectedPriority || selectedStatus || selectedResponsible
  );

  return {
    searchTerm,
    selectedPriority,
    selectedStatus,
    selectedResponsible,
    setSearchTerm,
    setSelectedPriority,
    setSelectedStatus,
    setSelectedResponsible,
    filteredTickets,
    hasActiveFilters,
    totalResults: filteredTickets.length,
    resetFilters,
  };
};

