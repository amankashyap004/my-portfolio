import React from "react";

export default function SmallBtn({ value }) {
   return (
      <button
         className={`flex items-center justify-center px-4 py-3 mr-4 bg-blue-600 text-white font-medium text-base leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition-all duration-500 ease-in-out md:px-3 md:py-2`}
      >
         {value}
      </button>
   );
}
