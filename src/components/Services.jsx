import React from "react";
import { webImg } from "../assets/images";
import ServicesCard from "./ServicesCard";

export default function Services() {
   return (
      <section className="flex justify-center items-center flex-col m-4">
         <div className="mt-8">
            <h2 className="text-white font-bold text-2xl uppercase">Our Services</h2>
         </div>
         <div className="w-full p-4 flex justify-center items-center">
            <ServicesCard />
         </div>
      </section>
   );
}
