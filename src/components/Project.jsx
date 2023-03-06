import React from "react";
import ProjectCard from "./ProjectCard";

export default function Project() {
   return (
      <section className="flex justify-center items-center flex-col m-4">
         <div className="mt-7 sm:mt-4">
            <h2 className="text-white font-bold text-2xl uppercase sm:text-xl">My Works</h2>
         </div>
         <div className="w-full">
            <ProjectCard />
         </div>
      </section>
   );
}
