import React from "react";
import NavigationContent from "./NavigationContent";
import { Link } from "react-router-dom";

export default function HeaderNav() {
   return (
      <nav className="flex justify-between items-center sm:flex-col sm:justify-start sm:items-start">
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
      </nav>
   );
}
