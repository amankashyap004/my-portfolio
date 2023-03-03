import React from "react";

export default function Contact() {
   return (
      <section className="flex justify-center items-start m-4">
         <div className="px-4 py-8 flex justify-center items-center flex-col">
            <section className="flex justify-center items-center flex-col my-2">
               <h2 className="text-white font-bold text-3xl mb-2">Contact</h2>
               <p className="text-gray-500 text-sm">
                  We'd love to hear from you! Send us a message and let's make something amazing
                  together.
               </p>
            </section>
         </div>
      </section>
   );
}
