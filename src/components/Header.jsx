import React from "react";

export default function Header() {
   return (
      <header className="bg-slate-700 p-6 text-white flex justify-between items-center">
         <div className="font-bold text-2xl">
            <span>AMAN</span>
            <span className="text-red-500">'</span>
            <span>S </span>
            <span>PORTFOLIO</span>
         </div>
         <div>
            <ul className="flex justify-between items-center">
               <li className="mx-2 font-bold cursor-pointer">Home</li>
               <li className="mx-2 font-bold cursor-pointer">About</li>
               <li className="mx-2 font-bold cursor-pointer">Project</li>
               <li className="mx-2 font-bold cursor-pointer">Services</li>
               <li className="mx-2 font-bold cursor-pointer">Contact us</li>
            </ul>
         </div>
      </header>
   );
}
