import { TLanguage } from ".";

class Utils {
   public readonly languageAbout;
   private static instance: Utils | null;

   constructor() {
      this.languageAbout = {
         typescript: {
            color: "#3178C6",
         },
         javascript: {
            color: "#F7DF1E",
         },
         python: {
            color: "#3572A5",
         },
         java: {
            color: "#B07219",
         },
         csharp: {
            color: "#178600",
         },
         php: {
            color: "#4F5D95",
         },
         cplusplus: {
            color: "#F34B7D",
         },
         c: {
            color: "#555555",
         },
         ruby: {
            color: "#CC342D",
         },
         go: {
            color: "#00ADD8",
         },
         swift: {
            color: "#FFAC45",
         },
         kotlin: {
            color: "#F18E33",
         },
         rust: {
            color: "#DEA584",
         },
         scala: {
            color: "#DC322F",
         },
         perl: {
            color: "#0298C3",
         },
         lua: {
            color: "#000080",
         },
         r: {
            color: "#276DC3",
         },
         matlab: {
            color: "#0076A8",
         },
         sql: {
            color: "#000000",
         },
         html: {
            color: "#E44D26",
         },
         css: {
            color: "#264DE4",
         },
         shell: {
            color: "#89E051",
         },
         dart: {
            color: "#00B4AB",
         },
         julia: {
            color: "#A270BA",
         },
      };
   }

   getAboutLanguage(language: string) {
      const aboutLanague =
         this.languageAbout[language.toLowerCase() as TLanguage];

      if (!aboutLanague) {
         return {
            color: "#993399",
         };
      }

      return aboutLanague;
   }

   formatDate(data: string) {
      const dataObj = new Date(data);
      const dia = String(dataObj.getDate()).padStart(2, "0");
      const mes = String(dataObj.getMonth() + 1).padStart(2, "0");
      const ano = dataObj.getFullYear();

      return `${dia}/${mes}/${ano}`;
   }

   static getInstance() {
      if (!this.instance) {
         this.instance = new Utils();
      }
      return this.instance;
   }
}

export const utils = Utils.getInstance();
