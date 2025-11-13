
import Image from "next/image"
import StackedCards from "@/public/image/StackedCard.svg"

export const PanelChangeLanguage = () => {
    return (
        <div className="">
            <div className="relative size-[60vw] xl:size-[50vw] 2xl:min-w-233.5 2xl:h-237.5 2xl:max-w-245 rounded-2xl">
                <Image src={StackedCards as string} alt="Stacked Cards"
                    fill className="object-cover" />
            </div>
        </div>
    )
}
