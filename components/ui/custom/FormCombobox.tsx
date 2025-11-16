import { cn } from "@/shared/lib/utils"
import { Combobox, ComboboxOption } from "../combobox"
import { Typography } from "./Typography"

interface FormComboboxProps {
  error?: string
  label?: string
  title?: string
  labelClassName?: string
  containerClassName?: string
  comboboxClassName?: string
  options: ComboboxOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  emptyMessage?: string
  searchPlaceholder?: string
}

const FormCombobox = ({
  error,
  label,
  title,
  labelClassName,
  containerClassName,
  comboboxClassName,
  options,
  value,
  onValueChange,
  placeholder,
  emptyMessage,
  searchPlaceholder,
}: FormComboboxProps) => {
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
        <Combobox
          options={options}
          value={value}
          onValueChange={onValueChange}
          placeholder={placeholder}
          emptyMessage={emptyMessage}
          searchPlaceholder={searchPlaceholder}
          className={cn(comboboxClassName, error && "aria-invalid")}
        />
      </div>
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

FormCombobox.displayName = "FormCombobox"

export { FormCombobox }
