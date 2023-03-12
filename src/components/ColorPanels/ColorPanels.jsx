import React from "react";

export default function ColorPanel() {
   return (
      <section className="flex justify-center items-center">
         <div className="rounded-full p-4 w-3 h-3 border-2 border-gray-100 cursor-pointer m-1"></div>
         <div className="bg-gray-500 p-4 flex justify-center items-center rounded-bl-md">
            <div className="rounded-full p-4 w-3 h-3 border-2 border-gray-100 cursor-pointer m-1"></div>
            <div className="bg-blue-500 rounded-full p-4 w-3 h-3 border-2 border-gray-100 cursor-pointer m-1"></div>
            <div className="bg-red-500 rounded-full p-4 w-3 h-3 border-2 border-gray-100 cursor-pointer m-1"></div>
            <div className="bg-green-500 rounded-full p-4 w-3 h-3 border-2 border-gray-100 cursor-pointer m-1"></div>
            <div className="bg-orange-500 rounded-full p-4 w-3 h-3 border-2 border-gray-100 cursor-pointer m-1"></div>
         </div>
      </section>
   );
}
