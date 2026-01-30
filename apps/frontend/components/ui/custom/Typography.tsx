import { cn } from "@/shared/lib/utils"
import { createElement } from "react"

interface TypographyProps {
    children: React.ReactNode
    className?: string
    element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
    fontFamily?: "inter" | "sans" | "montserrat" | "space-grotesk"
    fontWeight?: "normal" | "bold" | "semibold" | "extrabold"
    fontSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
    fontColor?: string
    fontStyle?: "normal" | "italic"
    fontDecoration?: "none" | "underline" | "line-through"
    fontTransform?: "none" | "uppercase" | "lowercase"
}
export const Typography = ({ children, className, element = "p", fontFamily = "inter", fontWeight = "normal", fontSize, fontColor }: TypographyProps) => {

 
    const fontWeightClass = fontWeight ? {
        "normal": "font-normal",
        "bold": "font-bold",
        "semibold": "font-semibold",
        "extrabold": "font-extrabold"
    }[fontWeight] : ""
    const currentFontColor = fontColor ? `text-${fontColor}` : "text-surface-solid" 
    const fontSizeClass = fontSize ? `text-${fontSize}` : ""

    const fontFamilyClass = fontFamily ? {
        "inter": "font-inter",
        "sans": "font-sans",
        "montserrat": "font-montserrat",
        "space-grotesk": "font-space-grotesk"
    }[fontFamily] : ""

    return createElement(element, {
        className: cn(`h-min`,
          fontFamilyClass,
            fontWeightClass,
            fontSizeClass,
            currentFontColor,
            className
        ),
    },
        children)
}