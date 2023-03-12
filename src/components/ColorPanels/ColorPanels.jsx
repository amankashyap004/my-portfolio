import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function ColorPanel() {
   const [isDarkMode, setIsDarkMode] = useState(false);
   const handelDarkMode = () => {
      setIsDarkMode(!isDarkMode);
   };

   return (
      <section className="flex justify-center items-center">
         <div className="cursor-pointer mr-2 flex justify-center items-center ">
            <AiFillSetting className="text-blue-500 hover:text-blue-400 active:text-blue-600 text-3xl z-10 text-center transition-all duration-500 ease-in-out" />
         </div>
         <div className="bg-gray-600 p-4 flex justify-center items-center rounded-bl-md">
            <div
               className="flex justify-center items-center rounded-full p-4 w-3 h-3 border-2 cursor-pointer m-1 border-gray-300 hover:border-gray-400 active:shadow-lg transition-all duration-500 ease-in-out"
               onClick={handelDarkMode}
            >
               <div>
                  {isDarkMode ? <BsFillSunFill className="text-white" /> : <BsMoonStarsFill />}
               </div>
            </div>
            <div className="bg-blue-500 active:bg-blue-600 active:shadow-lg rounded-full p-4 w-3 h-3 border-2 border-gray-300 hover:border-gray-400 cursor-pointer m-1 transition-all duration-500 ease-in-out "></div>
            <div className="bg-red-500 active:bg-red-600 active:shadow-lg rounded-full p-4 w-3 h-3 border-2 border-gray-300 hover:border-gray-400 cursor-pointer m-1 transition-all duration-500 ease-in-out "></div>
            <div className="bg-green-500 active:bg-green-600 active:shadow-lg rounded-full p-4 w-3 h-3 border-2 border-gray-300 hover:border-gray-400 cursor-pointer m-1 transition-all duration-500 ease-in-out "></div>
            <div className="bg-orange-500 active:bg-orange-600 active:shadow-lg rounded-full p-4 w-3 h-3 border-2 border-gray-300 hover:border-gray-400 cursor-pointer m-1 transition-all duration-500 ease-in-out "></div>
         </div>
      </section>
   );
}
