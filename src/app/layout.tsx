// "use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
// import { MainLayoutNextUi } from "@/components/layoutRoot/MainLayoutNextUi";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amankaya | Restaurante de comida peruana en el centro de Miraflores",
  description:
    "Restaurante de comida peruana ubicado en la Quinta Bustos, en el centro de Miraflores, Lima. Nuestra carta fue elaborada por el Chef Gabriel Osorio teniendo en cuenta el manejo de insumos sostenibles y de temporada, con el alma de nuestra cocina ancestral y creatividad transgresora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
     
        <body className={inter.className}>{children}</body>
     
    </html>
  );
}
