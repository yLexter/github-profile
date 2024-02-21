import SearchBar from "@/components/SearchBar";
import Header from "@/components/header/Header";
import UserInfo from "@/components/profile/UserInfo";

export default function Home() {
   const usuarioGitHub = {
      login: "yLexter",
      id: 94728279,
      node_id: "U_kgDOBaVwVw",
      avatar_url: "https://avatars.githubusercontent.com/u/94728279?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yLexter",
      html_url: "https://github.com/yLexter",
      followers_url: "https://api.github.com/users/yLexter/followers",
      following_url:
         "https://api.github.com/users/yLexter/following{/other_user}",
      gists_url: "https://api.github.com/users/yLexter/gists{/gist_id}",
      starred_url:
         "https://api.github.com/users/yLexter/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/yLexter/subscriptions",
      organizations_url: "https://api.github.com/users/yLexter/orgs",
      repos_url: "https://api.github.com/users/yLexter/repos",
      events_url: "https://api.github.com/users/yLexter/events{/privacy}",
      received_events_url:
         "https://api.github.com/users/yLexter/received_events",
      type: "User",
      site_admin: false,
      name: "Lucas Ferreira",
      company: null,
      blog: "",
      location: "Campina Grande - PB",
      email: null,
      hireable: null,
      bio: "Desenvolvedor Web e Estudante do Curso de Ciencias da Computação da UEPB",
      twitter_username: "yLexter1",
      public_repos: 9,
      public_gists: 0,
      followers: 6,
      following: 6,
      created_at: "2021-11-20T02:52:27Z",
      updated_at: "2024-01-19T00:17:11Z",
   };

   return (
      <main className="w-full max-w-[500px] p-4">
         <Header />

         <SearchBar />

         <UserInfo userInfo={usuarioGitHub} />
      </main>
   );
}
