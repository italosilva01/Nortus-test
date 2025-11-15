'use client';
import { PanelBig } from '@/components/ui/custom/PanelBig';
import { PanelPerformance } from '@/components/ui/custom/PanelPerformance';
import { SkeletonResumePanelPerformance } from '@/feature/dashboard/ui/SkeletonResumePanelPerformance';
import { formatCurrency, formatVariation } from '@/shared/lib/utils';
import { useDashboardStore } from '@/stores/useDashboardStore';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const { data, isLoading, fetchDashboardData } = useDashboardStore();
  const t = useTranslations();
  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  if (isLoading) {
    // TODO: Add Skeleton Loading
    return (
      <div className="flex flex-col xl:flex-row gap-6">
        <Skeleton className="w-[852px] h-[350px] rounded-lg" />
        <SkeletonResumePanelPerformance />
      </div>
    );

  }

  if (!data) {
    return (
      // TODO: Melhorar Empty State
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Nenhum dado disponível</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
        <PanelBig />
        <div className="grid grid-cols-2 grid-rows-2 gap-4 xl:gap-6 w-full lg:w-auto">
          <PanelPerformance
            title="ARPU"
            value={formatCurrency(data.kpisResume.arpu.valor)}
            diffLastMonth={formatVariation(data.kpisResume.arpu.variacao, t)}
            positive={data.kpisResume.arpu.valor > 0}
          />
          <PanelPerformance
            title="Taxa de Conversão"
            value={`${data.kpisResume.conversion.valor}%`}
            diffLastMonth={formatVariation(data.kpisResume.conversion.variacao, t)}
            positive={data.kpisResume.conversion.valor > 0}
          />
          <PanelPerformance
            title="Taxa de Retenção"
            value={`${data.kpisResume.retention.valor}%`}
            diffLastMonth={formatVariation(data.kpisResume.retention.variacao, t)}
            positive={data.kpisResume.retention.valor > 0}
          />
          <PanelPerformance
            title="Taxa de Churn"
            value={`${data.kpisResume.churn.valor}%`}
            diffLastMonth={formatVariation(data.kpisResume.churn.variacao, t)}
            positive={data.kpisResume.churn.valor < 0}
          />
        </div>
      </div>

    </div>
  );
}

