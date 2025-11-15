import { SkeletonPanelPerformance } from "./SkeletonPanelPerformance"

export const SkeletonResumePanelPerformance = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 xl:gap-6 w-full lg:w-auto">
            <SkeletonPanelPerformance />
            <SkeletonPanelPerformance />
            <SkeletonPanelPerformance />
            <SkeletonPanelPerformance />
        </div>
    )
}