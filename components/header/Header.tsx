"use client";

import React from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

type IPropHeader = {};

export default function Header({}: IPropHeader) {
   const { theme, setTheme } = useTheme();

   const toggleTheme = () => {
      setTheme(theme == "light" ? "dark" : "light");
   };

   return (
      <header className="flex justify-between items-center">
         <h1 className="text-3xl font-semibold ">GitHub Profile</h1>

         <div className="flex items-center gap-x-2 mt-1">
            <button
               className="flex items-center gap-x-1 clear"
               onClick={toggleTheme}
            >
               {theme === "light" ? <MdOutlineLightMode /> : <MdDarkMode />}
               {theme === "light" ? <span>Claro</span> : <span>Escuro</span>}
            </button>
         </div>
      </header>
   );
}
