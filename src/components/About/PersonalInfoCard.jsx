import React from "react";

export default function PersonalInfoCard({ title, name, icon }) {
   return (
      <section className="flex justify-between items-start px-4 py-3 cursor-pointer bg-blue-300 dark:bg-blue-800 hover:bg-blue-400 dark:hover:bg-blue-700 rounded-lg transition-all duration-500 ease-in-out md:px-2 sm:w-full sm:px-4">
         <div className="flex justify-start items-start flex-col">
            <p className="text-gray-600 dark:text-gray-400 font-extrabold text-base uppercase mb-2">
               {title}
            </p>
            <p className="text-gray-900 dark:text-gray-200 font-medium">{name}</p>
         </div>
         <div className="text-xl text-blue-500 hover:text-red-400 cursor-pointer ml-4 sm:text-lg">
            {icon}
         </div>
      </section>
   );
}
