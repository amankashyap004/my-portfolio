import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import ColorContainer from "./ColorContainer";

export default function ColorsPanel() {
   const [isDarkMode, setIsDarkMode] = useState(false);
   const [isColorsPanel, setIsColorsPanel] = useState(false);

   const handelDarkMode = () => {
      setIsDarkMode(!isDarkMode);
   };

   const handelColorsPanel = () => {
      setIsColorsPanel(!isColorsPanel);
   };

   return (
      <section className="flex justify-center items-center">
         <div
            className={`cursor-pointer mr-2 flex justify-center items-center transition-all
            ${isColorsPanel ? "translate-x-0" : "translate-x-[800%] sm:translate-x-[830%]"}`}
            onClick={handelColorsPanel}
         >
            <AiFillSetting className="text-blue-500 hover:text-blue-400 active:text-blue-600 text-3xl z-10 text-center transition-all duration-500 ease-in-out" />
         </div>
         <div
            className={`bg-gray-600 p-4 flex justify-center items-center rounded-bl-md transition-all
            ${isColorsPanel ? "translate-x-0" : "translate-x-full"}`}
         >
            <div
               className="flex justify-center items-center rounded-full p-4 w-3 h-3 border-2 cursor-pointer m-1 border-gray-300 hover:border-gray-400 active:shadow-lg transition-all duration-500 ease-in-out"
               onClick={handelDarkMode}
            >
               <div>
                  {isDarkMode ? <BsFillSunFill className="text-white" /> : <BsMoonStarsFill />}
               </div>
            </div>
            <ColorContainer />
         </div>
      </section>
   );
}
