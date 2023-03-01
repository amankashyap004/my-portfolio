import React from "react";
import { profileImage } from "../../assets/images/index";

export default function Profile() {
   return (
      <section className="p-4 w-full flex justify-center items-center">
         <div className="w-[250px] rounded sm:w-[350px]">
            <img src={profileImage} className="w-full rounded" />
         </div>
      </section>
   );
}
