import { PanelPerformance } from "@/components/ui/custom/PanelPerformance";
import { useDashboardData } from "@/feature/dashboard/queries/useDataboardData";
import arrowDownIcon from "@/public/perfomance/arrowdown1.svg";
import arrowUpIcon from "@/public/perfomance/arrowup2.svg";
import { formatCurrency, formatVariation } from "@/shared/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const ResumePerformance = () => {
  const { data: kpisResume } = useDashboardData((data) => data.kpisResume);
  const t = useTranslations();

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full xl:w-max h-min">
      <PanelPerformance
        title={t("DashboardPage.kpis.arpu")}
        value={formatCurrency(kpisResume?.arpu?.valor ?? 0)}
        diffLastMonth={formatVariation(kpisResume?.arpu?.variacao ?? 0, t)}
        positive={(kpisResume?.arpu?.valor ?? 0) > 0}
        iconChildren={
          <Image src={arrowUpIcon} alt="arrow up icon" width={87} height={68} />
        }
      />
      <PanelPerformance
        title={t("DashboardPage.kpis.conversion")}
        value={`${kpisResume?.conversion?.valor ?? 0}%`}
        diffLastMonth={formatVariation(
          kpisResume?.conversion?.variacao ?? 0,
          t,
        )}
        positive={(kpisResume?.conversion?.valor ?? 0) > 0}
      />
      <PanelPerformance
        title={t("DashboardPage.kpis.retention")}
        value={`${kpisResume?.retention?.valor ?? 0}%`}
        diffLastMonth={formatVariation(kpisResume?.retention?.variacao ?? 0, t)}
        positive={(kpisResume?.retention?.valor ?? 0) > 0}
      />
      <PanelPerformance
        title={t("DashboardPage.kpis.churn")}
        value={`${kpisResume?.churn?.valor ?? 0}%`}
        diffLastMonth={formatVariation(kpisResume?.churn?.variacao ?? 0, t)}
        positive={(kpisResume?.churn?.valor ?? 0) < 0}
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
