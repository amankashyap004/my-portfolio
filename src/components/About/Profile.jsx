import React from "react";
import { profileImage } from "../../assets/images/index";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Profile() {
   return (
      <section className="p-4 w-full flex justify-center flex-col items-center">
         <div className="w-[200px] rounded md:w-[180px] sm:w-[200px]">
            <img src={profileImage} className="w-full rounded" />
         </div>
         <div className="mt-4 flex justify-center items-center flex-col sm:mt-2">
            <h2 className="text-gray-900 dark:text-gray-100 text-2xl font-bold md:text-xl">
               AMAN KASHYAP
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
               Front-End Developer
            </p>
         </div>
         <SocialMedia />
      </section>
   );
}
