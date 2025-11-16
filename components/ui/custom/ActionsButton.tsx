import { Eye, Pencil } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActionsButtonProps {
  onEdit?: () => void;
  onView?: () => void;
  editLabel?: string;
  viewLabel?: string;
}

export const ActionsButton: React.FC<ActionsButtonProps> = ({
  onEdit,
  onView,
  editLabel,
  viewLabel,
}) => {
  const t = useTranslations("ActionsButton");
  const editLabelTextDefault = t("edit");
  const viewLabelTextDefault = t("view");
  const editLabelText = editLabel || editLabelTextDefault;
  const viewLabelText = viewLabel || viewLabelTextDefault;

  return (
    <TooltipProvider>
    <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
        type="button"
        onClick={onEdit}
              variant="ghost"
              size="icon"
              className="size-8"
            >
              <Pencil className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-white">{editLabelText}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
        type="button"
        onClick={onView}
              variant="ghost"
              size="icon"
              className="size-8"
            >
              <Eye className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-white">{viewLabelText}</p>
          </TooltipContent>
        </Tooltip>
    </div>
    </TooltipProvider>
  );
};
