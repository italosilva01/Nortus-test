import { SkeletonPanelPerformance } from "./SkeletonPanelPerformance"

export const SkeletonResumePanelPerformance = () => {
    return (
        <div className="w-max grid grid-cols-2 grid-rows-2 gap-6">
            <SkeletonPanelPerformance />
            <SkeletonPanelPerformance />
            <SkeletonPanelPerformance />
            <SkeletonPanelPerformance />
        </div>
    )
}