import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./pages/HeaderPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
   return (
      <BrowserRouter>
         <HeaderPage />
         <Routes>
            <Route path={`/`} element={<HomePage />} />
            <Route path={`/about`} element={<AboutPage />} />
         </Routes>
      </BrowserRouter>
   );
}
