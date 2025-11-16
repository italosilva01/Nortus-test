
import { cn } from "@/shared/lib/utils"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import * as React from "react"
import { useState } from "react"
import { Button } from "../button"
import { Input } from "../input"
import { Typography } from "./Typography"
interface FormInputProps extends React.ComponentProps<"input"> {
  error?: string
  label?: string
  title?: string
  labelClassName?: string
  containerClassName?: string
  inputClassName?: string
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, label, title, labelClassName, containerClassName, inputClassName, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const typeInput = props?.type
    const isPassword = typeInput === 'password'

    return (
      <div className={cn("w-full", containerClassName)}>
         {title && (
            <Typography
              element="p"
              fontColor="title"
              fontSize="xl"
              fontWeight="normal"
              className="mt-1 mb-0.5 text-left text-[1rem] font-medium"
            >
              {title}
            </Typography>
          )}
        <div className="flex items-center gap-2 relative">
         
          <Input ref={ref} aria-invalid={!!error} {...props} type={isPassword ? (isPasswordVisible ? 'text' : 'password') : typeInput} className={inputClassName} />
          {isPassword && (
            <Button
              type="button"
              variant="ghost"
              className="absolute bg-transparent right-0 top-0 h-full px-4 text-white hover:bg-transparent hover:text-gray-300 rounded-l-none rounded-r-2xl"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              aria-label={isPasswordVisible ? "Esconder senha" : "Mostrar senha"}
            >
              {isPasswordVisible ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
            </Button>
          )}
        </div>
        {
          label && (
            <Typography
              element="p"
              fontColor="title"
              fontSize="xl"
              fontWeight="normal"
              className={cn("indent-3 mt-1 text-left", labelClassName)}
            >
              {label}
            </Typography>
          )
        }
        {
          error && (
            <Typography
              element="p"
              fontSize="sm"
              fontWeight="normal"
              className="text-red-500 mt-1 text-left indent-3"
            >
              {error}
            </Typography>
          )
        }
      </div >
    )
  }
)

FormInput.displayName = "FormInput"

export { FormInput }

