"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Tooltip, TooltipProvider } from "@radix-ui/react-tooltip";
import { cn } from "../lib/utils";
import SideNavbar from "../components/ui/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Dashbord",
  description: "THAILAND PHUKET DASHBORD BY PHUKET RAJAPHAT UNIVERSITY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex",
          inter.className,
          {
            "debug-screen": process.env.NODE_ENV === "development",
          }
        )}
      >
        {/* sidebar */}
        <TooltipProvider>
          {" "}
          <SideNavbar />
        </TooltipProvider>

        {/* main page */}
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
