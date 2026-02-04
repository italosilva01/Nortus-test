'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
const authRoutes = ['/login'];

export const DashboardLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  const queryClient = new QueryClient();

  
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (isAuthRoute) {
    return <>{children}</>;
  }

  return (
    <div className="flex w-full overflow-hidden bg-app-bg-dark relative">
      <Sidebar />
      <Header />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
      <div className="flex flex-1 flex-col overflow-hidden mt-22">
        <main className="flex-1 overflow-y-auto mx-auto w-full max-w-[1370px] mt-[56px]">
          {children};
        </main>
      </div>
      </QueryClientProvider>
    </div>
  );
};
