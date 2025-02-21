/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./Components/Frontend/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Frontend/About";
import Servicespage from "./Components/Frontend/Servicespage";
import Casestudiespage from "./Components/Frontend/Casestudiespage";
import Contactus from "./Components/Frontend/Contactus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/casestudies" element={<Casestudiespage />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
