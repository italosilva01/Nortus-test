import { useState } from "react"
import { CardContent, CardHeader, CardTitle } from "../card"
import { Panel } from "./Panel"
import { Typography } from "./Typography"
import { cn } from "@/shared/lib/utils"
import ReactApexChart from "react-apexcharts"
import { Button } from "../button"
import { useDashboardStore } from "@/stores/useDashboardStore"

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

export const PanelBig = ({ classNameTitle }: PanelBigProps) => {
    const { data: { kpisTrend } } = useDashboardStore();
    console.log("kpisTrend: ", kpisTrend);
    const [state] = useState<ChartState>({

        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },


    });
    return (
        <Panel className="py-0 w-full h-full flex flex-col max-w-[680px] xl:max-w-[780px] 2xl:max-w-[852px]">
            <CardHeader className="flex pt-6 px-4 lg:px-6">
                <CardTitle className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between w-full">
                    <Typography fontFamily="montserrat" fontWeight="normal" className={cn("text-xl lg:text-2xl font-bold truncate", classNameTitle)} fontColor="title">
                        Evolução dos KPI&apos;s
                    </Typography>
                    <div className="p-3 lg:p-4 xl:p-5 flex bg-app-dark-blue-100 rounded-full gap-1.5 lg:gap-2 flex-wrap lg:flex-nowrap">
                        <Button className="bg-app-dark-blue-200 rounded-full py-2 px-3 lg:py-2.5 lg:px-4 xl:py-3 xl:px-5 text-xs lg:text-sm whitespace-nowrap">Retenção</Button>
                        <Button className="bg-app-dark-blue-200 rounded-full py-2 px-3 lg:py-2.5 lg:px-4 xl:py-3 xl:px-5 text-xs lg:text-sm whitespace-nowrap">Conversão</Button>
                        <Button className="bg-app-dark-blue-200 rounded-full py-2 px-3 lg:py-2.5 lg:px-4 xl:py-3 xl:px-5 text-xs lg:text-sm whitespace-nowrap">Churn</Button>
                        <Button className="bg-app-dark-blue-200 rounded-full py-2 px-3 lg:py-2.5 lg:px-4 xl:py-3 xl:px-5 text-xs lg:text-sm whitespace-nowrap">ARPU</Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col px-4 lg:px-6 flex-1 w-full h-full">
                <div id="chart" className="w-full h-full flex-1 flex items-center min-h-[200px] lg:min-h-62.5 xl:min-h-75">
                    <div className="w-full h-full flex-1">
                        <ReactApexChart
                            options={state.options}
                            series={state.series}
                            type="area"
                            height="100%"
                            width="100%"
                        />
                    </div>
                </div>
            </CardContent>
        </Panel>
    )
}
