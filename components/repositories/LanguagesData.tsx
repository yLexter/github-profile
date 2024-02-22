import { ILanguagesRepositoryResponse, utils } from "@/types";
import React from "react";
import { twJoin, twMerge } from "tailwind-merge";

type IPropLanguagesData = {
   dataLanguage?: ILanguagesRepositoryResponse;
};

const example: ILanguagesRepositoryResponse = {
   Java: 377101,
   Python: 91129,
   C: 79103,
   JavaScript: 4754,
   CSS: 2445,
   HTML: 352,
};

const caulculateData = (data: ILanguagesRepositoryResponse) => {
   const total = Object.values(data).reduce((acc, value) => acc + value);

   return Object.entries(data).map(([language, value]) => {
      return {
         language: language,
         percentage: Number(((value / total) * 100).toFixed(2)),
         color: utils.getAboutLanguage(language).color,
      };
   });
};

export default function LanguagesData({}: IPropLanguagesData) {
   const data = caulculateData(example);

   return (
      <>
         <div className="w-full h-2 mb-4">
            {data.map(({ language, percentage, color }, i) => {
               return (
                  <span
                     className={`${i === 0 ? "rounded-l-lg" : ""} ${
                        i === data.length - 1 ? "rounded-r-lg" : ""
                     }`}
                     style={{
                        display: "inline-block",
                        height: "100%",
                        width: `${percentage}%`,
                        backgroundColor: color,
                     }}
                     key={`Data-${language}-${percentage}`}
                  ></span>
               );
            })}
         </div>

         <div className="flex flex-wrap items-center justify-between  gap-x-2 text-xs">
            {data.map(({ language, percentage, color }) => {
               return (
                  <p key={`Data-${language}-${percentage}`}>
                     <span
                        className={twMerge(
                           "relative",
                           "before:content-[''] before:absolute",
                           "before:h-2 before:w-2 before:top-[25%] before:left-[-10px]",
                           `before:bg-[${color}] before:rounded-full`
                        )}
                     >
                        {language}
                     </span>{" "}
                     <span className="text-muted-foreground">
                        {percentage}%
                     </span>
                  </p>
               );
            })}
         </div>
      </>
   );
}
