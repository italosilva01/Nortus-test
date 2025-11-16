import { Button } from "@/components/ui/button"
import { cn } from "@/shared/lib/utils"

const REGIONS = [
    { id: "all", label: "Todos" },
]
const TYPES = [
    { id: "all", label: "Todos" },

]

const FIST_OPTION = 0

export const FiltersCustomerMap = () => {
    return (
        <div className=" flex-wrap lg:flex-nowrap">
            <Button
                key={REGIONS[FIST_OPTION].id}
                onClick={() => { }}
                className={cn(
                    "rounded-full w-[160px] bg-app-dark-blue-200 py-2 px-3 lg:py-2.5 lg:px-4 xl:py-3 xl:px-5 text-xs lg:text-sm whitespace-nowrap transition-colors",
                    "hover:bg-app-dark-blue-250"
                )}
            >
                {REGIONS[FIST_OPTION].label}
            </Button>
            <Button
                key={REGIONS[FIST_OPTION].id}
                onClick={() => { }}
                className={cn(
                    "rounded-full py-2 px-3 lg:py-2.5 lg:px-4 xl:py-3 xl:px-5 text-xs lg:text-sm whitespace-nowrap transition-colors",
                    "bg-app-dark-blue-200 hover:bg-app-dark-blue-250"
                )}
            >
                {TYPES[FIST_OPTION].label}
            </Button>
        </div>
    )
}

