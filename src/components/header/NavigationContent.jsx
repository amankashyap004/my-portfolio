import React from "react";

export default function NavigationContent({ textValue }) {
   return (
      <div className="mx-2 cursor-pointer sm:m-1">
         <samp className="font-semibold text-lg uppercase text-gray-100 hover:text-blue-400 transition-all duration-500 ease-in-out md:text-base">
            {textValue}
         </samp>
      </div>
   );
}
