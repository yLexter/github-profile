import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type IPropSocialUser = {
   Icon: IconType;
   label?: string | null;
   link?: string | null;
   className?: string;
};

export default function SocialUser({
   label,
   Icon,
   link,
   className,
}: IPropSocialUser) {
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
}
