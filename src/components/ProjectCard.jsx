import React from "react";
import SmallBtn from "./SmallBtn";

export default function ProjectCard() {
   return (
      <section className="bg-gray-800 hover:bg-gray-700 ease-in-out delay-150 p-4 rounded-lg flex justify-center items-center flex-col w-1/3 m-4 cursor-pointer">
         <div className="w-full p-2"></div>
         <div className="p-1">
            <h3 className="text-white font-semibold text-xl text-center pt-2 uppercase sm:text-lg">
               Task Hive
            </h3>
            <div className="w-full h-[2px] bg-blue-700 my-2 shadow-md shadow-blue-200"></div>
            <p className="text-gray-400 text-justify">
               Task Hive is a powerful task management tool that helps you stay on top of your to-do
               list. With its user-friendly interface, you can easily create and organize your
               tasks, and prioritize them based on their importance. To use Task Hive, simply sign
               up and log in to your account. You can access all your previous tasks and check them
               off as completed. Task Hive is built using the latest web technologies like Tailwind
               CSS, React JS, and Firebase, ensuring a fast and responsive experience.
            </p>
         </div>
         <div className="w-full h-[2px] bg-blue-700 my-2 shadow-md shadow-blue-200"></div>
         <div className="w-full flex justify-between items-center my-2">
            <SmallBtn value="Code" />
            <SmallBtn value="Live" />
         </div>
      </section>
   );
}
