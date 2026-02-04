'use client';
import { Skeleton } from '@/components/ui/skeleton';
import CustomerMapRegion from '@/feature/dashboard/ui/CustomerMapRegion';
import GraphEvolution from '@/feature/dashboard/ui/GraphEvolution';
import MapSegments from '@/feature/dashboard/ui/MapSegments';
import { ResumePerformance } from '@/feature/dashboard/ui/ResumePerformance';
import { SkeletonResumePanelPerformance } from '@/feature/dashboard/ui/SkeletonResumePanelPerformance';
import { useTranslations } from 'next-intl';
import { useDashboardData } from '../stores/useDashboardStore';

export default function Home() {
  const { data, isPending } = useDashboardData();
  const t = useTranslations();

  
  if (isPending ) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
          <Skeleton className="w-full xl:w-[852px] h-[400px] rounded-lg" />
          <SkeletonResumePanelPerformance />
        </div>
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
          <Skeleton className="w-full xl:w-[852px] h-[350px] rounded-lg" />
          <Skeleton className="w-full xl:w-[345px] h-[350px] rounded-lg" />
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">{t('DashboardPage.noDataAvailable')}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex xl:flex-row flex-col  size-full gap-4 xl:gap-6">
        <GraphEvolution />
        <ResumePerformance />
      </div>
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
        <CustomerMapRegion />
        <MapSegments />
      </div>
    </div>
  );
}
