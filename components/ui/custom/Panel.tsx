import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/shared/lib/utils";

interface PanelProps extends React.ComponentProps<typeof Card> {
    children: React.ReactNode;
    contentClassName?: string;
}

export const Panel = ({
    children,
    className,
    contentClassName,
    ...props
}: PanelProps) => {
    return (
        <Card className={cn("rounded-2xl border border-app-dark-blue-100 bg-[#FFFFFF0D]/85 h-min gap-0", className)} {...props}>
            {children}
        </Card>
    );
};