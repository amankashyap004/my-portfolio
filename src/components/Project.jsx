import React from "react";
import ProjectCard from "./ProjectCard";
import { taskHiveImg } from "../assets/images";

export default function Project() {
   return (
      <section className="flex justify-center items-center flex-col m-4">
         <div className="mt-7 sm:mt-4">
            <h2 className="text-white font-bold text-2xl uppercase sm:text-xl">My Works</h2>
         </div>
         <div className="w-full flex justify-center items-center">
            <ProjectCard
               image={taskHiveImg}
               heading="Task Hive"
               description="Task Hive is a powerful task management tool that helps you stay on top of your to-do
            list. With its user-friendly interface, you can easily create and organize your
            tasks, and prioritize them based on their importance. To use Task Hive, simply sign
            up and log in to your account. You can access all your previous tasks and check them
            off as completed. Task Hive is built using the latest web technologies like Tailwind
            CSS, React JS, and Firebase, ensuring a fast and responsive experience."
            />
            <ProjectCard
               image={taskHiveImg}
               heading="Task Hive"
               description="Task Hive is a powerful task management tool that helps you stay on top of your to-do
            list. With its user-friendly interface, you can easily create and organize your
            tasks, and prioritize them based on their importance. To use Task Hive, simply sign
            up and log in to your account. You can access all your previous tasks and check them
            off as completed. Task Hive is built using the latest web technologies like Tailwind
            CSS, React JS, and Firebase, ensuring a fast and responsive experience."
            />
            <ProjectCard
               image={taskHiveImg}
               heading="Task Hive"
               description="Task Hive is a powerful task management tool that helps you stay on top of your to-do
            list. With its user-friendly interface, you can easily create and organize your
            tasks, and prioritize them based on their importance. To use Task Hive, simply sign
            up and log in to your account. You can access all your previous tasks and check them
            off as completed. Task Hive is built using the latest web technologies like Tailwind
            CSS, React JS, and Firebase, ensuring a fast and responsive experience."
            />
         </div>
      </section>
   );
}
