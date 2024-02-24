import SearchBar from "@/components/SearchBar";
import Header from "@/components/header/Header";
import UserInfo from "@/components/profile/UserInfo";
import Repositories from "@/components/repositories/Repositories";

export default function Home() {
   return (
      <main className="mt-10 flex flex-col gap-y-8 h-auto w-full max-w-[600px] p-4">
         <Header />
         <SearchBar />
         <UserInfo />
         <Repositories />
      </main>
   );
}
