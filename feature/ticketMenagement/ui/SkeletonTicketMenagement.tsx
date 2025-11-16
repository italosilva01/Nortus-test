import { CardContent, CardHeader } from "@/components/ui/card";
import { Panel } from "@/components/ui/custom/Panel";
import { PanelBig } from "@/components/ui/custom/PanelBig";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonPanelTotal = () => {
  return (
    <Panel className="flex flex-col gap-4 w-full sm:w-70 lg:w-75 xl:w-81">
      <CardHeader>
        <Skeleton className="h-5 w-32" />
      </CardHeader>
      <CardContent className="flex justify-between w-full gap-2">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="w-8 h-8 lg:w-10 lg:h-10 rounded-full" />
      </CardContent>
    </Panel>
  );
};

const SkeletonResumeTotalTickets = () => {
  return (
    <div className="flex gap-6 w-full">
      {Array.from({ length: 4 }).map((_, idx: number) => (
        <SkeletonPanelTotal key={idx} />
      ))}
    </div>
  );
};

const SkeletonListTickets = () => {
  return (
    <PanelBig
      title="Lista de Tickets"
      className="size-full max-w-full xl:max-w-full 2xl:max-w-full"
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Skeleton className="h-10 flex-1 w-full" />
          <Skeleton className="h-10 w-full sm:w-[200px]" />
        </div>

        <div className="overflow-x-auto rounded-2xl shadow bg-app-dark-blue-300">
          <div className="p-4 space-y-3">
            <div className="flex gap-4">
            <Skeleton  className="h-4 flex-1 w-full" />
            </div>

            {Array.from({ length: 5 }).map((_, rowIdx: number) => (
              <div key={rowIdx} className="flex gap-4">
                {Array.from({ length: 5 }).map((_, colIdx: number) => (
                  <Skeleton key={colIdx} className="h-12 flex-1" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelBig>
  );
};

export const SkeletonTicketManagement = () => {
  return (
    <div className="flex flex-col w-full xl:gap-y-5 2xl:gap-y-10">
      <SkeletonResumeTotalTickets />
      <SkeletonListTickets />
    </div>
  );
};

