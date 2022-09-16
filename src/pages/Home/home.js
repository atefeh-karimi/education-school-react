import React from "react";
import Header from "./header";
import Categories from "./categories";
import PopularCourses from "./PopularCourses";
import Faqs from "./faqs";

function Home() {
  return (
    <>
      <Header />
      <Categories />
      <PopularCourses />
      <Faqs />
    </>
  );
}

export default Home;
