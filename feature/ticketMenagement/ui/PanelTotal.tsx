"use client";

import { CardContent, CardTitle } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { Panel } from "@/components/ui/custom/Panel";
import { Typography } from "@/components/ui/custom/Typography";

interface PanelTotalProps {
    title: string;
    value: string;
    icon: React.ReactNode;
}
const PanelTotal = ({ title, value, icon }: PanelTotalProps) => {
    return (
        <Panel className="flex flex-col gap-4 w-full sm:w-70 lg:w-75 xl:w-81">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Typography fontFamily="montserrat" fontWeight="normal" className="text-sm truncate" fontColor="title">
                        {title}
                    </Typography>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between w-full gap-2">
                <Typography
                    fontFamily="montserrat"
                    fontWeight="semibold"
                    className="text-base sm:text-lg lg:text-xl"
                    fontColor="title"
                    element="p"
                >
                    {value}
                </Typography>
                <span className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center shrink-0">
                    {icon}
                </span>
            </CardContent>
        </Panel>
    );
};



export default PanelTotal;
