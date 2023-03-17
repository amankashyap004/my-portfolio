import React from "react";
import SmallBtn from "./SmallBtn";
import { profileImage } from "../assets/images";
import { TypeAnimation } from "react-type-animation";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";

export default function Home() {
   return (
      <section className="flex justify-center items-center p-4 w-full mt-8 sm:flex-col sm:mt-4">
         <section className="mr-4 text-gray-900 dark:text-gray-100 w-[40%] p-8 md:w-1/2 md:p-4 sm:w-full">
            <h1 className="font-bold text-3xl">
               Hello, my name is <span className="text-blue-500">Aman Kashyap</span>
            </h1>
            <div className="font-bold text-2xl text-blue-900 dark:text-blue-300 my-6">
               <TypeAnimation
                  sequence={[
                     "I'm an Engineer",
                     1000,
                     "I'm a Web Developer",
                     1000,
                     "I'm a Learner",
                     1000,
                  ]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
               />
            </div>
            <p className="text-base">
               On this site, you'll find examples of my work, information about me, and ways to
               contact me. Take a look around and let me know if you have any questions or would
               like to work together!{" "}
               <Link to="/about">
                  <span className="text-blue-700 dark:text-blue-500 hover:text-blue-900 dark:hover:text-blue-400 hover:underline font-semibold transition-all duration-500 ease-in-out">
                     more
                  </span>
               </Link>
            </p>
            <div className="flex justify-start items-start mt-2">
               <SocialMedia />
            </div>
            <div className="mt-4 flex justify-start items-center sm:mt-2">
               <SmallBtn value="Download CV" />
               <Link to="/contact">
                  <SmallBtn value="Hire Me!" />
               </Link>
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
