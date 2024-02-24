"use client";

import React from "react";
import { MdGroup } from "react-icons/md";
import { twJoin } from "tailwind-merge";
import { FaBuilding } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useUserGithubContext } from "@/contexts/UserProvider";
import { LoadingUserInfo } from "../loadings/LoadingUserInfo";
import SocialUser from "./SocialUser";

type IPropUserInfo = {};

export default function UserInfo({}: IPropUserInfo) {
   const {
      data: { profile },
      isLoading,
   } = useUserGithubContext();

   if (isLoading) {
      return <LoadingUserInfo />;
   }

   return (
      <section className="flex flex-col gap-y-4 w-full bg-card border p-4 text-card-foreground rounded-lg">
         <header className="flex gap-x-4 items-center">
            <img
               className="rounded-full w-32 h-32"
               src={profile.avatar_url}
               alt="Avatar GitHub"
            />

            <div>
               <h3 className="text-2xl font-semibold">{profile.name}</h3>
               <a
                  target="_blank"
                  href={profile.html_url}
                  className="text-blue-500 hover:underline duration-150"
               >
                  @{profile.login}
               </a>

               <div className="flex gap-x-2 items-center">
                  <MdGroup />
                  <div>
                     <span className="font-semibold">{profile.followers}</span>{" "}
                     <span className="text-muted-foreground">Seguidores</span>
                  </div>

                  <div>
                     <span
                        className={twJoin(
                           "font-semibold ml-1 relative before:content-['.']",
                           "before:absolute before:bottom-[5%] before:left-[-90%]"
                        )}
                     >
                        {profile.following}
                     </span>{" "}
                     <span className="text-muted-foreground">Seguindo</span>
                  </div>
               </div>
            </div>
         </header>

         <p className="text-sm">{profile.bio}</p>

         <div className="flex justify-between items-center ">
            <SocialUser Icon={CiLocationOn} label={profile.location} />
            <SocialUser
               Icon={FaTwitter}
               link={
                  profile.twitter_username &&
                  `https://twitter.com/${profile.twitter_username}`
               }
               label={profile.twitter_username}
            />
            <SocialUser Icon={FaBuilding} label={profile.company} />
         </div>
      </section>
   );
}
