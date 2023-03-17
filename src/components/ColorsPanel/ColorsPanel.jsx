import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import ColorContainer from "./ColorContainer";

export default function ColorsPanel() {
   const [isColorsPanel, setIsColorsPanel] = useState(false);

   const handelColorsPanel = () => {
      setIsColorsPanel(!isColorsPanel);
   };

   return (
      <section className="flex justify-center items-center">
         <div
            className={`cursor-pointer mr-2 flex justify-center items-center transition-all
            ${isColorsPanel ? "translate-x-0" : "translate-x-[680%] sm:translate-x-[700%]"}`}
            onClick={handelColorsPanel}
         >
            <AiFillSetting className="text-blue-500 hover:text-blue-400 active:text-blue-600 text-3xl z-10 text-center transition-all duration-500 ease-in-out" />
         </div>
         <div
            className={`bg-gray-400 dark:bg-gray-600 p-4 flex justify-center items-center rounded-bl-md transition-all
            ${isColorsPanel ? "translate-x-0" : "translate-x-full"}`}
         >
            <ColorContainer />
         </div>
      </section>
   );
}
