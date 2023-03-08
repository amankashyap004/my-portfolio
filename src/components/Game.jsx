import React from "react";
import { demoImg } from "../assets/images";

export default function Game() {
   return (
      <section className="flex justify-center items-center flex-col m-4">
         <div className="mt-7">
            <h2 className="text-white font-bold text-2xl uppercase">Game</h2>
         </div>
         <div className="w-full flex justify-center items-start">
            <section className="ease-in-out delay-150 rounded-lg w-1/4 m-4 cursor-pointer relative">
               <img src={demoImg} className="w-full rounded-lg opacity-75 hover:opacity-50" />
               <h3 className="absolute top-0 text-white text-base uppercase pt-2 pl-2 font-black z-10">
                  New game
               </h3>
               <p className="absolute bottom-0 text-white p-2 z-10">
                  A game is an activity or sport usually involving skill, knowledge, or chance, in
                  which ...
               </p>
            </section>
         </div>
      </section>
   );
}
