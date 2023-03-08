import React from "react";
import { demoImg } from "../assets/images";

export default function GameCard() {
   return (
      <section className="ease-in-out delay-150 rounded-lg w-[330px] m-4 cursor-pointer relative">
         <img src={demoImg} className="w-full rounded-lg opacity-75 hover:opacity-50" />
         <h3 className="absolute top-0 text-white text-base uppercase pt-2 pl-2 font-black z-10">
            New game
         </h3>
         <p className="absolute bottom-0 text-white font-extrabold p-2 z-10">
            A game is an activity or sport usually involving skill, knowledge, or chance, ...
         </p>
      </section>
   );
}
