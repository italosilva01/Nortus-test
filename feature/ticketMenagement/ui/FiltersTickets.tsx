import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Combobox, ComboboxOption } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';

interface FiltersTicketsProps {
  priorityOptions: ComboboxOption[];
  statusOptions: ComboboxOption[];
  responsibleOptions: ComboboxOption[];
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  selectedPriority: string;
  onPriorityChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (value: string) => void;
  selectedResponsible: string;
  onResponsibleChange: (value: string) => void;
}
// TODO: refatorar esse componente para usar o useFormContext

const FiltersTickets = ({
  priorityOptions = [],
  statusOptions = [],
  responsibleOptions = [],
  searchTerm,
  onSearchTermChange,
  selectedPriority,
  onPriorityChange,
  selectedStatus,
  onStatusChange,
  selectedResponsible,
  onResponsibleChange,
}: FiltersTicketsProps) => {
  const t = useTranslations('TicketsManagementPage');

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
      options={statusOptions}
      value={selectedStatus}
      onValueChange={onStatusChange}
      placeholder={t('listTickets.selectStatus') || 'Status'}
      searchPlaceholder={t('listTickets.searchStatus') || 'Buscar...'}
      emptyMessage={t('listTickets.noStatus') || 'Nenhum status encontrado'}
      className="w-full sm:w-[200px] border-none bg-app-bg-dark max-h-9"
    />
    <Combobox
      options={priorityOptions}
      value={selectedPriority}
      onValueChange={onPriorityChange}
      placeholder={t('listTickets.selectPriority') || 'Prioridade'}
      searchPlaceholder={t('listTickets.searchPriority') || 'Buscar...'}
      emptyMessage={t('listTickets.noPriority') || 'Nenhuma prioridade encontrada'}
      className="w-full sm:w-[200px] border-none bg-app-bg-dark max-h-9"
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
