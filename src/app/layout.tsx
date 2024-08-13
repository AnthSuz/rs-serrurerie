import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <title>RS Serrurerie</title>
      <meta name="description" content="RS Serrurerie, votre serrurier professionnel pour dépannage, installation et conseils en serrurerie dans toute l'ile de France. Disponibilité 24/7." />
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-montserrat antialiased",
          fontSans.variable,
          montserrat.className
        )}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
