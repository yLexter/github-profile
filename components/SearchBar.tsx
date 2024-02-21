import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

type IPropSearchBar = {};

export default function SearchBar({}: IPropSearchBar) {
   return (
      <div className="flex items-center">
         <CiSearch className="w-10 h-10" />
         <Input className="outline-none" />
         <Button variant="secondary">Buscar</Button>
      </div>
   );
}
