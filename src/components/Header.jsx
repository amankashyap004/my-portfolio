import React from "react";
import HeaderNav from "./HeaderNav";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

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
         <div className="sm:hidden">
            <HeaderNav />
         </div>
         <div className="hidden sm:block">
            <BiMenu className="text-2xl" />
         </div>
      </header>
   );
}
