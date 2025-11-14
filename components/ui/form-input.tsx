import * as React from "react"
import { Input } from "./input"
import { Typography } from "./Typography"
import { cn } from "@/lib/utils"

interface FormInputProps extends React.ComponentProps<"input"> {
  error?: string
  label?: string
  labelClassName?: string
  containerClassName?: string
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, label, labelClassName, containerClassName, ...props }, ref) => {
    return (
      <div className={cn("w-full", containerClassName)}>
        <Input ref={ref} aria-invalid={!!error} {...props} />
        {label && (
          <Typography
            element="p"
            fontColor="title"
            fontSize="xl"
            fontWeight="normal"
            className={cn("indent-3 mt-1 text-left", labelClassName)}
          >
            {label}
          </Typography>
        )}
        {error && (
          <Typography
            element="p"
            fontSize="sm"
            fontWeight="normal"
            className="text-red-500 mt-1 text-left indent-3"
          >
            {error}
          </Typography>
        )}
      </div>
    )
  }
)

FormInput.displayName = "FormInput"

export { FormInput }

