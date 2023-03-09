import React, { useState } from "react";
import HeaderNav from "./HeaderNav";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

export default function Header() {
   const [isSideBar, setIsSideBar] = useState(false);
   const [isToggleSideBar, setIsToggleSideBar] = useState(true);
   const handelClick = () => {
      setIsToggleSideBar(!isToggleSideBar);
      setIsSideBar(!isSideBar);
   };

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
            <div className="text-2xl flex justify-end items-center" onClick={handelClick}>
               {isToggleSideBar ? <BiMenu /> : <MdClose />}
            </div>
            {isSideBar ? (
               <div className="fixed top-16 right-0 w-28 h-full p-2 bg-slate-800">
                  <HeaderNav />
               </div>
            ) : (
               ""
            )}
         </div>
      </header>
   );
}
