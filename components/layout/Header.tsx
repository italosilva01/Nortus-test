"use client";

import { useTranslations } from "next-intl";
import { Bell, Search, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export const Header = () => {
  const t = useTranslations("Header");

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-6">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-lg border border-zinc-200 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            aria-label={t("searchPlaceholder")}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="relative rounded-lg p-2 text-zinc-600 transition-colors hover:bg-zinc-100"
          aria-label={t("notifications")}
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="h-6 w-px bg-zinc-200"></div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
          aria-label={t("logout")}
        >
          <LogOut className="h-5 w-5" />
          <span>{t("logout")}</span>
        </button>
      </div>
    </header>
  );
};

