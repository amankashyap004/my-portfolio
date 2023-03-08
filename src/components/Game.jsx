import React from "react";
import GameCard from "./GameCard";
import {
   snakeGunWaterImg,
   guessesTheNumberImg,
   footballScoreboardImg,
   randomMotivationalQuotesImg,
} from "../assets/images";

export default function Game() {
   return (
      <section className="flex justify-center items-center flex-col m-4">
         <div className="mt-7">
            <h2 className="text-white font-bold text-2xl uppercase">Game</h2>
         </div>
         <div className="w-full flex justify-center items-start mt-4">
            <GameCard
               bgImg={snakeGunWaterImg}
               heading="Snake Gun Water"
               description="Snake Gun Water Game is one of the famous two-player game played by many people."
               link="https://amankashyap004.github.io/snake-gun-water-game/"
            />
            <GameCard
               bgImg={guessesTheNumberImg}
               heading="Guess The Number"
               description="Guess The Number is a fun game that challenges to guess a number."
               link="https://amankashyap004.github.io/guess-the-number/"
            />
            <GameCard
               bgImg={footballScoreboardImg}
               heading="Football Scoreboard"
               description="It is a simple Football Scoreboard website"
               link="https://amankashyap004.github.io/football-scoreboard/"
            />
            <GameCard
               bgImg={randomMotivationalQuotesImg}
               heading="Random Motivational Quotes"
               description="Random Motivational Quotes website is awesome random quotes generator"
               link="https://amankashyap004.github.io/random-motivational-quotes/"
            />
         </div>
      </section>
   );
}
