"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

const authRoutes = ["/login"];

export const DashboardLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (isAuthRoute) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen w-full  overflow-hidden bg-app-bg-dark">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 mx-2.5  xl:mx-44 2xl:mx-48 overflow-y-auto p-6">
          {children};
        </main>
      </div>
    </div>
  );
};

