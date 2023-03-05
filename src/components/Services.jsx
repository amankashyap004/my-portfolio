import React from "react";

export default function Services() {
   return (
      <section className="flex justify-center items-center flex-col m-4">
         <div className="m-4">
            <h2 className="text-white font-bold text-2xl">Our Services</h2>
         </div>
         <div className="w-full p-4">
            <section className="bg-gray-700 p-4 rounded-lg flex justify-center items-center flex-col w-1/4">
               <div className="w-[300px] h-[150px] bg-black"></div>
               <div className="py-4">
                  <h3 className="text-white font-semibold text-xl text-center pt-2">
                     Web Development
                  </h3>
                  <div className="w-full h-[2px] bg-blue-700 my-2 shadow-md shadow-blue-200"></div>
                  <p className="text-gray-400 text-justify">
                     "Hey there, As a web developer I specialize in creating beautiful and
                     functional websites that not only look great but also help businesses grow. I'd
                     love to chat with you about how I can help take your website to the next level.
                     How about we grab a coffee and discuss your web development needs?"
                  </p>
               </div>
            </section>
         </div>
      </section>
   );
}
