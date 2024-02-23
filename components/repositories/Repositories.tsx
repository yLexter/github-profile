import { IRepositoryResponse, IUserInfoResponse } from "@/types";
import React from "react";
import Repository from "./Repository";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

const example: IRepositoryResponse[] = Array.from({ length: 5 }).map((_, i) => {
   return {
      id: 727926508 + i,
      node_id: "R_kgDOK2NG7A",
      name: "APIs",
      full_name: "yLexter/APIs",
      private: false,
      html_url: "https://github.com/yLexter/APIs",
      description:
         "Repositório dedicado a armazenar todos os projetos de API feitos por mim.",
      fork: false,
      url: "https://api.github.com/repos/yLexter/APIs",
      forks_url: "https://api.github.com/repos/yLexter/APIs/forks",
      keys_url: "https://api.github.com/repos/yLexter/APIs/keys{/key_id}",
      collaborators_url:
         "https://api.github.com/repos/yLexter/APIs/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/yLexter/APIs/teams",
      hooks_url: "https://api.github.com/repos/yLexter/APIs/hooks",
      issue_events_url:
         "https://api.github.com/repos/yLexter/APIs/issues/events{/number}",
      events_url: "https://api.github.com/repos/yLexter/APIs/events",
      assignees_url:
         "https://api.github.com/repos/yLexter/APIs/assignees{/user}",
      branches_url:
         "https://api.github.com/repos/yLexter/APIs/branches{/branch}",
      tags_url: "https://api.github.com/repos/yLexter/APIs/tags",
      blobs_url: "https://api.github.com/repos/yLexter/APIs/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/yLexter/APIs/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/yLexter/APIs/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/yLexter/APIs/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/yLexter/APIs/statuses/{sha}",
      languages_url: "https://api.github.com/repos/yLexter/APIs/languages",
      stargazers_url: "https://api.github.com/repos/yLexter/APIs/stargazers",
      contributors_url:
         "https://api.github.com/repos/yLexter/APIs/contributors",
      subscribers_url: "https://api.github.com/repos/yLexter/APIs/subscribers",
      subscription_url:
         "https://api.github.com/repos/yLexter/APIs/subscription",
      commits_url: "https://api.github.com/repos/yLexter/APIs/commits{/sha}",
      git_commits_url:
         "https://api.github.com/repos/yLexter/APIs/git/commits{/sha}",
      comments_url:
         "https://api.github.com/repos/yLexter/APIs/comments{/number}",
      issue_comment_url:
         "https://api.github.com/repos/yLexter/APIs/issues/comments{/number}",
      contents_url:
         "https://api.github.com/repos/yLexter/APIs/contents/{+path}",
      compare_url:
         "https://api.github.com/repos/yLexter/APIs/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/yLexter/APIs/merges",
      archive_url:
         "https://api.github.com/repos/yLexter/APIs/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/yLexter/APIs/downloads",
      issues_url: "https://api.github.com/repos/yLexter/APIs/issues{/number}",
      pulls_url: "https://api.github.com/repos/yLexter/APIs/pulls{/number}",
      milestones_url:
         "https://api.github.com/repos/yLexter/APIs/milestones{/number}",
      notifications_url:
         "https://api.github.com/repos/yLexter/APIs/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/yLexter/APIs/labels{/name}",
      releases_url: "https://api.github.com/repos/yLexter/APIs/releases{/id}",
      deployments_url: "https://api.github.com/repos/yLexter/APIs/deployments",
      created_at: "2023-12-05T21:31:18Z",
      updated_at: "2023-12-06T04:51:58Z",
      pushed_at: "2023-12-12T05:39:11Z",
      git_url: "git://github.com/yLexter/APIs.git",
      ssh_url: "git@github.com:yLexter/APIs.git",
      clone_url: "https://github.com/yLexter/APIs.git",
      svn_url: "https://github.com/yLexter/APIs",
      homepage: null,
      size: 46,
      stargazers_count: 0,
      watchers_count: 0,
      language: "TypeScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
   };
});

type IPropRepositories = {
   repositories?: IRepositoryResponse[];
   profile: IUserInfoResponse;
};

export default function Repositories({ profile }: IPropRepositories) {
   return (
      <section className="border bg-card p-4 rounded-lg">
         <h1 className="text-2xl font-semibold mb-4">Repositorios</h1>

         <div className="mb-4">
            <Accordion type="single" collapsible className="w-full">
               {example.map((repository) => {
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
