import React from "react";

export default function Quote() {
   return (
      <main className="w-full flex justify-start items-start flex-col ">
         <div className="mt-7 border-b-2 border-blue-500 m-4">
            <h2 className="text-gray-900 dark:text-gray-100 font-bold text-2xl sm:text-xl">
               My favorite Quotes
            </h2>
         </div>
         <div className="w-full flex justify-center items-center mt-4">
            <section className="flex justify-center items-center w-3/4 h-80 bg-slate-800 rounded p-4">
               <div className="flex justify-center items-center flex-col w-1/2">
                  <h3 className="text-center text-xl">
                     <span className="font-extrabold text-2xl text-blue-500">"</span>When we do the
                     best we can, we never know what miracle is wrought in our life or the life of
                     another.
                     <span className="font-extrabold text-2xl text-blue-500">"</span>
                  </h3>
                  <h2 className="font-bold text-2xl text-right w-full text-gray-300 mt-1">
                     — Helen Keller
                  </h2>
               </div>
            </section>
         </div>
      </main>
   );
}
