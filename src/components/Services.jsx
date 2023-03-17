import React from "react";
import { webImg } from "../assets/images";
import ServicesCard from "./ServicesCard";

export default function Services() {
   return (
      <section className="flex justify-center items-center flex-col m-3 md:mx-2 sm:mx-0">
         <div className="mt-7 sm:mt-4">
            <h2 className="text-gray-900 dark:text-gray-100 font-bold text-2xl uppercase sm:text-xl">
               Our Services
            </h2>
         </div>
         <div className="w-full p-4 flex justify-center items-start md:flex-wrap md:p-2 sm:px-0">
            <ServicesCard
               image={webImg}
               heading="Web Development"
               description="Hey there, As a web developer I specialize in creating beautiful and functional
               websites that not only look great but also help businesses grow. I'd love to chat
               with you about how I can help take your website to the next level. How about we grab
               a coffee and discuss your web development needs?"
            />
            <ServicesCard
               image={webImg}
               heading="Project"
               description="I offer a wide range of solutions designed to meet the unique needs and requirements 
               of each client. Whether you are a college student looking for guidance and support in completing 
               your academic projects or a company in need of specialized project management or consulting services,
               I have skills, expertise and experience to help you achieve your goals."
            />
            <ServicesCard
               image={webImg}
               heading="freelancing"
               description="As a freelancer in the field of web development, I provide high-quality services 
               that are fully responsive and customized to meet the specific needs of my clients. I pride myself 
               on delivering authentic, creative solutions at a fair and reasonable price. I am dedicated to delivering exceptional results 
               that help businesses grow and thrive in the digital age."
            />
            <ServicesCard
               image={webImg}
               heading="Custom Content Creation"
               description="As a social media post creator, I offer a range of services that help businesses 
               and influencer create engaging content for their social media platforms. Whether you need 
               attention-grabbing Instagram posts, eye-catching YouTube thumbnails, 
               or community posts that drive engagement and interaction, I have the skills and expertise to 
               create content that resonates with your audience."
            />
         </div>
      </section>
   );
}
