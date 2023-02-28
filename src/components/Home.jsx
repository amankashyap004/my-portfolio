import React from "react";
import SmallBtn from "./SmallBtn";
import { profileImage } from "../assets/images";

export default function Home() {
   return (
      <section className="flex justify-center items-center p-4 w-full mt-8 sm:flex-col sm:mt-4">
         <section className="mr-4 text-white w-[40%] p-8 md:w-1/2 md:p-4 sm:w-full">
            <h1 className="font-bold text-2xl">
               Hello, my name is <span className="text-blue-500">Aman Kashyap</span>
            </h1>
            <h3 className="font-bold text-xl my-4">
               I' m a <span className="text-blue-500">Web Developer</span>
            </h3>
            <p className="text-base">
               On this site, you'll find examples of my work, information about me, and ways to
               contact me. Take a look around and let me know if you have any questions or would
               like to work together!
            </p>
            <div className="mt-8 flex justify-start items-center sm:mt-5">
               <SmallBtn value="Download CV" />
               <SmallBtn value="Hire Me!" />
            </div>
         </section>
         <section className="p-4 w-[40%] flex justify-center items-center md:w-1/2 sm:w-full sm:mt-4">
            <div className="w-[250px] rounded sm:w-[350px]">
               <img src={profileImage} className="w-full rounded" />
            </div>
         </section>
      </section>
   );
}
