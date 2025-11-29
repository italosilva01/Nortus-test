import { AuthSync } from "@/components/AuthSync";
import { DashboardLayoutWrapper } from "@/components/layout/DashboardLayoutWrapper";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";
import { Inter, Montserrat, Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
        className={`${inter.variable} ${montserrat.variable} ${spaceGrotesk.variable} antialiased bg-app-bg-dark`}
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
