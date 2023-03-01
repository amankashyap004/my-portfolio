import React from "react";
import NavigationContent from "./NavigationContent";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <header className="bg-slate-700 px-6 py-4 text-white flex justify-between items-center md:p-4">
         <div className="font-bold text-2xl md:text-xl">
            <span>AMAN</span>
            <span className="text-red-500">'</span>
            <span>S </span>
            <span>PORTFOLIO</span>
         </div>
         <div className="flex justify-between items-center">
            <Link to="/">
               <NavigationContent textValue="Home" />
            </Link>
            <Link to="/about">
               <NavigationContent textValue="About" />
            </Link>
            <Link to="/services">
               <NavigationContent textValue="Services" />
            </Link>
            <Link to="/project">
               <NavigationContent textValue="Project" />
            </Link>
            <Link to="/game">
               <NavigationContent textValue="Game" />
            </Link>
            <Link to="/contact">
               <NavigationContent textValue="Contact" />
            </Link>
         </div>
      </header>
   );
}
