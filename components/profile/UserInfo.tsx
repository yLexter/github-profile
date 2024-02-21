import React from "react";

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
      <section className="w-96 max-w-96">
         <header className="flex gap-x-4 items-center">
            <img
               className="rounded-full w-20 h-20"
               src={avatar_url}
               alt="Avatar GitHub"
            />

            <div>
               <h3>{name}</h3>
               <h4>@{login}</h4>
               <h5>Conta Criada em: {created_at}</h5>
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
