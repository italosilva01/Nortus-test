import { useTranslations } from "next-intl";
import React from "react";

type PriorityVariants = "medium" | "low" | "urgent" | "default";
type StatusVariants = "open" | "inProgress" | "solved" | "default";

type TagVariants = PriorityVariants | StatusVariants;

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant: TagVariants;
  className?: string;
}

const TagVariantsClasses: Record<
  TagVariants,
  { classname: string; name: string }
> = {
  medium: { classname: "bg-app-primary", name: "medium" },
  low: { classname: "bg-blue-100 text-black", name: "low" },
  open: { classname: "bg-green-200 text-black", name: "open" },
  inProgress: { classname: "bg-app-accent truncate", name: "inProgress" },
  solved: { classname: "bg-app-accent", name: "solved" },
  urgent: { classname: "bg-red-500 text-white", name: "urgent" },
  default: { classname: "bg-muted", name: "default" },
};

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ variant = "default", className = "" }, ref) => {
    const t = useTranslations("Tags");
    const variantClassname = TagVariantsClasses[variant].classname;
    const variantName = TagVariantsClasses[variant].name;

    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center rounded-full px-3 py-1 text-xs font-medium
          ${variantClassname} ${className}
        `}
      >
        {t(variantName)}
      </span>
    );
  },
);

Tag.displayName = "Tag";
