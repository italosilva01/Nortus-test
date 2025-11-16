import { PanelPerformance } from "@/components/ui/custom/PanelPerformance"
import { formatCurrency } from "@/shared/lib/utils"
import { formatVariation } from "@/shared/lib/utils"
import { useDashboardStore } from "@/stores/useDashboardStore"
import { useTranslations } from "next-intl"

export const ResumePerformance = () => {
    const { data } = useDashboardStore()
    const t = useTranslations()
    if (!data) {
        return null
    }
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 xl:gap-6 w-full lg:w-auto">
            <PanelPerformance
                title={t("DashboardPage.kpis.arpu")}
                value={formatCurrency(data.kpisResume.arpu.valor)}
                diffLastMonth={formatVariation(data.kpisResume.arpu.variacao, t)}
                positive={data.kpisResume.arpu.valor > 0}
            />
            <PanelPerformance
                title={t("DashboardPage.kpis.conversion")}
                value={`${data.kpisResume.conversion.valor}%`}
                diffLastMonth={formatVariation(data.kpisResume.conversion.variacao, t)}
                positive={data.kpisResume.conversion.valor > 0}
            />
            <PanelPerformance
                title={t("DashboardPage.kpis.retention")}
                value={`${data.kpisResume.retention.valor}%`}
                diffLastMonth={formatVariation(data.kpisResume.retention.variacao, t)}
                positive={data.kpisResume.retention.valor > 0}
            />
            <PanelPerformance
                title={t("DashboardPage.kpis.churn")}
                value={`${data.kpisResume.churn.valor}%`}
                diffLastMonth={formatVariation(data.kpisResume.churn.variacao, t)}
                positive={data.kpisResume.churn.valor < 0}
            />
        </div>
    )
}