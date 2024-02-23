"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { useUserGithubContext } from "@/contexts/UserProvider";

type IPropSearchBar = {};

export default function SearchBar() {
   const [focused, setFocused] = useState(false);
   const { isLoading, fetchUser } = useUserGithubContext();
   const inputRef = useRef<HTMLInputElement>(null);

   const handleClick = () => {
      if (inputRef.current) {
         fetchUser(inputRef.current.value);
      }
   };

   return (
      <div
         className={`relative ${
            focused ? "border-blue-500" : "border"
         } border rounded-lg p-2 flex items-center`}
      >
         <CiSearch className={`h-5 w-5 mr-2 text-blue-500`} />

         <input
            ref={inputRef}
            disabled={isLoading}
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none flex-1"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
         />
         <Button onClick={handleClick} disabled={isLoading} variant="secondary">
            Buscar
         </Button>
      </div>
   );
}
