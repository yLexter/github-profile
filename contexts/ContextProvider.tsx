"use client";

import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { UserGithubContextProvider } from "./UserProvider";

type IPropContextProvider = {
   children: React.ReactNode;
};

export default function ContextProvider({ children }: IPropContextProvider) {
   return (
      <ThemeProvider>
         <UserGithubContextProvider>{children}</UserGithubContextProvider>
      </ThemeProvider>
   );
}
