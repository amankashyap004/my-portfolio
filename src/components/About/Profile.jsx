import React from "react";
import { profileImage } from "../../assets/images/index";
import SocialMedia from "../SocialMedia";

export default function Profile() {
   return (
      <section className="p-4 w-full flex justify-center flex-col items-center">
         <div className="w-[200px] rounded sm:w-[300px]">
            <img src={profileImage} className="w-full rounded" />
         </div>
         <div className="mt-4 flex justify-center items-center flex-col">
            <h2 className="text-white text-2xl font-bold">AMAN KASHYAP</h2>
            <p className="text-gray-400 text-sm font-medium">Front-End Developer</p>
         </div>
         <SocialMedia />
      </section>
   );
}
