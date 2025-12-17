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
    iconClassName?: string
}
export const PanelPerformance = ({ title, value, diffLastMonth, positive = true, iconChildren, iconClassName = "" }: PanelPerformanceProps) => {
    return (
        <Panel className="relative size-full xl:w-56.75 xl:h-44 border border-button-solid/10">
            <CardHeader className="" >
                <CardTitle className="flex justify-start items-start gap-2">
                    <Typography fontFamily="montserrat" fontWeight="normal" className="text-[14px] truncate" fontColor="surface-solid">
                        {title}
                    </Typography>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col mt-[24px] gap-[26px] justify-start">
                <Typography fontFamily="montserrat" fontWeight="bold" className="text-base xl:text-[24px] !line-height-[32px] leading-trim:none truncate" fontColor="surface-solid">
                    {value}
                </Typography>
                <Typography fontFamily="montserrat" fontWeight="normal" className={cn("text-sm line-height-[16px] letter-spacing-0%", positive ? "text-app-green-600 !text-shadow-[hsba(121, 100%, 86%, 0.5)]" : "text-red-600")} element="p" fontColor="surface-solid">
                    {diffLastMonth}
                </Typography>
            </CardContent>

            {iconChildren && (
                <CardFooter className={cn("absolute bottom-0 right-0 px-0 pr-1", iconClassName)}>
                    {iconChildren}
                </CardFooter>
            )}
        </Panel >
    );
};
