import React from "react";
import PersonalInfoCard from "./PersonalInfoCard";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { MdEmail, MdLanguage } from "react-icons/md";
import { GiWorld } from "react-icons/gi";

export default function PersonalInfo() {
   return (
      <section className="grid grid-cols-3 gap-4 p-8">
         <PersonalInfoCard title="Full Name" name="Aman Kumar Kashyap" icon={<FaUser />} />
         <PersonalInfoCard title="Date Of Birth" name="28 july 1997" icon={<FaCalendarAlt />} />
         <PersonalInfoCard title="Email" name="amankashyap004@gmail.com" icon={<MdEmail />} />
         <PersonalInfoCard title="Address" name="Raipur, India" icon={<GiWorld />} />
         <PersonalInfoCard title="Language" name="Hindi, English" icon={<MdLanguage />} />
      </section>
   );
}
