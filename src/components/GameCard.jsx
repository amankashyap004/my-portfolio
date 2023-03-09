import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({ bgImg, heading, description, link }) {
   return (
      <Link to={link ? link : "/"}>
         <section className="ease-in-out delay-150 rounded-lg w-[330px] m-4 cursor-pointer relative sm:mx-0 sm:my-2 sm:px-2 sm:w-full">
            <img src={bgImg} className="w-full rounded-lg opacity-75 hover:opacity-50" />
            <h3 className="absolute top-0 text-white text-base uppercase pt-2 pl-2 font-black z-10 sm:text-sm">
               {heading}
            </h3>
            <p className="absolute bottom-0 text-white text-sm font-extrabold p-2 z-10">
               {description}&nbsp;...
            </p>
         </section>
      </Link>
   );
}
