import React from "react";
import { Link } from "react-router-dom";

export default function SocialMediaContainer({ icon, link }) {
   return (
      <Link to={link ? link : "/"}>
         <div className="font-medium text-base rounded-full p-1.5 cursor-pointer text-gray-100 dark:text-gray-900 shadow-md bg-blue-600 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition-all duration-500 ease-in-out mr-2">
            {icon}
         </div>
      </Link>
   );
}
