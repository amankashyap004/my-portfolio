import React from "react";
import Introduction from "./Introduction";
import Profile from "./Profile";
import Heading from "./Heading";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";

export default function About() {
   return (
      <section className="flex justify-center items-start m-4 relative sm:flex-col sm:m-0">
         <aside className="flex justify-center items-start w-[18%] h-full fixed top-16 left-4 border-r-2 border-slate-700 md:left-0 md:w-[25%] sm:static sm:w-full sm:border-r-0 sm:border-b-2 ">
            <div className="mt-6 sm:mt-2">
               <Profile />
            </div>
         </aside>
         <section className="w-[82%] absolute left-[18%] p-4 md:w-[75%] md:left-[25%] sm:static sm:w-full">
            <div className="flex justify-start items-start flex-col">
               <Heading heading="About me" />
               <Introduction />
            </div>
            <div className="flex justify-start items-start flex-col mt-4">
               <Heading heading="Personal Information" />
               <PersonalInfo />
            </div>
            <div className="flex justify-start items-start flex-col">
               <Heading heading="Education" />
            </div>
            <div className="flex justify-start items-start flex-col mt-4">
               <Heading heading="Skills" />
               <Skills />
            </div>
         </section>
      </section>
   );
}
