import React from "react";
import GameCard from "./GameCard";
import { demoImg } from "../assets/images";

export default function Game() {
   return (
      <section className="flex justify-center items-center flex-col m-4">
         <div className="mt-7">
            <h2 className="text-white font-bold text-2xl uppercase">Game</h2>
         </div>
         <div className="w-full flex justify-center items-start mt-4">
            <GameCard
               bgImg={demoImg}
               heading="Game Title"
               description="A game is an activity or sport usually involving skill, knowledge, or chance"
            />
            <GameCard
               bgImg={demoImg}
               heading="Game Title"
               description="A game is an activity or sport usually involving skill, knowledge, or chance"
            />
            <GameCard
               bgImg={demoImg}
               heading="Game Title"
               description="A game is an activity or sport usually involving skill, knowledge, or chance"
            />
            <GameCard
               bgImg={demoImg}
               heading="Game Title"
               description="A game is an activity or sport usually involving skill, knowledge, or chance"
            />
         </div>
      </section>
   );
}
