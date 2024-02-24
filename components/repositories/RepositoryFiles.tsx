import {
   IRepositoryFile,
   IRepositoryResponse,
   IUserInfoResponse,
   TRepository,
   utils,
} from "@/types";
import React from "react";
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaCodeBranch, FaFile } from "react-icons/fa";
import { MdBrowserUpdated, MdOutlineVisibility } from "react-icons/md";

type IPropRepositoryFiles = {
   repository: TRepository;
   profile: IUserInfoResponse;
};

export default function RepositoryFiles({
   repository,
   profile,
}: IPropRepositoryFiles) {
   return (
      <Table className="mb-4 w-full">
         <TableBody>
            <TableRow>
               <TableCell className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                     <img
                        className="w-6 h-6 rounded-full"
                        src={profile.avatar_url}
                        alt="Avatar URL"
                     />
                     <a
                        className="hover:text-blue-500 hover:underline"
                        href={profile.html_url}
                     >
                        {profile.login}
                     </a>
                  </div>

                  <div className="flex items-center gap-x-2">
                     <FaCodeBranch />
                     {repository.default_branch}
                  </div>

                  <div className="flex items-center gap-x-2">
                     <MdBrowserUpdated />
                     {utils.formatDate(repository.updated_at)}
                  </div>

                  <div className="flex items-center gap-x-2">
                     <MdOutlineVisibility />
                     {repository.visibility}
                  </div>
               </TableCell>
            </TableRow>

            {repository.files
               .sort((a, b) => a.name.localeCompare(b.name))
               .map((file, i) => {
                  return (
                     <TableRow key={`${file.name}-${i}`}>
                        <TableCell className="font-medium flex items-center gap-x-2">
                           {file.type === "file" ? (
                              <FaFile />
                           ) : (
                              <GoFileDirectoryFill />
                           )}

                           <a
                              className="hover:text-blue-500 hover:underline"
                              href={file.html_url}
                           >
                              {file.name}
                           </a>
                        </TableCell>
                     </TableRow>
                  );
               })}
         </TableBody>
      </Table>
   );
}
