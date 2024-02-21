import React from "react";
import { MdGroup } from "react-icons/md";
import { twJoin } from "tailwind-merge";

type IPropUserInfo = {
   userInfo: {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
      name: string;
      company: string | null;
      blog: string;
      location: string;
      email: string | null;
      hireable: boolean | null;
      bio: string;
      twitter_username: string | null;
      public_repos: number;
      public_gists: number;
      followers: number;
      following: number;
      created_at: string;
      updated_at: string;
   };
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
      <section className="w-full bg-card border p-4 text-card-foreground rounded-lg">
         <header className="flex gap-x-4 items-center mb-4">
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

         <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </section>
   );
}
