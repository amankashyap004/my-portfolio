import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./pages/HeaderPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectPage from "./pages/ProjectPage";
import GamePage from "./pages/GamePage";
import ColorsPanelPage from "./pages/ColorsPanelPage";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function App() {
   const [isDarkMode, setIsDarkMode] = React.useState(false);
   const handelDarkMode = () => {
      setIsDarkMode(!isDarkMode);

      if (isDarkMode) {
         document.body.classList.remove("dark");
      } else {
         document.body.classList.add("dark");
      }
   };

   return (
      <BrowserRouter>
         <main className={`${isDarkMode ? "dark" : ""}`}>
            <HeaderPage />
            <ColorsPanelPage />
            <Routes>
               <Route path={`/`} element={<HomePage />} />
               <Route path={`/about`} element={<AboutPage />} />
               <Route path={`/contact`} element={<ContactPage />} />
               <Route path={`/services`} element={<ServicesPage />} />
               <Route path={`/project`} element={<ProjectPage />} />
               <Route path={`/game`} element={<GamePage />} />
            </Routes>
            <section className="fixed top-20 left-2">
               <div
                  className="flex justify-center items-center rounded-full p-4 w-3 h-3 border-2 cursor-pointer border-gray-300 hover:border-gray-400 active:shadow-lg transition-all duration-500 ease-in-out"
                  onClick={handelDarkMode}
               >
                  <div>
                     {isDarkMode ? <BsFillSunFill className="text-white" /> : <BsMoonStarsFill />}
                  </div>
               </div>
            </section>
         </main>
      </BrowserRouter>
   );
}
