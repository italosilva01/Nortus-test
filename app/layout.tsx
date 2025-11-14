import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { AuthSync } from "@/components/AuthSync";
import { DashboardLayoutWrapper } from "@/components/layout/DashboardLayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Nortus DW',
  description: 'Nortus DW',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} antialiased bg-app-bg-dark`}
      >
        <SessionProvider>
          <AuthSync />
          <NextIntlClientProvider>
            <DashboardLayoutWrapper>
              {children}
            </DashboardLayoutWrapper>
            <Toaster position="top-right" richColors />
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
