import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Combobox } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import { mapPriorityToTagVariant, mapStatusToTagVariant } from '@/shared/lib/utils';
import { useTicketManagementStore } from '@/stores/useTicketManagementStore';

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
  onStatusChange
}: FiltersTicketsProps) => {
  const t = useTranslations();
  const { data } = useTicketManagementStore();
  const priorityOptions = data?.priorities.map((priority) =>{
    const convertPriority = mapPriorityToTagVariant(priority);
    return {
      value: convertPriority,
      label : t(`Filters.priority.${convertPriority}`),
    }
  });

  const statusOptions = data?.status.map((status) =>{
    const convertStatus = mapStatusToTagVariant(status);
    return {
      value: convertStatus,
      label : t(`Filters.status.${convertStatus}`),
    }
  });

  const responsibleOptions = data?..map((responsible) =>{
    return {
      value: responsible,
      label : responsible,
    }
  });

  console.log("statusOptions", statusOptions);

 return(
  <div className="flex flex-col gap-4 w-full">
  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
    <div className="relative flex-1 w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder={t('listTickets.searchPlaceholder')}
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
      placeholder={t('Filters.status.selectStatus')}
      searchPlaceholder={t('Filters.status.searchStatus')}
      emptyMessage={t('Filters.status.noStatus')}
      className="w-full sm:w-[200px] border-none bg-app-bg-dark max-h-9"
    /> 
   <Combobox
      options={priorityOptions ?? []}
      value={selectedPriority}
      onValueChange={onPriorityChange}
      placeholder={t('Filters.priority.selectPriority')}
      searchPlaceholder={t('Filters.priority.searchPriority')}
      emptyMessage={t('TicketsManagementPage.listTickets.noPriority')}
      className="w-full sm:w-50 border-none bg-app-bg-dark max-h-9"
    /> 
     <Combobox
      options={responsibleOptions}
      value={selectedResponsible}
      onValueChange={onResponsibleChange}
      placeholder={t('listTickets.selectResponsible') || 'Responsável'}
      searchPlaceholder={t('listTickets.searchResponsible') || 'Buscar...'}
      emptyMessage={t('listTickets.noResponsible') || 'Nenhum responsável encontrado'}
      className="w-full sm:w-[200px] border-none bg-app-bg-dark max-h-9"
    /> 
    
  </div>
 
</div>
 )
};

export default FiltersTickets;
