import React, { useState } from "react";
import SmallBtn from "./SmallBtn";
import InputField from "./InputField";

export default function Contact() {
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      message: "",
   });

   function handleChange(event) {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: value,
      }));
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
   };

   return (
      <section className="flex justify-center items-start m-4">
         <div className="px-4 py-8 flex justify-center items-center flex-col">
            <section className="flex justify-center items-center flex-col my-2">
               <h2 className="text-white font-bold text-3xl mb-2">Contact</h2>
               <p className="text-gray-500 text-sm">
                  We'd love to hear from you! Send us a message and let's make something amazing
                  together.
               </p>
            </section>
            <section className="flex justify-center items-center flex-col my-2 w-full">
               <form className="w-full" onSubmit={handleSubmit}>
                  <InputField
                     title="Name"
                     id="fullName"
                     type="text"
                     placeholder="Enter Your Name"
                     name="fullName"
                     onChange={handleChange}
                     value={formData.fullName}
                  />
                  <InputField
                     title="Email"
                     id="email"
                     type="email"
                     placeholder="Enter Your Email"
                     name="email"
                     onChange={handleChange}
                     value={formData.email}
                  />

                  <div className="flex justify-start items-start flex-col w-full my-2">
                     <label htmlFor="message" className="text-gray-300 font-semibold text-lg pb-1">
                        Message
                     </label>
                     <textarea
                        className="w-full h-28 px-3 py-2 rounded-md border-2 border-gray-500 focus:border-2 focus:border-blue-500 outline-none bg-gray-500"
                        id="message"
                        placeholder="Enter Your Message"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                     />
                  </div>
                  <div className="mt-4">
                     <SmallBtn value="Send Message" />
                  </div>
               </form>
            </section>
         </div>
      </section>
   );
}
