import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/shared/lib/utils"
import { Panel } from "./Panel"
import { Typography } from "./Typography"

interface PanelPerformanceProps {
    title: string
    value: string
    diffLastMonth: string
    positive: boolean
    iconChildren?: React.ReactNode
}
export const PanelPerformance = ({ title, value, diffLastMonth, positive = true, iconChildren }: PanelPerformanceProps) => {
    return (
        <Panel className="">
            <CardHeader className="px-6">
                <CardTitle className="flex items-center gap-2">
                    <Typography fontFamily="montserrat" fontWeight="normal" className="text-[14px] truncate" fontColor="surface-solid">
                        {title}
                    </Typography>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col px-6 gap-4 ">
                <Typography fontFamily="montserrat" fontWeight="semibold" className="text-[1.25rem]" fontColor="surface-solid">
                    {value}
                </Typography>
                <Typography fontFamily="montserrat" fontWeight="normal" className={cn("text-[14px] mt-1 text-sm", positive ? "text-green-600" : "text-red-600")} element="p" fontColor="surface-solid">
                    {diffLastMonth}
                </Typography>
            </CardContent>


            <CardFooter className="px-6">
                {iconChildren}
            </CardFooter>
        </Panel >
    );
};
