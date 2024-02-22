"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";

type IPropSearchBar = {};

export default function SearchBar() {
   const [focused, setFocused] = useState(false);

   return (
      <div
         className={`relative ${
            focused ? "border-blue-500" : "border"
         } border rounded-lg p-2 flex items-center`}
      >
         <CiSearch className={`h-5 w-5 mr-2 text-blue-500`} />
         <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none flex-1"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
         />
         <Button variant="secondary">Buscar</Button>
      </div>
   );
}
