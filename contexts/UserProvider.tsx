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
   error: boolean;
   loading: boolean;
   fetchUser: (user: string) => Promise<void>;
};

export type TUserGitHub = {
   profile: IUserInfoResponse;
   repositories: TRepository[];
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
   const [userData, setUserData] = useState<TUserGitHub>({} as TUserGitHub);
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);

   const fetchUser = async (user: string) => {
      let data: TUserGitHub = {
         profile: {} as IUserInfoResponse,
         repositories: [],
      };

      setLoading(true);

      try {
         const userData = await fetchUserData(user);
         const repositories = await fetchUserRepos(userData.repos_url);
         const firstsRepositories = repositories.slice(2);

         data.profile = userData;

         for await (let repository of firstsRepositories) {
            const simplifiedRepository = {} as TRepository;

            const languages = await fetchRepoLanguages(
               repository.languages_url
            );

            const files = await fetchRepoFiles(userData.login, repository.name);

            simplifiedRepository["languages"] = languages;
            simplifiedRepository["files"] = files;
            simplifiedRepository["id"] = repository["id"];
            simplifiedRepository["name"] = repository["name"];
            simplifiedRepository["full_name"] = repository["full_name"];
            simplifiedRepository["description"] = repository["description"];
            simplifiedRepository["html_url"] = repository["html_url"];
            simplifiedRepository["default_branch"] =
               repository["default_branch"];
            simplifiedRepository["created_at"] = repository["created_at"];
            simplifiedRepository["updated_at"] = repository["updated_at"];

            data.repositories.push(simplifiedRepository);
         }

         setUserData(data);
      } catch (error) {
         setError(true);
      } finally {
         setLoading(false);
      }
   };

   return (
      <userGithubContext.Provider
         value={{ data: userData, fetchUser, error, loading }}
      >
         {children}
      </userGithubContext.Provider>
   );
};

export const useuserGithubContext = () => useContext(userGithubContext);
