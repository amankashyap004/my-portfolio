import React from "react";
import ExtraSmallBtn from "./ExtraSmallBtn";

export default function ProjectCard({ image, heading, description }) {
   return (
      <section className="bg-gray-800 hover:bg-gray-700 ease-in-out delay-150 p-4 rounded-lg flex justify-center items-center flex-col w-1/3 m-4 cursor-pointer">
         <div className="w-full p-2">
            <img src={image} className="w-full" />
         </div>
         <div className="p-1">
            <h3 className="text-white font-semibold text-xl text-center pt-2 uppercase sm:text-lg">
               {heading}
            </h3>
            <div className="w-full h-[2px] bg-blue-700 my-2 shadow-md shadow-blue-200"></div>
            <p className="text-gray-400 text-justify">{description}</p>
         </div>
         <div className="w-full flex justify-between items-center my-2">
            <ExtraSmallBtn value="Code" />
            <ExtraSmallBtn value="Live" />
         </div>
      </section>
   );
}