import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import ContextProvider from "@/contexts/ContextProvider";

export const fontSans = FontSans({
   subsets: ["latin"],
   variable: "--font-sans",
});

export const metadata: Metadata = {
   title: "Github Profile",
   description: "Site para mostrar as informações do github",
   icons: "https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png",
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
               `${fontSans.className}`,
               "flex justify-center items-center"
            )}
         >
            <ContextProvider>{children}</ContextProvider>
         </body>
      </html>
   );
}
