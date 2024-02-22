import React from "react";
import { IconType } from "react-icons";
import { MdGroup } from "react-icons/md";
import { twJoin, twMerge } from "tailwind-merge";
import { FaBuilding } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IUserInfoResponse } from "@/types";

type IPropUserInfo = {
   userInfo: IUserInfoResponse;
};

const InfoUser = ({
   label,
   Icon,
   link,
   className,
}: {
   Icon: IconType;
   label?: string | null;
   link?: string | null;
   className?: string;
}) => {
   return (
      <div className={twMerge("flex items-center gap-x-1", className)}>
         <Icon className="w-4 h-4" />
         {link && (
            <a className="hover:underline" href={link} target="_blank">
               {label}
            </a>
         )}
         {!!!link && <span>{label ?? "Não Avaliado"}</span>}
      </div>
   );
};

export default function UserInfo({
   userInfo: {
      login,
      id,
      node_id,
      avatar_url,
      gravatar_id,
      url,
      html_url,
      followers_url,
      following_url,
      gists_url,
      starred_url,
      subscriptions_url,
      organizations_url,
      repos_url,
      events_url,
      received_events_url,
      type,
      site_admin,
      name,
      company,
      blog,
      location,
      email,
      hireable,
      bio,
      twitter_username,
      public_repos,
      public_gists,
      followers,
      following,
      created_at,
      updated_at,
   },
}: IPropUserInfo) {
   return (
      <section className="flex flex-col gap-y-4 w-full bg-card border p-4 text-card-foreground rounded-lg">
         <header className="flex gap-x-4 items-center">
            <img
               className="rounded-full w-32 h-32"
               src={avatar_url}
               alt="Avatar GitHub"
            />

            <div>
               <h3 className="text-2xl font-semibold">{name}</h3>
               <a
                  target="_blank"
                  href={html_url}
                  className="text-blue-500 hover:underline duration-150"
               >
                  @{login}
               </a>

               <div className="flex gap-x-2 items-center">
                  <MdGroup />
                  <div>
                     <span className="font-semibold">{followers}</span>{" "}
                     <span className="text-muted-foreground">Seguidores</span>
                  </div>

                  <div>
                     <span
                        className={twJoin(
                           "font-semibold ml-1 relative before:content-['.']",
                           "before:absolute before:bottom-[5%] before:left-[-90%]"
                        )}
                     >
                        {following}
                     </span>{" "}
                     <span className="text-muted-foreground">Seguindo</span>
                  </div>
               </div>
            </div>
         </header>

         <p>{bio}</p>

         <div className="flex justify-between items-center ">
            <InfoUser Icon={CiLocationOn} label={location} />
            <InfoUser
               Icon={FaTwitter}
               link={
                  twitter_username && `https://twitter.com/${twitter_username}`
               }
               label={twitter_username}
            />
            <InfoUser Icon={FaBuilding} label={company} />
         </div>
      </section>
   );
}
