import React from "react";

export default function PersonalInfoCard({ title, name, icon }) {
   return (
      <section className="flex justify-between items-start px-4 py-3 my-2 cursor-pointer bg-blue-800 rounded-lg hover:bg-blue-700 transition-all duration-500 ease-in-out ">
         <div className="flex justify-start items-start flex-col">
            <p className="text-gray-400 font-extrabold text-base uppercase mb-2">{title}</p>
            <p className="text-gray-200 font-medium">{name}</p>
         </div>
         <div className="text-xl text-blue-500 hover:text-red-400 cursor-pointer ml-4">{icon}</div>
      </section>
   );
}
