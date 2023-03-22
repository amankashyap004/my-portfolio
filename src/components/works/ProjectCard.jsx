import React from "react";
import ExtraSmallBtn from "../ExtraSmallBtn";
import { Link } from "react-router-dom";

export default function ProjectCard({ image, heading, description, codeLink, liveLink }) {
   return (
      <section className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 ease-in-out delay-150 rounded-lg flex justify-center items-center flex-col w-1/3 m-4 cursor-pointer md:w-[350px] md:mx-2 sm:mx-0 sm:w-full">
         <div className="w-full rounded-t-lg">
            <img src={image} className="w-full rounded-t-lg" />
         </div>
         <div className="px-4 py-2">
            <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-xl text-center pt-2 uppercase sm:text-lg">
               {heading}
            </h3>
            <div className="w-full h-[2px] bg-blue-700 my-2 shadow-md shadow-blue-500 dark:shadow-blue-200"></div>
            <p className="text-gray-700 dark:text-gray-400 text-justify">{description}</p>
            <div className="w-full flex justify-between items-center my-2">
               <Link to={codeLink ? codeLink : "/"}>
                  <ExtraSmallBtn value="Code" />
               </Link>
               <Link to={liveLink ? liveLink : "/"}>
                  <ExtraSmallBtn value="Live" />
               </Link>
            </div>
         </div>
      </section>
   );
}
