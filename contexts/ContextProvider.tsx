"use client";

import React from "react";
import { ThemeProvider } from "./ThemeProvider";

type IPropContextProvider = {
   children: React.ReactNode;
};

export default function ContextProvider({ children }: IPropContextProvider) {
   return <ThemeProvider>{children}</ThemeProvider>;
}
