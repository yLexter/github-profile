import React from "react";
import { Skeleton } from "../ui/skeleton";

type IProploading = {};

export function LoadingUserInfo({}: IProploading) {
   return (
      <section className="flex flex-col gap-y-4 w-full bg-card border p-4 text-card-foreground rounded-lg">
         <header className="flex gap-x-4 items-center">
            <Skeleton className="rounded-full w-32 h-32" />

            <div className="flex flex-col gap-y-4">
               <Skeleton className="rounded-lg w-56 h-5" />
               <Skeleton className="rounded-lg w-36 h-5" />
               <Skeleton className="rounded-lg w-40 h-5" />
            </div>
         </header>

         <Skeleton className="rounded-lg w-full h-20" />

         <div className="flex justify-between items-center ">
            <Skeleton className="rounded-lg w-1/5 h-5" />
            <Skeleton className="rounded-lg w-1/5 h-5" />
            <Skeleton className="rounded-lg w-1/5 h-5" />
         </div>
      </section>
   );
}
