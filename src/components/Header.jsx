import React from "react";
import NavigationContent from "./NavigationContent";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <header className="bg-slate-700 px-6 py-2 text-white flex justify-between items-center md:px-4">
         <Link to="/">
            <div className="cursor-pointer">
               <h2 className="font-bold text-2xl md:text-xl ">
                  <span className="text-blue-500">A</span>
                  <span>MAN</span>
                  <span className="text-blue-500">'</span>
                  <span>S </span>
               </h2>
               <h4 className="flex justify-end items-center text-sm font-semibold ml-8">
                  <span>PORT</span>
                  <span className=" text-blue-500">FOLIO</span>
               </h4>
            </div>
         </Link>
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
