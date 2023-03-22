import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./pages/HeaderPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import WorksPage from "./pages/WorksPage";
import GamePage from "./pages/GamePage";
import ColorsPanelPage from "./pages/ColorsPanelPage";

export default function App() {
   return (
      <BrowserRouter>
         <HeaderPage />
         <ColorsPanelPage />
         <Routes>
            <Route path={`/`} element={<HomePage />} />
            <Route path={`/about`} element={<AboutPage />} />
            <Route path={`/contact`} element={<ContactPage />} />
            <Route path={`/services`} element={<ServicesPage />} />
            <Route path={`/works`} element={<WorksPage />} />
            <Route path={`/game`} element={<GamePage />} />
         </Routes>
      </BrowserRouter>
   );
}
