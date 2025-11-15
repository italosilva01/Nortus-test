import { useState, useMemo } from "react"
import { CardContent, CardHeader, CardTitle } from "../card"
import { Panel } from "./Panel"
import { Typography } from "./Typography"
import { cn, getTrendData, getTrendName } from "@/shared/lib/utils"
import ReactApexChart from "react-apexcharts"
import { useDashboardStore } from "@/stores/useDashboardStore"
import { KpisTrend } from "@/shared/types/dashboard"
import { FiltersEvolution } from "./FiltersEvolution"

interface PanelBigProps {
    title?: string
    classNameTitle?: string
}

interface ChartSeries {
    name: string
    data: number[]
}

interface ChartState {
    series: ChartSeries[]
    options: ApexCharts.ApexOptions
}

export const PanelBig = ({ classNameTitle, title }: PanelBigProps) => {
    const [selectedKpi, setSelectedKpi] = useState<string>('arpu')
    const { data } = useDashboardStore();
    const kpisTrend = data?.kpisTrend;

    const handleKpiClick = (kpiValue: string) => {
        setSelectedKpi(kpiValue);
    };

    const chartState = useMemo<ChartState>(() => {
        return {
            series: [{
                name: getTrendName(selectedKpi),
                data: getTrendData(kpisTrend || {} as KpisTrend, selectedKpi)
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 2
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.3,
                    }
                },
                xaxis: {
                    categories: kpisTrend?.labels || [],
                    labels: {
                        show: true,
                        style: {
                            fontSize: '12px',
                        }
                    }
                },
                yaxis: {
                    labels: {
                        show: true,
                        formatter: (val: number) => val.toFixed(0)
                    }
                },
                tooltip: {
                    x: {
                        format: 'MMM'
                    },
                },
            },
        };
    }, [kpisTrend, selectedKpi]);

    return (
        <Panel className="py-0 w-full h-full flex flex-col max-w-[680px] xl:max-w-[780px] 2xl:max-w-[852px]">
            <CardHeader className="flex pt-6 px-4 lg:px-6">
                <CardTitle className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between w-full">
                    <Typography fontFamily="montserrat" fontWeight="normal" className={cn("text-xl lg:text-2xl font-bold truncate", classNameTitle)} fontColor="title">
                        {title}
                        Evolução dos KPI&apos;s
                    </Typography>
                    <FiltersEvolution
                        selectedKpi={selectedKpi}
                        onKpiClick={handleKpiClick}
                    />
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col px-4 lg:px-6 flex-1 w-full h-full">
                <div id="chart" className="w-full h-full flex-1 flex items-center min-h-[200px] lg:min-h-62.5 xl:min-h-75">
                    {!kpisTrend ? (
                        <div className="w-full h-full flex items-center justify-center">
                            <Typography fontFamily="montserrat" fontWeight="normal" className="text-sm text-gray-400">
                                Carregando dados...
                            </Typography>
                        </div>
                    ) : (
                        <div className="w-full h-full flex-1">
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
            </CardContent>
        </Panel>
    )
}
