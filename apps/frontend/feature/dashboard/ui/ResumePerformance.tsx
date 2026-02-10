import { PanelPerformance } from "@/components/ui/custom/PanelPerformance";
import { useDashboardData } from "@/feature/dashboard/queries/useDataboardData";
import arrowDownIcon from "@/public/perfomance/arrowdown1.svg";
import arrowUpIcon from "@/public/perfomance/arrowup2.svg";
import { formatCurrency, formatVariation } from "@/shared/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const ResumePerformance = () => {
  const { data } = useDashboardData();
  const t = useTranslations();
  if (!data) {
    return null;
  }
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full xl:w-max h-min">
      <PanelPerformance
        title={t("DashboardPage.kpis.arpu")}
        value={formatCurrency(data.kpisResume.arpu.valor)}
        diffLastMonth={formatVariation(data.kpisResume.arpu.variacao, t)}
        positive={data.kpisResume.arpu.valor > 0}
        iconChildren={
          <Image src={arrowUpIcon} alt="arrow up icon" width={87} height={68} />
        }
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
        iconChildren={
          <Image
            src={arrowDownIcon}
            alt="arrow down icon"
            width={105}
            height={83}
          />
        }
        iconClassName="-right-2"
      />
    </div>
  );
};
