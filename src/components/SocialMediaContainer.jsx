import React from "react";

export default function SocialMediaContainer({ icon }) {
   return (
      <div className=" text-base rounded-full p-1.5 bg-blue-500 cursor-pointer hover:text-blue-800 hover:bg-blue-300 mr-2">
         {icon}
      </div>
   );
}
