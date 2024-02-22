import { IRepositoryResponse, IUserInfoResponse, utils } from "@/types";
import React from "react";
import { twJoin, twMerge } from "tailwind-merge";
import RepositoryFiles from "./RepositoryFiles";
import { FaCodeFork } from "react-icons/fa6";
import { MdStarOutline } from "react-icons/md";
import LanguagesData from "./LanguagesData";

type IPropRepository = {
   repository: IRepositoryResponse;
   profile: IUserInfoResponse;
};

export default function Repository({
   profile,
   repository,
   repository: {
      id,
      node_id,
      name,
      full_name,
      html_url,
      description,
      fork,
      url,
      forks_url,
      keys_url,
      collaborators_url,
      teams_url,
      hooks_url,
      issue_events_url,
      events_url,
      assignees_url,
      branches_url,
      tags_url,
      blobs_url,
      git_tags_url,
      git_refs_url,
      trees_url,
      statuses_url,
      languages_url,
      stargazers_url,
      contributors_url,
      subscribers_url,
      subscription_url,
      commits_url,
      git_commits_url,
      comments_url,
      issue_comment_url,
      contents_url,
      compare_url,
      merges_url,
      archive_url,
      downloads_url,
      issues_url,
      pulls_url,
      milestones_url,
      notifications_url,
      labels_url,
      releases_url,
      deployments_url,
      created_at,
      updated_at,
      pushed_at,
      git_url,
      ssh_url,
      clone_url,
      svn_url,
      homepage,
      size,
      stargazers_count,
      watchers_count,
      language,
      has_issues,
      has_projects,
      has_downloads,
      has_wiki,
      has_pages,
      has_discussions,
      forks_count,
      mirror_url,
      archived,
      disabled,
      open_issues_count,
      license,
      allow_forking,
      is_template,
      web_commit_signoff_required,
      topics,
      visibility,
      forks,
      open_issues,
      watchers,
      default_branch,
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
