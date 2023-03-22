import React from "react";
import Projects from "./Projects";
import Game from "./Game";

export default function Works() {
   return (
      <section className="flex justify-center items-center flex-col m-4">
         <Projects />
         <Game />
      </section>
   );
}
