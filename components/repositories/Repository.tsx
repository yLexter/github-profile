import {
   IRepositoryResponse,
   IUserInfoResponse,
   TRepository,
   utils,
} from "@/types";
import React from "react";
import { twJoin, twMerge } from "tailwind-merge";
import RepositoryFiles from "./RepositoryFiles";
import { FaCodeFork } from "react-icons/fa6";
import { MdStarOutline } from "react-icons/md";
import LanguagesData from "./LanguagesData";

type IPropRepository = {
   repository: TRepository;
   profile: IUserInfoResponse;
};

export default function Repository({
   profile,
   repository,
   repository: {
      name,
      html_url,
      description,
      created_at,
      stargazers_count,
      language,
      forks_count,
   },
}: IPropRepository) {
   const { color } = utils.getAboutLanguage(language);

   return (
      <article className="mb-5">
         <header className="mb-4">
            <a
               className="text-blue-500 hover:underline text-xl"
               href={html_url}
            >
               {name}
            </a>

            <p className="text-muted-foreground text-sm mb-2">{description}</p>

            <div className="flex gap-x-4 justify-between items-center text-muted-foreground text-sm">
               <p>Criado em {utils.formatDate(created_at)}</p>
               <p
                  className={twMerge(
                     "relative",
                     "before:content-[''] before:absolute",
                     "before:h-2 before:w-2 before:top-[30%] before:left-[-15%]",
                     `before:bg-[${color}] before:rounded-full`
                  )}
               >
                  {language}
               </p>
            </div>
         </header>

         <RepositoryFiles profile={profile} repository={repository} />

         <div className="flex justify-between mb-4">
            <div className="flex-1">
               <h3 className="font-semibold mb-2">Sobre Repositório</h3>

               <div className="text-muted-foreground">
                  <div className="flex items-center gap-x-2">
                     <FaCodeFork />
                     {forks_count} Forks
                  </div>

                  <div className="flex items-center gap-x-2">
                     <MdStarOutline />
                     {stargazers_count} Estrelas
                  </div>
               </div>
            </div>

            <div className="flex-1">
               <h3 className="font-semibold mb-2">Linguagens</h3>
               <LanguagesData />
            </div>
         </div>

         <p className="text-sm text-center">
            Para ver o repositório completo,{" "}
            <a className="hover:underline hover:text-blue-500" href={html_url}>
               Clique Aqui!
            </a>{" "}
         </p>
      </article>
   );
}
