import React from "react";
import Home from "./pages/Home/home";
import Footer from "./pages/Footer";
import Courses from "./pages/courses";
import Contact from "./pages/contact";
import About from "./pages/about";
import NavBar from "./pages/navBar";
import NotFound from "./pages/notFound";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import FontStyles from "./fontStyle";

import "./app.css";

function App() {
  return (
    <div>
      <FontStyles />
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
