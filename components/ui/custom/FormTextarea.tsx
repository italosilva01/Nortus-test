import { cn } from "@/shared/lib/utils"
import * as React from "react"
import { Textarea } from "../textarea"
import { Typography } from "./Typography"

interface FormTextareaProps extends React.ComponentProps<"textarea"> {
  error?: string
  label?: string
  labelClassName?: string
  containerClassName?: string
  inputClassName?: string,
  title?: string
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ error, label, labelClassName, containerClassName, title, inputClassName, ...props }, ref) => {
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
          <Textarea ref={ref} aria-invalid={!!error} {...props} className={inputClassName} />
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

FormTextarea.displayName = "FormTextarea"

export { FormTextarea }

