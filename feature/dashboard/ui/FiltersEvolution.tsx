import { Button } from "../../../components/ui/button"
import { cn } from "@/shared/lib/utils"
import { KPI_BUTTONS } from "@/shared/lib/helpers"

interface FiltersEvolutionProps {
    selectedKpi: string
    onKpiClick: (kpiValue: string) => void
}

export const FiltersEvolution = ({ selectedKpi, onKpiClick }: FiltersEvolutionProps) => {
    return (
        <div className="p-3 lg:p-4 xl:p-5 flex bg-app-dark-blue-100 rounded-full gap-1.5 lg:gap-2 flex-wrap lg:flex-nowrap">
            {KPI_BUTTONS.map((kpi) => (
                <Button
                    key={kpi.id}
                    onClick={() => onKpiClick(kpi.value)}
                    className={cn(
                        "rounded-full py-2 px-3 lg:py-2.5 lg:px-4 xl:py-3 xl:px-5 text-xs lg:text-sm whitespace-nowrap transition-colors",
                        selectedKpi === kpi.value
                            ? "bg-app-dark-blue-300 ring-2 ring-app-dark-blue-400"
                            : "bg-app-dark-blue-200 hover:bg-app-dark-blue-250"
                    )}
                >
                    {kpi.label}
                </Button>
            ))}
        </div>
    )
}

