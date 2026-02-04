'use client';

import { PanelBig } from '@/components/ui/custom/PanelBig';
import { Typography } from '@/components/ui/custom/Typography';
import { FiltersEvolution } from '@/feature/dashboard/ui/FiltersEvolution';
import {
  formatNumberWithK,
  getTrendData,
  getTrendName,
} from '@/shared/lib/utils';
import { KpisTrend } from '@/shared/types/dashboard';
import { useDashboardData } from '@/stores/useDashboardStore';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
interface ChartSeries {
  name: string;
  data: number[];
}

interface ChartState {
  series: ChartSeries[];
  options: ApexCharts.ApexOptions;
}

const GraphEvolution = () => {
  const [selectedKpi, setSelectedKpi] = useState<string>('arpu');
  const {data} = useDashboardData();
  const kpisTrend = data?.kpisTrend;
  
  const t = useTranslations();
  const handleKpiClick = (kpiValue: string) => {
    setSelectedKpi(kpiValue);
  };

  const chartState = useMemo<ChartState>(() => {
    return {
      series: [
        {
          name: getTrendName(selectedKpi),
          data: getTrendData(kpisTrend || ({} as KpisTrend), selectedKpi),
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.3,
          },
        },
        xaxis: {
          categories: kpisTrend?.labels || [],
          labels: {
            show: true,
            style: {
              fontSize: '12px',
              colors: '#ffffff',
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            formatter: (val: number) => formatNumberWithK(val),
            style: {
              colors: '#ffffff',
            },
          },
        },
        tooltip: {
          x: {
            format: 'MMM',
          },
        },
      },
    };
  }, [kpisTrend, selectedKpi]);

  return (
    <PanelBig
      title={t('DashboardPage.evolutionOfKpis')}
      filtersChildren={
        <FiltersEvolution
          selectedKpi={selectedKpi}
          onKpiClick={handleKpiClick}
        />
      }
      className="max-h-[376px]"
    >
      <div
        id="chart"
        className="w-full h-full flex-1 flex items-center min-h-[200px] lg:min-h-62.5 xl:min-h-75"
      >
        {!kpisTrend ? (
          <div className="w-full h-full flex items-center justify-center">
            <Typography
              fontFamily="montserrat"
              fontWeight="normal"
              className="text-sm text-gray-400"
            >
              Carregando dados...
            </Typography>
          </div>
        ) : (
          <div className="w-full  h-full border border-red-500 relative">
            <ReactApexChart
              options={chartState.options}
              series={chartState.series}
              type="area"
              height="100%"
              width="100%"
            />
          </div>
        )}
      </div>
    </PanelBig>
  );
};

export default GraphEvolution;
