"use client";

import { Typography } from "@/components/ui/custom/Typography";
export const Header = () => {
  return (
    <header className="flex h-16 xl:h-20 2xl:h-22 items-center justify-between bg-app-dark-blue-500 px-6">
      <Typography fontFamily="montserrat" fontWeight="semibold" className="text-[1.25rem]" fontColor="title">
        Dashboard
      </Typography>
    </header>
  );
};

