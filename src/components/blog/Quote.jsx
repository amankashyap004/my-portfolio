import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { quotes } from "./QuotesData";

export default function Quote() {
   const [quote, setQuote] = useState({});

   const handleClick = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const output = quotes[randomIndex];
      const [outputQuote, outputAuthor] = output.split("—").map((str) => str.trim());

      setQuote({
         quote: outputQuote,
         author: outputAuthor,
      });
   };

   return (
      <main className="w-full flex justify-start items-start flex-col ">
         <div className="mt-7 border-b-2 border-blue-500 m-4">
            <h2 className="text-gray-900 dark:text-gray-100 font-bold text-2xl sm:text-xl">
               My favorite Quotes
            </h2>
         </div>
         <div className="w-full flex justify-center items-center mt-4">
            <section className="flex justify-between items-center w-3/4 h-80 bg-slate-800 rounded py-4 px-6">
               <MdArrowBackIos
                  className="text-3xl cursor-pointer text-blue-500 hover:text-blue-600 active:text-blue-800 transition-all duration-500 ease-in-out"
                  onClick={handleClick}
               />
               <div className="flex justify-center items-center flex-col w-[70%] h-full relative">
                  <FaQuoteLeft className="font-extrabold text-3xl text-blue-700 top-0 absolute" />
                  <h3 className="text-center text-xl">
                     {quote.quote
                        ? quote.quote
                        : "When we do the best we can, we never know what miracle is wrought in our life or the life of another."}
                  </h3>
                  <h2 className="font-bold text-2xl text-right w-full text-gray-300 mt-1">
                     — {quote.author ? quote.author : "Helen Keller"}
                  </h2>
               </div>
               <MdArrowForwardIos
                  className="text-3xl cursor-pointer text-blue-500 hover:text-blue-600 active:text-blue-800 transition-all duration-500 ease-in-out"
                  onClick={handleClick}
               />
            </section>
         </div>
      </main>
   );
}
