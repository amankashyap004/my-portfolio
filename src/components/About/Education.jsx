import React from "react";

export default function Education() {
   return (
      <section className="w-full flex justify-start items-start flex-col py-4">
         <section className="w-full p-4 border-2 border-bg-gray-400 rounded-lg">
            <div className="flex justify-between items-center">
               <h3 className="font-bold text-lg text-white">
                  CHHATTISGARH SWAMI VIVEKANAND TECHNICAL UNIVERSITY
               </h3>
               <samp className="font-bold text-base text-gray-500 italic">
                  BHILAI, CHHATTISGARH
               </samp>
            </div>
            <div className="flex justify-between items-center">
               <h3 className="font-semibold text-base text-gray-400">Bachelor of Engineering in</h3>
               <samp className="font-bold text-base text-gray-500 italic">Jul 2015 - May 2019</samp>
            </div>
            <div className="flex justify-between items-center">
               <h3 className="font-semibold text-base text-gray-500">
                  Electronic and Telecommunication
               </h3>
            </div>
         </section>
      </section>
   );
}
