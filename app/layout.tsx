import type { Metadata } from "next";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/providers/toast-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { ThemesProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LMS",
  description: "Learning Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemesProvider>
            <ConfettiProvider />
            <ToastProvider />
            {children}
          </ThemesProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
