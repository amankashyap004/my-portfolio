import React from "react";
import ProjectCard from "./ProjectCard";
import { taskHiveImg, reactYoutubeCloneImg, postGeneratorImg } from "../../assets/images";

export default function Projects() {
   return (
      <section className="flex justify-center items-center flex-col">
         <div className="mt-7 border-b-2 border-blue-500 sm:mt-4">
            <h2 className="text-gray-900 dark:text-gray-100 font-bold text-2xl uppercase sm:text-xl">
               Projects
            </h2>
         </div>
         <div className="w-full flex justify-center items-start md:flex-wrap md:p-2 sm:px-0">
            <ProjectCard
               image={taskHiveImg}
               heading="Task Hive"
               description="Task Hive is a powerful task management tool that helps you stay on top of your to-do
            list. With its user-friendly interface, you can easily create and organize your
            tasks, and prioritize them based on their importance. To use Task Hive, simply sign
            up and log in to your account. You can access all your previous tasks and check them
            off as completed. Task Hive is built using the latest web technologies like Tailwind
            CSS, React JS, and Firebase, ensuring a fast and responsive experience."
               codeLink="https://github.com/amankashyap004/task-hive"
               liveLink="https://amankashyap004.github.io/task-hive"
            />
            <ProjectCard
               image={reactYoutubeCloneImg}
               heading="React Youtube Clone"
               description="By building a YouTube clone with React and YouTube API, you can gain valuable 
               experience in web development and API integration. With React, you can design a responsive user 
               interface that interacts with the YouTube API, allowing you to display and play videos, perform 
               searches, and more. Through this project, you'll leverage the power of APIs to build a dynamic 
               and functional web application, while also improving your skills in React and API integration."
               codeLink="https://github.com/amankashyap004/react-youtube-clone"
            />
            <ProjectCard
               image={postGeneratorImg}
               heading="Post Generator"
               description="It sounds like you have created a website that allows users to generate social 
               media posts and memes using a drag and drop interface. That's really impressive!
               A drag and drop interface can make the process of creating social media content much easier and 
               more intuitive for users. It allows them to easily add images, text, and other elements to their 
               posts and memes without having to worry about coding or design skills."
               codeLink="https://github.com/amankashyap004/post-generator"
            />
         </div>
      </section>
   );
}
