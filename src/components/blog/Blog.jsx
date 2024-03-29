import React from "react";
import Quote from "./Quote";

export default function Blog() {
   return (
      <section className="flex justify-center items-center flex-col m-4">
         <div className="mt-7">
            <h2 className="text-gray-900 dark:text-gray-100 font-bold text-2xl uppercase sm:text-xl">
               Blog
            </h2>
         </div>
         <div className="flex justify-center items-center w-full">
            <Quote />
         </div>
      </section>
   );
}
