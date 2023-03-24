import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Quote() {
   return (
      <main className="w-full flex justify-start items-start flex-col ">
         <div className="mt-7 border-b-2 border-blue-500 m-4">
            <h2 className="text-gray-900 dark:text-gray-100 font-bold text-2xl sm:text-xl">
               My favorite Quotes
            </h2>
         </div>
         <div className="w-full flex justify-center items-center mt-4">
            <section className="flex justify-between items-center w-3/4 h-80 bg-slate-800 rounded py-4 px-6">
               <MdArrowBackIos className="text-3xl cursor-pointer text-blue-500" />
               <div className="flex justify-center items-center flex-col w-[70%] h-full relative">
                  <FaQuoteLeft className="font-extrabold text-3xl text-blue-700 top-0 absolute" />
                  <h3 className="text-center text-xl">
                     When we do the best we can, we never know what miracle is wrought in our life
                     or the life of another.
                  </h3>
                  <h2 className="font-bold text-2xl text-right w-full text-gray-300 mt-1">
                     — Helen Keller
                  </h2>
               </div>
               <MdArrowForwardIos className="text-3xl cursor-pointer text-blue-500" />
            </section>
         </div>
      </main>
   );
}
