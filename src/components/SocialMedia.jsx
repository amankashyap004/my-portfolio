import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import SocialMediaContainer from "./SocialMediaContainer";

export default function SocialMedia() {
   return (
      <section className="flex justify-center items-center m-4">
         <SocialMediaContainer icon={<FaGithub />} />
         <SocialMediaContainer icon={<FaLinkedinIn />} />
         <SocialMediaContainer icon={<FaInstagram />} />
         <SocialMediaContainer icon={<FaTwitter />} />
      </section>
   );
}
