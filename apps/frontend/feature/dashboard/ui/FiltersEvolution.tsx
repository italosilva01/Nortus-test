import { KPI_BUTTONS } from '@/shared/lib/helpers';
import { cn } from '@/shared/lib/utils';
import { Button } from '../../../components/ui/button';

interface FiltersEvolutionProps {
  selectedKpi: string;
  onKpiClick: (kpiValue: string) => void;
}

export const FiltersEvolution = ({
  selectedKpi,
  onKpiClick,
}: FiltersEvolutionProps) => {
  return (
    <div className="py-2 px-3 flex bg-app-dark-blue-100 rounded-full gap-3 flex-wrap lg:flex-nowrap">
      {KPI_BUTTONS.map((kpi) => (
        <Button
          key={kpi.id}
          onClick={() => onKpiClick(kpi.value)}
          className={cn(
            'rounded-full px-3 py-5: text-xs font-montserrat font-semibold line-height-16 whitespace-nowrap letter-spacing-0 transition-colors ',
            selectedKpi === kpi.value
              ? 'bg-[rgb(56,181,204)] ring-2 ring-cyan'
              : 'bg-app-dark-blue-200 hover:bg-app-dark-blue-250 transition-colors'
          )}
        >
          {kpi.label}
        </Button>
      ))}
    </div>
  );
};
