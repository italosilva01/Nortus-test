import { useState } from "react"
import { CardContent, CardHeader, CardTitle } from "../card"
import { Panel } from "./Panel"
import { Typography } from "./Typography"
import { cn } from "@/shared/lib/utils"
import ReactApexChart from "react-apexcharts"

interface PanelBigProps {
    title: string
    classNameTitle?: string
}
export const PanelBig = ({ title, classNameTitle }: PanelBigProps) => {
    const [state, setState] = useState<any>({

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
        <Panel className="w-max border border-red-500 py-0  h-auto flex flex-col 2xl:gap-20">
            <CardHeader className="flex px-6 pt-6">
                <CardTitle className="flex items-center gap-2">
                    <Typography fontFamily="montserrat" fontWeight="normal" className={cn("text-[24px] font-bold truncate", classNameTitle)} fontColor="title">
                        Evolução dos KPI's
                    </Typography>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col px-6 w-min">
                <div id="chart" className="w-[31.25rem] 2xl:w-201 2xl:max-w-201">
                    <div className="w-full">
                        <ReactApexChart
                            options={state.options as any}
                            series={state.series as any}
                            type="area"
                            height={208}
                            width="100%"
                        />
                    </div>
                </div>
            </CardContent>
        </Panel>
    )
}
