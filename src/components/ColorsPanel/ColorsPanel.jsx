import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import ColorContainer from "./ColorContainer";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function ColorsPanel() {
   const [isColorsPanel, setIsColorsPanel] = useState(false);
   const handelColorsPanel = () => {
      setIsColorsPanel(!isColorsPanel);
   };

   const [isDarkMode, setIsDarkMode] = useState(true);
   const [isDarkClass, setIsDarkClass] = useState(true);

   if (isDarkClass) {
      document.body.classList.add("dark");
   }

   const handelDarkMode = () => {
      setIsDarkClass(false);
      setIsDarkMode(!isDarkMode);
      if (isDarkMode) {
         document.body.classList.remove("dark");
      } else {
         document.body.classList.add("dark");
      }
   };

   return (
      <section className="flex justify-center items-center">
         <div
            className={`cursor-pointer mr-2 flex justify-center items-center transition-all
            ${isColorsPanel ? "translate-x-0" : "translate-x-[800%] sm:translate-x-[810%]"}`}
            onClick={handelColorsPanel}
         >
            <AiFillSetting className="text-blue-500 hover:text-blue-400 active:text-blue-600 text-3xl z-10 text-center transition-all duration-500 ease-in-out" />
         </div>
         <div
            className={`bg-gray-400 dark:bg-gray-600 p-4 flex justify-center items-center rounded-bl-md transition-all sm:py-3
            ${isColorsPanel ? "translate-x-0" : "translate-x-full"}`}
         >
            <div
               className="flex justify-center items-center rounded-full p-4 w-3 h-3 border-2 cursor-pointer border-gray-500 dark:border-gray-300 hover:border-gray-600 dark:hover:border-gray-400 active:shadow-lg transition-all duration-500 ease-in-out"
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
