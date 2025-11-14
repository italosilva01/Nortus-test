"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Home, Users, Settings, FileText, BarChart3 } from "lucide-react";

const menuItems = [
  {
    icon: Home,
    label: "home",
    href: "/",
  },
  {
    icon: BarChart3,
    label: "dashboard",
    href: "/dashboard",
  },
  {
    icon: Users,
    label: "users",
    href: "/users",
  },
  {
    icon: FileText,
    label: "reports",
    href: "/reports",
  },
  {
    icon: Settings,
    label: "settings",
    href: "/settings",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const t = useTranslations("Sidebar");

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-zinc-200 bg-white">
      <div className="flex h-16 items-center justify-center border-b border-zinc-200 px-6">
        <h1 className="text-xl font-bold text-zinc-900">Nortus DW</h1>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-zinc-700 hover:bg-zinc-100"
              }`}
              aria-label={t(item.label)}
            >
              <Icon className="h-5 w-5" />
              <span>{t(item.label)}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-zinc-200 p-4">
        <div className="flex items-center gap-3 rounded-lg px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
            <span className="text-sm font-semibold text-blue-600">U</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-900">Usuário</span>
            <span className="text-xs text-zinc-500">user@nortus.com</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

