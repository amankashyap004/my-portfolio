import React from "react";
import Introduction from "./Introduction";
import Profile from "./Profile";

export default function About() {
   return (
      <section className="flex justify-center items-start m-4">
         <div className="flex justify-center items-center flex-col w-[20%] p-4">
            <Profile />
         </div>
         <div className="flex justify-between items-center w-[80%] p-4">
            <Introduction />
         </div>
         {/* personal information */}
         {/* education */}
         {/* skills */}
      </section>
   );
}
