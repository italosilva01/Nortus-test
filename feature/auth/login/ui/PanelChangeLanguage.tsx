
import Image from "next/image"
import StackedCards from "@/public/image/StackedCard.svg"
import { Button } from "@/components/ui/button"
import HelpIcon from "@/public/icons/sideBar/customerSupport.svg"
import { BR } from "country-flag-icons/react/1x1"
import { ArrowDown } from "lucide-react"

export const PanelChangeLanguage = () => {
    return (
        <div className="">
            <div className="relative size-[60vw] xl:size-[50vw] 2xl:min-w-233.5 2xl:h-237.5 2xl:max-w-245 rounded-2xl">
                <div className="absolute top-0 left-0 size-full z-50 flex items-start justify-end" >
                    <div className="
                    flex gap-2 bg-app-bg-dark 2xl:w-max rounded-2xl rounded-tr-none p-4
                    ">
                        <Button className="bg-app-blue-100 rounded-full p-6">
                            <Image src={HelpIcon as string} alt="Help Icon" width={24} height={24} />
                            Ajuda
                        </Button>

                        <Button className="bg-app-blue-100 rounded-full p-6 min-w-29">
                            <ArrowDown className="w-6 h-6" />
                            <BR className="w-6 h-6 rounded-full" />
                            PT-br
                        </Button>
                    </div>
                </div>
                <Image src={StackedCards as string} alt="Stacked Cards"
                    fill className="object-cover" />
            </div>
        </div>
    )
}
