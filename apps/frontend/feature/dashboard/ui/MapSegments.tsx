"use client";

import { Button } from "@/components/ui/button";
import { PanelBig } from "@/components/ui/custom/PanelBig";
import { useDashboardStore } from "@/feature/dashboard/stores/useDashboardStore";
import { MAP_SEGMENTS_COLORS } from "@/shared/lib/helpers";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type LegendItemProps = {
  color: string;
  label: string;
};

const LegendItem = ({ color, label }: LegendItemProps) => {
  return (
    <div className="flex items-center gap-2 py-1 px-2 bg-app-bg-dark rounded-full">
      <div
        className="w-3 h-3 rounded-sm shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="text-xs text-gray-300 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
        {label}
      </span>
    </div>
  );
};

const MapSegments = () => {
  const t = useTranslations();
  const { data } = useDashboardStore();
  const segments = data?.segments;

  const { labels, values } = segments?.reduce(
    (
      acc: { labels: string[]; values: number[] },
      segment: { nome: string; valor: number },
    ) => {
      acc.labels.push(segment.nome);
      acc.values.push(segment.valor);
      return acc;
    },
    { labels: [] as string[], values: [] as number[] },
  ) || { labels: [], values: [] };

  const chartData = useMemo(() => {
    return {
      series: values,
      options: {
        chart: {
          type: "donut" as const,
        },
        labels: labels,
        colors: Object.values(MAP_SEGMENTS_COLORS),
        stroke: {
          show: false,
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
          style: {
            fontSize: "12px",
            fontWeight: "bold",
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: "65%",
              labels: {
                show: true,
                value: {
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#ffffff",
                },
              },
            },
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom" as const,
              },
            },
          },
        ],
      },
    };
  }, [labels, values]);

  const colors = Object.values(MAP_SEGMENTS_COLORS);

  return (
    <PanelBig
      title={t("DashboardPage.mapOfImpactBySegment")}
      classNameTitle="!text-[16px] mx-auto font-bold -6 tracking-0 font-bold"
      className="max-w h-max xl:w-[345px]"
      contentClassName="py-6"
    >
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-full flex items-center justify-center">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            height={180}
          />
        </div>
        <div className="w-full flex flex-wrap justify-center gap-1 mt-4 mb-6">
          {labels.map((label, index) => (
            <LegendItem key={label} color={colors[index]} label={label} />
          ))}
        </div>
      </div>
      <Button className="sidebar-link-active rounded-2xl">
        {t("DashboardPage.analyzeSegments")}
      </Button>
    </PanelBig>
  );
};

export default MapSegments;
