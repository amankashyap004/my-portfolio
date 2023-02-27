import React from "react";

export default function NavigationContent({ textValue }) {
   return (
      <div className="mx-2 cursor-pointer">
         <samp className="font-semibold text-lg uppercase text-gray-100 hover:text-blue-200">
            {textValue}
         </samp>
      </div>
   );
}
