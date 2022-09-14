import React from "react";
import Header from "./header";
import Categories from "./categories";
import PopularCourses from "./PopularCourses";
import Faqs from "./faqs";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <Categories />
      <PopularCourses />
      <Faqs />
      <Footer />
    </>
  );
}

export default Home;
