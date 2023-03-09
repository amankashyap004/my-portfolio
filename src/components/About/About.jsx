import React from "react";
import Introduction from "./Introduction";
import Profile from "./Profile";
import Heading from "./Heading";

export default function About() {
   return (
      <section className="flex justify-center items-start m-4 relative">
         <aside className="flex justify-center items-start w-[18%] h-full fixed top-16 left-4 border-r-2 border-slate-700">
            <div className="mt-6">
               <Profile />
            </div>
         </aside>
         <section className="w-[82%] absolute left-[18%] p-4">
            <div className="flex justify-start items-start flex-col">
               <Heading heading="About me" />
               <Introduction />
            </div>
            {/* personal information */}
            {/* education */}
            {/* skills */}
         </section>
      </section>
   );
}
