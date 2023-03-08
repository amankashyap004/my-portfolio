import React from "react";
import GameCard from "./GameCard";

export default function Game() {
   return (
      <section className="flex justify-center items-center flex-col m-4">
         <div className="mt-7">
            <h2 className="text-white font-bold text-2xl uppercase">Game</h2>
         </div>
         <div className="w-full flex justify-center items-start flex-wrap mt-4">
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
         </div>
      </section>
   );
}
