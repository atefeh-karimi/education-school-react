import React from "react";
import Home from "./pages/Home/home";
import Footer from "./pages/Footer";
import Courses from "./pages/Cources/courses";
import Contact from "./pages/ContactUS/contact";
import About from "./pages/AboutUS/about";
import NavBar from "./pages/navBar";
import NotFound from "./pages/notFound";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import FontStyles from "./fontStyle";

import "./app.css";

const theme = {
  mobile: "600px",
  tablet: "1024px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
