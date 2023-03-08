import React from "react";

export default function GameCard({ bgImg, heading, description }) {
   return (
      <section className="ease-in-out delay-150 rounded-lg w-1/4 m-4 cursor-pointer relative">
         <img src={bgImg} className="w-full rounded-lg opacity-75 hover:opacity-50" />
         <h3 className="absolute top-0 text-white text-base uppercase pt-2 pl-2 font-black z-10">
            {heading}
         </h3>
         <p className="absolute bottom-0 text-white text-sm font-extrabold p-2 z-10">
            {description}&nbsp;...
         </p>
      </section>
   );
}
