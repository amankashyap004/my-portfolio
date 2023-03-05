import React from "react";
import { webImg } from "../assets/images";
import ServicesCard from "./ServicesCard";

export default function Services() {
   return (
      <section className="flex justify-center items-center flex-col m-4">
         <div className="mt-8">
            <h2 className="text-white font-bold text-2xl uppercase">Our Services</h2>
         </div>
         <div className="w-full p-4 flex justify-center items-start">
            <ServicesCard
               image={webImg}
               heading="Web Development"
               description="Hey there, As a web developer I specialize in creating beautiful and functional
               websites that not only look great but also help businesses grow. I'd love to chat
               with you about how I can help take your website to the next level. How about we grab
               a coffee and discuss your web development needs?"
            />
            <ServicesCard image={webImg} heading="Project" description="" />
            <ServicesCard image={webImg} heading="freelancing" description="" />
            <ServicesCard image={webImg} heading="post for social media" description="" />
         </div>
      </section>
   );
}
