"use client";

import {
   ILanguagesRepositoryResponse,
   IRepositoryFile,
   IRepositoryResponse,
   IUserInfoResponse,
   TRepository,
} from "@/types";
import React, { useContext, useEffect, useState, createContext } from "react";

export type TUserGithubProvider = {
   data: TUserGitHub;
   error: string | null;
   isLoading: boolean;
   fetchUser: (user: string) => Promise<void>;
};

export type TUserGitHub = {
   profile: IUserInfoResponse;
   repositories: TRepository[];
};

const defaultUser: TUserGitHub = {
   profile: {
      login: "raimudoneto",
      id: 12345678,
      node_id: "U_kgDOBaVwVw",
      avatar_url: "./raimundo-neto.jpg",
      gravatar_id: "",
      url: "https://imgb.ifunny.co/images/fbe2558bb7ed170da3ef468819e4be27d54fe18060950b41f1d019cc2cb034d6_3.jpg",
      html_url: "https://github.com/raimundoneto",
      followers_url: "https://api.github.com/users/meowMaster/followers",
      following_url:
         "https://api.github.com/users/meowMaster/following{/other_user}",
      gists_url: "https://api.github.com/users/meowMaster/gists{/gist_id}",
      starred_url:
         "https://api.github.com/users/meowMaster/starred{/owner}{/repo}",
      subscriptions_url:
         "https://api.github.com/users/meowMaster/subscriptions",
      organizations_url: "https://api.github.com/users/meowMaster/orgs",
      repos_url: "https://api.github.com/users/meowMaster/repos",
      events_url: "https://api.github.com/users/meowMaster/events{/privacy}",
      received_events_url:
         "https://api.github.com/users/meowMaster/received_events",
      type: "Cat",
      site_admin: false,
      name: "Raimundo Neto 4.0",
      company: null,
      blog: "",
      location: "Rússia",
      email: null,
      hireable: null,
      bio: "Olá sou raimundo neto",
      twitter_username: "raimundoneto4",
      public_repos: 9,
      public_gists: 0,
      followers: 515461,
      following: 4155656,
      created_at: "2021-11-20T02:52:27Z",
      updated_at: "2024-01-19T00:17:11Z",
   },
   repositories: [],
};

const userGithubContext = createContext({} as TUserGithubProvider);

const fetchUserData = async (username: string): Promise<IUserInfoResponse> => {
   const response = await fetch(`https://api.github.com/users/${username}`);

   if (!response.ok)
      throw new Error(`Failed to fetch user data for ${username}`);

   return await response.json();
};

const fetchUserRepos = async (
   reposUrl: string
): Promise<IRepositoryResponse[]> => {
   const response = await fetch(reposUrl);

   if (!response.ok) throw new Error(`Failed to fetch user repos`);

   return await response.json();
};

const fetchRepoLanguages = async (
   languagesUrl: string
): Promise<ILanguagesRepositoryResponse> => {
   const response = await fetch(languagesUrl);

   if (!response.ok) {
      throw new Error(`Failed to fetch repo languages`);
   }
   return await response.json();
};

const fetchRepoFiles = async (
   owner: string,
   repository: string
): Promise<IRepositoryFile[]> => {
   const response = await fetch(
      `https://api.github.com/repos/${owner}/${repository}/contents`
   );

   if (!response.ok) {
      throw new Error(`Failed to fetch repo languages`);
   }
   return await response.json();
};

export const UserGithubContextProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [userData, setUserData] = useState<TUserGitHub>(defaultUser);
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(false);

   const fetchUser = async (user: string) => {
      let data: TUserGitHub = {
         profile: {} as IUserInfoResponse,
         repositories: [],
      };

      setError(null);
      setLoading(true);

      try {
         const userData = await fetchUserData(user);
         const repositories = await fetchUserRepos(userData.repos_url);
         const firstsRepositories = repositories.slice(0, 2);

         data.profile = userData;

         for await (let repositoryResponse of firstsRepositories) {
            let repository = { ...repositoryResponse } as TRepository;

            const languages = await fetchRepoLanguages(
               repository.languages_url
            );

            const files = await fetchRepoFiles(userData.login, repository.name);

            repository["languages"] = languages;
            repository["files"] = files;

            data.repositories.push(repository);
         }

         setUserData(data);
      } catch (error) {
         const message =
            (error as Error)?.message || "Error inesperado, tente novamente.";

         setError(message);
      } finally {
         setLoading(false);
      }
   };

   return (
      <userGithubContext.Provider
         value={{ data: userData, fetchUser, error, isLoading: loading }}
      >
         {children}
      </userGithubContext.Provider>
   );
};

export const useUserGithubContext = () => useContext(userGithubContext);
