"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import NortusIcon from "@/public/icons/sideBar/nortusIcon.svg";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { MENU_ITEMS } from "@/shared/lib/helpers";

export const Sidebar = () => {
  const pathname = usePathname();
  const t = useTranslations("Sidebar");

  return (
    <aside
      className="flex flex-col h-screen w-24 2xl:w-37.5 bg-app-dark-blue-500 rounded-tr-[23px] rounded-br-[26px] shadow-2xl shadow-black "
    >

      <div className="flex h-16 items-center justify-center 2xl:p-10">
        <Image src={NortusIcon as string} alt="Nortus icon" width={40} height={40} />
      </div>

      <nav className="flex flex-1 flex-col p-4 items-center justify-center gap-10">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon as React.ElementType & { src: string };
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center justify-center 
                w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16  
                rounded-2xl
                ${isActive ? 'sidebar-link-active' : 'sidebar-link-inactive'}
              `}
              aria-label={t(item.label)}
            >
              <Image
                src={Icon.src}
                alt={item.label}
                width={24}
                height={24}
                className={`w-4 h-4 xl:w-6 xl:h-6 ${isActive ? 'brightness-0 invert' : ''}`}
              />
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center justify-center mb-14 xl:mb-16 2xl:mb-20">
        <div className="rounded-full shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]">
          <Avatar className="size-12 xl:size-14 2xl:size-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </aside >
  );
};

