"use client"
import React from 'react';
// import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
interface Prop {
  children: React.ReactNode;
}


export const MainLayoutNextUi = ({children}: Prop) => {
  return (
    <div>
      {children}
      {/* <NextUIProvider>
        <NextThemeProvider attribute="class" defaultTheme="light">
          {children}
        </NextThemeProvider>
      </NextUIProvider> */}
    </div>
  );
}
