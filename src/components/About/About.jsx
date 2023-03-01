import React from "react";
import Introduction from "./Introduction";
import Profile from "./Profile";

export default function About() {
   return (
      <section className="flex justify-center items-start m-4">
         <div className="flex justify-center items-center flex-col w-[20%] p-4">
            <Profile />
         </div>
         <div className="h-[100vh] w-[1.5px] bg-gray-500"></div>
         <div className="flex justify-between items-center w-[80%]">
            <Introduction />
         </div>
         {/* personal information */}
         {/* education */}
         {/* skills */}
      </section>
   );
}
