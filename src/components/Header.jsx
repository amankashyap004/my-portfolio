import React from "react";
import NavigationContent from "./NavigationContent";

export default function Header() {
   return (
      <header className="bg-slate-700 px-6 py-4 text-white flex justify-between items-center">
         <div className="font-bold text-2xl">
            <span>AMAN</span>
            <span className="text-red-500">'</span>
            <span>S </span>
            <span>PORTFOLIO</span>
         </div>
         <div className="flex justify-between items-center">
            <NavigationContent textValue="Home" />
            <NavigationContent textValue="About" />
            <NavigationContent textValue="Services" />
            <NavigationContent textValue="Project" />
            <NavigationContent textValue="Game" />
            <NavigationContent textValue="Contact" />
         </div>
      </header>
   );
}
