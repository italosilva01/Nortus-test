import { cn } from "@/shared/lib/utils"
import { createElement } from "react"

interface TypographyProps {
    children: React.ReactNode
    className?: string
    element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
    fontFamily?: "inter" | "sans" | "montserrat"
    fontWeight?: "normal" | "bold" | "semibold" | "extrabold"
    fontSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
    fontColor?: "primary" | "secondary" | "accent" | "bg-dark" | "title"
    fontStyle?: "normal" | "italic"
    fontDecoration?: "none" | "underline" | "line-through"
    fontTransform?: "none" | "uppercase" | "lowercase"
}
export const Typography = ({ children, className, element = "p", fontFamily = "inter", fontWeight = "normal", fontSize, fontColor }: TypographyProps) => {

    const fontFamilyClass = fontFamily === "inter" ? "font-inter" : "font-sans"

    const fontWeightClass = fontWeight ? {
        "normal": "font-normal",
        "bold": "font-bold",
        "semibold": "font-semibold",
        "extrabold": "font-extrabold"
    }[fontWeight] : ""

    const fontSizeClass = fontSize ? `text-${fontSize}` : ""

    const fontColorClass = fontColor ? {
        "primary": "text-app-primary",
        "secondary": "text-app-secondary",
        "accent": "text-app-accent",
        "bg-dark": "text-app-bg-dark",
        "title": "text-title"
    }[fontColor] : ""

    return createElement(element, {
        className: cn(
            fontFamilyClass,
            fontWeightClass,
            fontSizeClass,
            fontColorClass,
            className
        ),
    },
        children)
}