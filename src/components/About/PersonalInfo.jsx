import React from "react";
import { FaUser } from "react-icons/fa";

export default function PersonalInfo() {
   return (
      <section className="grid grid-cols-3 gap-4 p-4">
         <section className="flex justify-center items-start px-4 py-3 my-2 cursor-pointer bg-blue-800 rounded-lg hover:bg-blue-700 transition-all duration-500 ease-in-out ">
            <div className="flex justify-start items-start flex-col">
               <p className="text-gray-400 font-extrabold text-base uppercase mb-2">Full Name</p>
               <p className="text-gray-200 font-medium uppercase">Aman Kumar Kashyap</p>
            </div>
            <div className="text-lg text-blue-500 hover:text-red-400 cursor-pointer ml-4">
               <FaUser />
            </div>
         </section>
      </section>
   );
}
