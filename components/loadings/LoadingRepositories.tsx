import React from "react";
import { Skeleton } from "../ui/skeleton";

export function LoadingRepositories() {
   return (
      <section className="flex flex-col gap-y-4 border bg-card p-4 rounded-lg">
         <Skeleton className="rounded-lg w-1/3 h-8" />

         <div className="flex flex-col gap-y-4">
            <Skeleton className="rounded-lg w-full h-14" />
            <Skeleton className="rounded-lg w-full h-14" />
         </div>

         <Skeleton className="rounded-lg w-2/5 h-5 self-center " />
      </section>
   );
}
