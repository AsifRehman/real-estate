import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Modals } from "@/components/provider/Modal";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

import { auth } from "@/auth";
import Header from "@/components/navigation/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BR Real Estate",
  description: "BR Real Estate",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={cn("hide-scrollbar", inter.className)}>
          <div className="px-2 sticky top-0 z-30">
            <Header />
          </div>
          <Modals />
          <Toaster />
          <div className="px-10 mt-6">{children}</div>
        </body>
      </SessionProvider>
    </html>
  );
}
