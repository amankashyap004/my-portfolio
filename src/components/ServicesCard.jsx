import React from "react";
import { webImg } from "../assets/images";

export default function ServicesCard() {
   return (
      <section className="bg-gray-800 hover:bg-gray-700 ease-in-out delay-150 p-4 rounded-lg flex justify-center items-center flex-col w-1/4 m-4 cursor-pointer">
         <div className="w-[300px] p-2">
            <img src={webImg} className="w-full" />
         </div>
         <div className="p-1">
            <h3 className="text-white font-semibold text-xl text-center pt-2 uppercase">
               Web Development
            </h3>
            <div className="w-full h-[2px] bg-blue-700 my-2 shadow-md shadow-blue-200"></div>
            <p className="text-gray-400 text-justify">
               "Hey there, As a web developer I specialize in creating beautiful and functional
               websites that not only look great but also help businesses grow. I'd love to chat
               with you about how I can help take your website to the next level. How about we grab
               a coffee and discuss your web development needs?"
            </p>
         </div>
      </section>
   );
}
