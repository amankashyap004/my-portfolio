import React from "react";
import "./App.css";
import HeaderPage from "./pages/HeaderPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
   return (
      <BrowserRouter>
         <HeaderPage />
         <Routes>
            <Route path={`/`} element={<HomePage />} />
         </Routes>
      </BrowserRouter>
   );
}
