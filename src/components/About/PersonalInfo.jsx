import React from "react";
import PersonalInfoCard from "./PersonalInfoCard";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function PersonalInfo() {
   return (
      <section className="grid grid-cols-3 gap-4 p-4">
         <PersonalInfoCard title="Full Name" name="Aman Kumar Kashyap" icon={<FaUser />} />
         <PersonalInfoCard title="Email" name="amankashyap004@gmail.com" icon={<MdEmail />} />
      </section>
   );
}
