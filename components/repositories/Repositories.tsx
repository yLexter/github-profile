"use client";

import { IRepositoryResponse, IUserInfoResponse } from "@/types";
import React from "react";
import Repository from "./Repository";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import { LoadingRepositories } from "../common/loading";
import { useUserGithubContext } from "@/contexts/UserProvider";

type IPropRepositories = {};

export default function Repositories({}: IPropRepositories) {
   const {
      data: { profile, repositories },
      isLoading,
   } = useUserGithubContext();

   if (isLoading) {
      return <LoadingRepositories />;
   }

   return (
      <section className="border bg-card p-4 rounded-lg">
         <h1 className="text-2xl font-semibold mb-4">Repositorios</h1>

         <div className="mb-4">
            <Accordion type="single" collapsible className="w-full">
               {repositories.map((repository) => {
                  return (
                     <AccordionItem
                        key={`Rep-${repository.id}`}
                        value={repository.id.toString()}
                     >
                        <AccordionTrigger>{repository.name}</AccordionTrigger>

                        <AccordionContent>
                           <Repository
                              profile={profile}
                              repository={repository}
                           />
                        </AccordionContent>
                     </AccordionItem>
                  );
               })}
            </Accordion>
         </div>

         <p className="text-sm text-center">
            Para todos repositório,{" "}
            <a
               className="hover:underline hover:text-blue-500"
               href={profile.html_url}
            >
               Clique Aqui!
            </a>{" "}
         </p>
      </section>
   );
}
