import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function ColorPanel() {
   return (
      <section className="flex justify-center items-center">
         <div className="cursor-pointer mr-2 flex justify-center items-center">
            <AiFillSetting className="text-white text-3xl z-10 text-center" />
         </div>
         <div className="bg-gray-500 p-4 flex justify-center items-center rounded-bl-md">
            <div className="flex justify-center items-center rounded-full p-4 w-3 h-3 border-2 border-gray-100 cursor-pointer m-1">
               <div>
                  <BsFillSunFill />
               </div>
            </div>
            <div className="bg-blue-500 rounded-full p-4 w-3 h-3 border-2 border-gray-100 cursor-pointer m-1"></div>
            <div className="bg-red-500 rounded-full p-4 w-3 h-3 border-2 border-gray-100 cursor-pointer m-1"></div>
            <div className="bg-green-500 rounded-full p-4 w-3 h-3 border-2 border-gray-100 cursor-pointer m-1"></div>
            <div className="bg-orange-500 rounded-full p-4 w-3 h-3 border-2 border-gray-100 cursor-pointer m-1"></div>
         </div>
      </section>
   );
}
