"use client";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { Typography } from "@/components/ui/custom/Typography";
import { ROUTE_MAP } from "@/shared/lib/helpers";
export const Header = () => {
  const pathname = usePathname();
  const t = useTranslations("HeaderLayout");


  return (
    <header className="flex h-16 xl:h-20 2xl:h-22 items-center justify-between bg-app-dark-blue-500 px-6">
      <Typography fontFamily="montserrat" fontWeight="semibold" className="text-[1.25rem]" fontColor="title">
        {t(ROUTE_MAP[pathname] || "dashboard")}
      </Typography>
    </header>
  );
};

